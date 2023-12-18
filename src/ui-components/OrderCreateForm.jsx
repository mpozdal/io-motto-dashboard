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
import { listOrderItems, listStores, listUsers } from "../graphql/queries";
import { createOrder, updateOrderItem } from "../graphql/mutations";
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
export default function OrderCreateForm(props) {
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
    user: undefined,
    items: [],
    store: undefined,
    total: "",
    status: "",
    userOrdersId: undefined,
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [userLoading, setUserLoading] = React.useState(false);
  const [userRecords, setUserRecords] = React.useState([]);
  const [items, setItems] = React.useState(initialValues.items);
  const [itemsLoading, setItemsLoading] = React.useState(false);
  const [itemsRecords, setItemsRecords] = React.useState([]);
  const [store, setStore] = React.useState(initialValues.store);
  const [storeLoading, setStoreLoading] = React.useState(false);
  const [storeRecords, setStoreRecords] = React.useState([]);
  const [total, setTotal] = React.useState(initialValues.total);
  const [status, setStatus] = React.useState(initialValues.status);
  const [userOrdersId, setUserOrdersId] = React.useState(
    initialValues.userOrdersId
  );
  const [userOrdersIdLoading, setUserOrdersIdLoading] = React.useState(false);
  const [userOrdersIdRecords, setUserOrdersIdRecords] = React.useState([]);
  const [selectedUserOrdersIdRecords, setSelectedUserOrdersIdRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser(initialValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setItems(initialValues.items);
    setCurrentItemsValue(undefined);
    setCurrentItemsDisplayValue("");
    setStore(initialValues.store);
    setCurrentStoreValue(undefined);
    setCurrentStoreDisplayValue("");
    setTotal(initialValues.total);
    setStatus(initialValues.status);
    setUserOrdersId(initialValues.userOrdersId);
    setCurrentUserOrdersIdValue(undefined);
    setCurrentUserOrdersIdDisplayValue("");
    setErrors({});
  };
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [currentItemsDisplayValue, setCurrentItemsDisplayValue] =
    React.useState("");
  const [currentItemsValue, setCurrentItemsValue] = React.useState(undefined);
  const itemsRef = React.createRef();
  const [currentStoreDisplayValue, setCurrentStoreDisplayValue] =
    React.useState("");
  const [currentStoreValue, setCurrentStoreValue] = React.useState(undefined);
  const storeRef = React.createRef();
  const [currentUserOrdersIdDisplayValue, setCurrentUserOrdersIdDisplayValue] =
    React.useState("");
  const [currentUserOrdersIdValue, setCurrentUserOrdersIdValue] =
    React.useState(undefined);
  const userOrdersIdRef = React.createRef();
  const getIDValue = {
    user: (r) => JSON.stringify({ id: r?.id }),
    items: (r) => JSON.stringify({ id: r?.id }),
    store: (r) => JSON.stringify({ id: r?.id }),
  };
  const userIdSet = new Set(
    Array.isArray(user)
      ? user.map((r) => getIDValue.user?.(r))
      : getIDValue.user?.(user)
  );
  const itemsIdSet = new Set(
    Array.isArray(items)
      ? items.map((r) => getIDValue.items?.(r))
      : getIDValue.items?.(items)
  );
  const storeIdSet = new Set(
    Array.isArray(store)
      ? store.map((r) => getIDValue.store?.(r))
      : getIDValue.store?.(store)
  );
  const getDisplayValue = {
    user: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    items: (r) => `${r?.price ? r?.price + " - " : ""}${r?.id}`,
    store: (r) => `${r?.address ? r?.address + " - " : ""}${r?.id}`,
    userOrdersId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    user: [{ type: "Required", validationMessage: "User is required." }],
    items: [],
    store: [{ type: "Required", validationMessage: "Store is required." }],
    total: [{ type: "Required" }],
    status: [{ type: "Required" }],
    userOrdersId: [],
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
  const fetchUserRecords = async (value) => {
    setUserLoading(true);
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
          query: listUsers.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listUsers?.items;
      var loaded = result.filter(
        (item) => !userIdSet.has(getIDValue.user?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserRecords(newOptions.slice(0, autocompleteLength));
    setUserLoading(false);
  };
  const fetchItemsRecords = async (value) => {
    setItemsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ price: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listOrderItems.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listOrderItems?.items;
      var loaded = result.filter(
        (item) => !itemsIdSet.has(getIDValue.items?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setItemsRecords(newOptions.slice(0, autocompleteLength));
    setItemsLoading(false);
  };
  const fetchStoreRecords = async (value) => {
    setStoreLoading(true);
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
        (item) => !storeIdSet.has(getIDValue.store?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setStoreRecords(newOptions.slice(0, autocompleteLength));
    setStoreLoading(false);
  };
  const fetchUserOrdersIdRecords = async (value) => {
    setUserOrdersIdLoading(true);
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
          query: listUsers.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listUsers?.items;
      var loaded = result.filter((item) => userOrdersId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserOrdersIdRecords(newOptions.slice(0, autocompleteLength));
    setUserOrdersIdLoading(false);
  };
  React.useEffect(() => {
    fetchUserRecords("");
    fetchItemsRecords("");
    fetchStoreRecords("");
    fetchUserOrdersIdRecords("");
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
          user,
          items,
          store,
          total,
          status,
          userOrdersId,
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
            orderUserId: modelFields?.user?.id,
            orderStoreId: modelFields?.store?.id,
            total: modelFields.total,
            status: modelFields.status,
            userOrdersId: modelFields.userOrdersId,
          };
          const order = (
            await client.graphql({
              query: createOrder.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createOrder;
          const promises = [];
          promises.push(
            ...items.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateOrderItem.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      orderItemsId: order.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "OrderCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user: value,
              items,
              store,
              total,
              status,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          setUser(value);
          setCurrentUserValue(undefined);
          setCurrentUserDisplayValue("");
        }}
        currentFieldValue={currentUserValue}
        label={"User"}
        items={user ? [user] : []}
        hasError={errors?.user?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("user", currentUserValue)
        }
        errorMessage={errors?.user?.errorMessage}
        getBadgeText={getDisplayValue.user}
        setFieldValue={(model) => {
          setCurrentUserDisplayValue(model ? getDisplayValue.user(model) : "");
          setCurrentUserValue(model);
        }}
        inputFieldRef={userRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserDisplayValue}
          options={userRecords
            .filter((r) => !userIdSet.has(getIDValue.user?.(r)))
            .map((r) => ({
              id: getIDValue.user?.(r),
              label: getDisplayValue.user?.(r),
            }))}
          isLoading={userLoading}
          onSelect={({ id, label }) => {
            setCurrentUserValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserDisplayValue(label);
            runValidationTasks("user", label);
          }}
          onClear={() => {
            setCurrentUserDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchUserRecords(value);
            if (errors.user?.hasError) {
              runValidationTasks("user", value);
            }
            setCurrentUserDisplayValue(value);
            setCurrentUserValue(undefined);
          }}
          onBlur={() => runValidationTasks("user", currentUserDisplayValue)}
          errorMessage={errors.user?.errorMessage}
          hasError={errors.user?.hasError}
          ref={userRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "user")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              user,
              items: values,
              store,
              total,
              status,
              userOrdersId,
            };
            const result = onChange(modelFields);
            values = result?.items ?? values;
          }
          setItems(values);
          setCurrentItemsValue(undefined);
          setCurrentItemsDisplayValue("");
        }}
        currentFieldValue={currentItemsValue}
        label={"Items"}
        items={items}
        hasError={errors?.items?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("items", currentItemsValue)
        }
        errorMessage={errors?.items?.errorMessage}
        getBadgeText={getDisplayValue.items}
        setFieldValue={(model) => {
          setCurrentItemsDisplayValue(
            model ? getDisplayValue.items(model) : ""
          );
          setCurrentItemsValue(model);
        }}
        inputFieldRef={itemsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Items"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search OrderItem"
          value={currentItemsDisplayValue}
          options={itemsRecords
            .filter((r) => !itemsIdSet.has(getIDValue.items?.(r)))
            .map((r) => ({
              id: getIDValue.items?.(r),
              label: getDisplayValue.items?.(r),
            }))}
          isLoading={itemsLoading}
          onSelect={({ id, label }) => {
            setCurrentItemsValue(
              itemsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentItemsDisplayValue(label);
            runValidationTasks("items", label);
          }}
          onClear={() => {
            setCurrentItemsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchItemsRecords(value);
            if (errors.items?.hasError) {
              runValidationTasks("items", value);
            }
            setCurrentItemsDisplayValue(value);
            setCurrentItemsValue(undefined);
          }}
          onBlur={() => runValidationTasks("items", currentItemsDisplayValue)}
          errorMessage={errors.items?.errorMessage}
          hasError={errors.items?.hasError}
          ref={itemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "items")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user,
              items,
              store: value,
              total,
              status,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.store ?? value;
          }
          setStore(value);
          setCurrentStoreValue(undefined);
          setCurrentStoreDisplayValue("");
        }}
        currentFieldValue={currentStoreValue}
        label={"Store"}
        items={store ? [store] : []}
        hasError={errors?.store?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("store", currentStoreValue)
        }
        errorMessage={errors?.store?.errorMessage}
        getBadgeText={getDisplayValue.store}
        setFieldValue={(model) => {
          setCurrentStoreDisplayValue(
            model ? getDisplayValue.store(model) : ""
          );
          setCurrentStoreValue(model);
        }}
        inputFieldRef={storeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Store"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Store"
          value={currentStoreDisplayValue}
          options={storeRecords
            .filter((r) => !storeIdSet.has(getIDValue.store?.(r)))
            .map((r) => ({
              id: getIDValue.store?.(r),
              label: getDisplayValue.store?.(r),
            }))}
          isLoading={storeLoading}
          onSelect={({ id, label }) => {
            setCurrentStoreValue(
              storeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStoreDisplayValue(label);
            runValidationTasks("store", label);
          }}
          onClear={() => {
            setCurrentStoreDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchStoreRecords(value);
            if (errors.store?.hasError) {
              runValidationTasks("store", value);
            }
            setCurrentStoreDisplayValue(value);
            setCurrentStoreValue(undefined);
          }}
          onBlur={() => runValidationTasks("store", currentStoreDisplayValue)}
          errorMessage={errors.store?.errorMessage}
          hasError={errors.store?.hasError}
          ref={storeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "store")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Total"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              user,
              items,
              store,
              total: value,
              status,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              items,
              store,
              total,
              status: value,
              userOrdersId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user,
              items,
              store,
              total,
              status,
              userOrdersId: value,
            };
            const result = onChange(modelFields);
            value = result?.userOrdersId ?? value;
          }
          setUserOrdersId(value);
          setCurrentUserOrdersIdValue(undefined);
        }}
        currentFieldValue={currentUserOrdersIdValue}
        label={"User orders id"}
        items={userOrdersId ? [userOrdersId] : []}
        hasError={errors?.userOrdersId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("userOrdersId", currentUserOrdersIdValue)
        }
        errorMessage={errors?.userOrdersId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.userOrdersId(
                userOrdersIdRecords.find((r) => r.id === value) ??
                  selectedUserOrdersIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentUserOrdersIdDisplayValue(
            value
              ? getDisplayValue.userOrdersId(
                  userOrdersIdRecords.find((r) => r.id === value) ??
                    selectedUserOrdersIdRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentUserOrdersIdValue(value);
          const selectedRecord = userOrdersIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedUserOrdersIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={userOrdersIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User orders id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserOrdersIdDisplayValue}
          options={userOrdersIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.userOrdersId?.(r),
            }))}
          isLoading={userOrdersIdLoading}
          onSelect={({ id, label }) => {
            setCurrentUserOrdersIdValue(id);
            setCurrentUserOrdersIdDisplayValue(label);
            runValidationTasks("userOrdersId", label);
          }}
          onClear={() => {
            setCurrentUserOrdersIdDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchUserOrdersIdRecords(value);
            if (errors.userOrdersId?.hasError) {
              runValidationTasks("userOrdersId", value);
            }
            setCurrentUserOrdersIdDisplayValue(value);
            setCurrentUserOrdersIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("userOrdersId", currentUserOrdersIdValue)
          }
          errorMessage={errors.userOrdersId?.errorMessage}
          hasError={errors.userOrdersId?.hasError}
          ref={userOrdersIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userOrdersId")}
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
