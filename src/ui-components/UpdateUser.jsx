/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUser, listRoles, listStores } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UpdateUser(props) {
  const {
    id: idProp,
    user: userModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    defaultStore: undefined,
    role: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [defaultStore, setDefaultStore] = React.useState(
    initialValues.defaultStore
  );
  const [defaultStoreLoading, setDefaultStoreLoading] = React.useState(false);
  const [defaultStoreRecords, setDefaultStoreRecords] = React.useState([]);
  const [role, setRole] = React.useState(initialValues.role);
  const [roleLoading, setRoleLoading] = React.useState(false);
  const [roleRecords, setRoleRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord, defaultStore, role }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setDefaultStore(cleanValues.defaultStore);
    setCurrentDefaultStoreValue(undefined);
    setCurrentDefaultStoreDisplayValue("");
    setRole(cleanValues.role);
    setCurrentRoleValue(undefined);
    setCurrentRoleDisplayValue("");
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : userModelProp;
      const defaultStoreRecord = record ? await record.defaultStore : undefined;
      setDefaultStore(defaultStoreRecord);
      const roleRecord = record ? await record.role : undefined;
      setRole(roleRecord);
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [userRecord, defaultStore, role]);
  const [currentDefaultStoreDisplayValue, setCurrentDefaultStoreDisplayValue] =
    React.useState("");
  const [currentDefaultStoreValue, setCurrentDefaultStoreValue] =
    React.useState(undefined);
  const defaultStoreRef = React.createRef();
  const [currentRoleDisplayValue, setCurrentRoleDisplayValue] =
    React.useState("");
  const [currentRoleValue, setCurrentRoleValue] = React.useState(undefined);
  const roleRef = React.createRef();
  const getIDValue = {
    defaultStore: (r) => JSON.stringify({ id: r?.id }),
    role: (r) => JSON.stringify({ id: r?.id }),
  };
  const defaultStoreIdSet = new Set(
    Array.isArray(defaultStore)
      ? defaultStore.map((r) => getIDValue.defaultStore?.(r))
      : getIDValue.defaultStore?.(defaultStore)
  );
  const roleIdSet = new Set(
    Array.isArray(role)
      ? role.map((r) => getIDValue.role?.(r))
      : getIDValue.role?.(role)
  );
  const getDisplayValue = {
    defaultStore: (r) => `${r?.address ? r?.address + " - " : ""}${r?.id}`,
    role: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }],
    defaultStore: [],
    role: [{ type: "Required", validationMessage: "Role is required." }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchDefaultStoreRecords = async (value) => {
    setDefaultStoreLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ address: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listStores.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listStores?.items;
      var loaded = result.filter(
        (item) => !defaultStoreIdSet.has(getIDValue.defaultStore?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDefaultStoreRecords(newOptions.slice(0, autocompleteLength));
    setDefaultStoreLoading(false);
  };
  const fetchRoleRecords = async (value) => {
    setRoleLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listRoles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listRoles?.items;
      var loaded = result.filter(
        (item) => !roleIdSet.has(getIDValue.role?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setRoleRecords(newOptions.slice(0, autocompleteLength));
    setRoleLoading(false);
  };
  React.useEffect(() => {
    fetchDefaultStoreRecords("");
    fetchRoleRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          email,
          defaultStore: defaultStore ?? null,
          role,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            email: modelFields.email,
            userDefaultStoreId: modelFields?.defaultStore?.id ?? null,
            userRoleId: modelFields?.role?.id ?? null,
          };
          await client.graphql({
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UpdateUser")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              defaultStore,
              role,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              defaultStore,
              role,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              email,
              defaultStore: value,
              role,
            };
            const result = onChange(modelFields);
            value = result?.defaultStore ?? value;
          }
          setDefaultStore(value);
          setCurrentDefaultStoreValue(undefined);
          setCurrentDefaultStoreDisplayValue("");
        }}
        currentFieldValue={currentDefaultStoreValue}
        label={"Default store"}
        items={defaultStore ? [defaultStore] : []}
        hasError={errors?.defaultStore?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("defaultStore", currentDefaultStoreValue)
        }
        errorMessage={errors?.defaultStore?.errorMessage}
        getBadgeText={getDisplayValue.defaultStore}
        setFieldValue={(model) => {
          setCurrentDefaultStoreDisplayValue(
            model ? getDisplayValue.defaultStore(model) : ""
          );
          setCurrentDefaultStoreValue(model);
        }}
        inputFieldRef={defaultStoreRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Default store"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Store"
          value={currentDefaultStoreDisplayValue}
          options={defaultStoreRecords
            .filter((r) => !defaultStoreIdSet.has(getIDValue.defaultStore?.(r)))
            .map((r) => ({
              id: getIDValue.defaultStore?.(r),
              label: getDisplayValue.defaultStore?.(r),
            }))}
          isLoading={defaultStoreLoading}
          onSelect={({ id, label }) => {
            setCurrentDefaultStoreValue(
              defaultStoreRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDefaultStoreDisplayValue(label);
            runValidationTasks("defaultStore", label);
          }}
          onClear={() => {
            setCurrentDefaultStoreDisplayValue("");
          }}
          defaultValue={defaultStore}
          onChange={(e) => {
            let { value } = e.target;
            fetchDefaultStoreRecords(value);
            if (errors.defaultStore?.hasError) {
              runValidationTasks("defaultStore", value);
            }
            setCurrentDefaultStoreDisplayValue(value);
            setCurrentDefaultStoreValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("defaultStore", currentDefaultStoreDisplayValue)
          }
          errorMessage={errors.defaultStore?.errorMessage}
          hasError={errors.defaultStore?.hasError}
          ref={defaultStoreRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "defaultStore")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              email,
              defaultStore,
              role: value,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          setRole(value);
          setCurrentRoleValue(undefined);
          setCurrentRoleDisplayValue("");
        }}
        currentFieldValue={currentRoleValue}
        label={"Role"}
        items={role ? [role] : []}
        hasError={errors?.role?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("role", currentRoleValue)
        }
        errorMessage={errors?.role?.errorMessage}
        getBadgeText={getDisplayValue.role}
        setFieldValue={(model) => {
          setCurrentRoleDisplayValue(model ? getDisplayValue.role(model) : "");
          setCurrentRoleValue(model);
        }}
        inputFieldRef={roleRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Role"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Role"
          value={currentRoleDisplayValue}
          options={roleRecords
            .filter((r) => !roleIdSet.has(getIDValue.role?.(r)))
            .map((r) => ({
              id: getIDValue.role?.(r),
              label: getDisplayValue.role?.(r),
            }))}
          isLoading={roleLoading}
          onSelect={({ id, label }) => {
            setCurrentRoleValue(
              roleRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentRoleDisplayValue(label);
            runValidationTasks("role", label);
          }}
          onClear={() => {
            setCurrentRoleDisplayValue("");
          }}
          defaultValue={role}
          onChange={(e) => {
            let { value } = e.target;
            fetchRoleRecords(value);
            if (errors.role?.hasError) {
              runValidationTasks("role", value);
            }
            setCurrentRoleDisplayValue(value);
            setCurrentRoleValue(undefined);
          }}
          onBlur={() => runValidationTasks("role", currentRoleDisplayValue)}
          errorMessage={errors.role?.errorMessage}
          hasError={errors.role?.hasError}
          ref={roleRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "role")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
