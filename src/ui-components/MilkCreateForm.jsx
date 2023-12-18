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
import { listDrinks } from "../graphql/queries";
import { createMilk } from "../graphql/mutations";
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
export default function MilkCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    drinkMilksId: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [drinkMilksId, setDrinkMilksId] = React.useState(
    initialValues.drinkMilksId
  );
  const [drinkMilksIdLoading, setDrinkMilksIdLoading] = React.useState(false);
  const [drinkMilksIdRecords, setDrinkMilksIdRecords] = React.useState([]);
  const [selectedDrinkMilksIdRecords, setSelectedDrinkMilksIdRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDrinkMilksId(initialValues.drinkMilksId);
    setCurrentDrinkMilksIdValue(undefined);
    setCurrentDrinkMilksIdDisplayValue("");
    setErrors({});
  };
  const [currentDrinkMilksIdDisplayValue, setCurrentDrinkMilksIdDisplayValue] =
    React.useState("");
  const [currentDrinkMilksIdValue, setCurrentDrinkMilksIdValue] =
    React.useState(undefined);
  const drinkMilksIdRef = React.createRef();
  const getDisplayValue = {
    drinkMilksId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    drinkMilksId: [],
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
  const fetchDrinkMilksIdRecords = async (value) => {
    setDrinkMilksIdLoading(true);
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
          query: listDrinks.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listDrinks?.items;
      var loaded = result.filter((item) => drinkMilksId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDrinkMilksIdRecords(newOptions.slice(0, autocompleteLength));
    setDrinkMilksIdLoading(false);
  };
  React.useEffect(() => {
    fetchDrinkMilksIdRecords("");
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
          drinkMilksId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await client.graphql({
            query: createMilk.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MilkCreateForm")}
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
              drinkMilksId,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              drinkMilksId: value,
            };
            const result = onChange(modelFields);
            value = result?.drinkMilksId ?? value;
          }
          setDrinkMilksId(value);
          setCurrentDrinkMilksIdValue(undefined);
        }}
        currentFieldValue={currentDrinkMilksIdValue}
        label={"Drink milks id"}
        items={drinkMilksId ? [drinkMilksId] : []}
        hasError={errors?.drinkMilksId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("drinkMilksId", currentDrinkMilksIdValue)
        }
        errorMessage={errors?.drinkMilksId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.drinkMilksId(
                drinkMilksIdRecords.find((r) => r.id === value) ??
                  selectedDrinkMilksIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentDrinkMilksIdDisplayValue(
            value
              ? getDisplayValue.drinkMilksId(
                  drinkMilksIdRecords.find((r) => r.id === value) ??
                    selectedDrinkMilksIdRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentDrinkMilksIdValue(value);
          const selectedRecord = drinkMilksIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedDrinkMilksIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={drinkMilksIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Drink milks id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Drink"
          value={currentDrinkMilksIdDisplayValue}
          options={drinkMilksIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.drinkMilksId?.(r),
            }))}
          isLoading={drinkMilksIdLoading}
          onSelect={({ id, label }) => {
            setCurrentDrinkMilksIdValue(id);
            setCurrentDrinkMilksIdDisplayValue(label);
            runValidationTasks("drinkMilksId", label);
          }}
          onClear={() => {
            setCurrentDrinkMilksIdDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchDrinkMilksIdRecords(value);
            if (errors.drinkMilksId?.hasError) {
              runValidationTasks("drinkMilksId", value);
            }
            setCurrentDrinkMilksIdDisplayValue(value);
            setCurrentDrinkMilksIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("drinkMilksId", currentDrinkMilksIdValue)
          }
          errorMessage={errors.drinkMilksId?.errorMessage}
          hasError={errors.drinkMilksId?.hasError}
          ref={drinkMilksIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "drinkMilksId")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
