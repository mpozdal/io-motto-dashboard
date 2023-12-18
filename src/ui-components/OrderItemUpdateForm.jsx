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
import {
  getOrder,
  getOrderItem,
  listDrinks,
  listFlavorShots,
  listMilks,
  listOrders,
  listSizes,
} from "../graphql/queries";
import { updateFlavorShot, updateOrderItem } from "../graphql/mutations";
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
export default function OrderItemUpdateForm(props) {
  const {
    id: idProp,
    orderItem: orderItemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    drink: undefined,
    milk: undefined,
    size: undefined,
    flavorShots: [],
    price: "",
    orderItemsId: undefined,
  };
  const [drink, setDrink] = React.useState(initialValues.drink);
  const [drinkLoading, setDrinkLoading] = React.useState(false);
  const [drinkRecords, setDrinkRecords] = React.useState([]);
  const [milk, setMilk] = React.useState(initialValues.milk);
  const [milkLoading, setMilkLoading] = React.useState(false);
  const [milkRecords, setMilkRecords] = React.useState([]);
  const [size, setSize] = React.useState(initialValues.size);
  const [sizeLoading, setSizeLoading] = React.useState(false);
  const [sizeRecords, setSizeRecords] = React.useState([]);
  const [flavorShots, setFlavorShots] = React.useState(
    initialValues.flavorShots
  );
  const [flavorShotsLoading, setFlavorShotsLoading] = React.useState(false);
  const [flavorShotsRecords, setFlavorShotsRecords] = React.useState([]);
  const [price, setPrice] = React.useState(initialValues.price);
  const [orderItemsId, setOrderItemsId] = React.useState(
    initialValues.orderItemsId
  );
  const [orderItemsIdLoading, setOrderItemsIdLoading] = React.useState(false);
  const [orderItemsIdRecords, setOrderItemsIdRecords] = React.useState([]);
  const [selectedOrderItemsIdRecords, setSelectedOrderItemsIdRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderItemRecord
      ? {
          ...initialValues,
          ...orderItemRecord,
          drink,
          milk,
          size,
          flavorShots: linkedFlavorShots,
          orderItemsId,
        }
      : initialValues;
    setDrink(cleanValues.drink);
    setCurrentDrinkValue(undefined);
    setCurrentDrinkDisplayValue("");
    setMilk(cleanValues.milk);
    setCurrentMilkValue(undefined);
    setCurrentMilkDisplayValue("");
    setSize(cleanValues.size);
    setCurrentSizeValue(undefined);
    setCurrentSizeDisplayValue("");
    setFlavorShots(cleanValues.flavorShots ?? []);
    setCurrentFlavorShotsValue(undefined);
    setCurrentFlavorShotsDisplayValue("");
    setPrice(cleanValues.price);
    setOrderItemsId(cleanValues.orderItemsId);
    setCurrentOrderItemsIdValue(undefined);
    setCurrentOrderItemsIdDisplayValue("");
    setErrors({});
  };
  const [orderItemRecord, setOrderItemRecord] =
    React.useState(orderItemModelProp);
  const [linkedFlavorShots, setLinkedFlavorShots] = React.useState([]);
  const canUnlinkFlavorShots = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getOrderItem.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrderItem
        : orderItemModelProp;
      const drinkRecord = record ? await record.drink : undefined;
      setDrink(drinkRecord);
      const milkRecord = record ? await record.milk : undefined;
      setMilk(milkRecord);
      const sizeRecord = record ? await record.size : undefined;
      setSize(sizeRecord);
      const linkedFlavorShots = record?.flavorShots?.items ?? [];
      setLinkedFlavorShots(linkedFlavorShots);
      const orderItemsIdRecord = record ? record.orderItemsId : undefined;
      const orderRecord = orderItemsIdRecord
        ? (
            await client.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: orderItemsIdRecord },
            })
          )?.data?.getOrder
        : undefined;
      setOrderItemsId(orderItemsIdRecord);
      setSelectedOrderItemsIdRecords([orderRecord]);
      setOrderItemRecord(record);
    };
    queryData();
  }, [idProp, orderItemModelProp]);
  React.useEffect(resetStateValues, [
    orderItemRecord,
    drink,
    milk,
    size,
    linkedFlavorShots,
    orderItemsId,
  ]);
  const [currentDrinkDisplayValue, setCurrentDrinkDisplayValue] =
    React.useState("");
  const [currentDrinkValue, setCurrentDrinkValue] = React.useState(undefined);
  const drinkRef = React.createRef();
  const [currentMilkDisplayValue, setCurrentMilkDisplayValue] =
    React.useState("");
  const [currentMilkValue, setCurrentMilkValue] = React.useState(undefined);
  const milkRef = React.createRef();
  const [currentSizeDisplayValue, setCurrentSizeDisplayValue] =
    React.useState("");
  const [currentSizeValue, setCurrentSizeValue] = React.useState(undefined);
  const sizeRef = React.createRef();
  const [currentFlavorShotsDisplayValue, setCurrentFlavorShotsDisplayValue] =
    React.useState("");
  const [currentFlavorShotsValue, setCurrentFlavorShotsValue] =
    React.useState(undefined);
  const flavorShotsRef = React.createRef();
  const [currentOrderItemsIdDisplayValue, setCurrentOrderItemsIdDisplayValue] =
    React.useState("");
  const [currentOrderItemsIdValue, setCurrentOrderItemsIdValue] =
    React.useState(undefined);
  const orderItemsIdRef = React.createRef();
  const getIDValue = {
    drink: (r) => JSON.stringify({ id: r?.id }),
    milk: (r) => JSON.stringify({ id: r?.id }),
    size: (r) => JSON.stringify({ id: r?.id }),
    flavorShots: (r) => JSON.stringify({ id: r?.id }),
  };
  const drinkIdSet = new Set(
    Array.isArray(drink)
      ? drink.map((r) => getIDValue.drink?.(r))
      : getIDValue.drink?.(drink)
  );
  const milkIdSet = new Set(
    Array.isArray(milk)
      ? milk.map((r) => getIDValue.milk?.(r))
      : getIDValue.milk?.(milk)
  );
  const sizeIdSet = new Set(
    Array.isArray(size)
      ? size.map((r) => getIDValue.size?.(r))
      : getIDValue.size?.(size)
  );
  const flavorShotsIdSet = new Set(
    Array.isArray(flavorShots)
      ? flavorShots.map((r) => getIDValue.flavorShots?.(r))
      : getIDValue.flavorShots?.(flavorShots)
  );
  const getDisplayValue = {
    drink: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    milk: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    size: (r) => `${r?.value ? r?.value + " - " : ""}${r?.id}`,
    flavorShots: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    orderItemsId: (r) => `${r?.total ? r?.total + " - " : ""}${r?.id}`,
  };
  const validations = {
    drink: [{ type: "Required", validationMessage: "Drink is required." }],
    milk: [],
    size: [{ type: "Required", validationMessage: "Size is required." }],
    flavorShots: [],
    price: [{ type: "Required" }],
    orderItemsId: [],
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
  const fetchDrinkRecords = async (value) => {
    setDrinkLoading(true);
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
      var loaded = result.filter(
        (item) => !drinkIdSet.has(getIDValue.drink?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDrinkRecords(newOptions.slice(0, autocompleteLength));
    setDrinkLoading(false);
  };
  const fetchMilkRecords = async (value) => {
    setMilkLoading(true);
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
          query: listMilks.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMilks?.items;
      var loaded = result.filter(
        (item) => !milkIdSet.has(getIDValue.milk?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMilkRecords(newOptions.slice(0, autocompleteLength));
    setMilkLoading(false);
  };
  const fetchSizeRecords = async (value) => {
    setSizeLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ value: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listSizes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listSizes?.items;
      var loaded = result.filter(
        (item) => !sizeIdSet.has(getIDValue.size?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSizeRecords(newOptions.slice(0, autocompleteLength));
    setSizeLoading(false);
  };
  const fetchFlavorShotsRecords = async (value) => {
    setFlavorShotsLoading(true);
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
          query: listFlavorShots.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listFlavorShots?.items;
      var loaded = result.filter(
        (item) => !flavorShotsIdSet.has(getIDValue.flavorShots?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setFlavorShotsRecords(newOptions.slice(0, autocompleteLength));
    setFlavorShotsLoading(false);
  };
  const fetchOrderItemsIdRecords = async (value) => {
    setOrderItemsIdLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ total: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listOrders.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listOrders?.items;
      var loaded = result.filter((item) => orderItemsId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrderItemsIdRecords(newOptions.slice(0, autocompleteLength));
    setOrderItemsIdLoading(false);
  };
  React.useEffect(() => {
    fetchDrinkRecords("");
    fetchMilkRecords("");
    fetchSizeRecords("");
    fetchFlavorShotsRecords("");
    fetchOrderItemsIdRecords("");
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
          drink,
          milk: milk ?? null,
          size,
          flavorShots: flavorShots ?? null,
          price,
          orderItemsId: orderItemsId ?? null,
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
          const promises = [];
          const flavorShotsToLink = [];
          const flavorShotsToUnLink = [];
          const flavorShotsSet = new Set();
          const linkedFlavorShotsSet = new Set();
          flavorShots.forEach((r) =>
            flavorShotsSet.add(getIDValue.flavorShots?.(r))
          );
          linkedFlavorShots.forEach((r) =>
            linkedFlavorShotsSet.add(getIDValue.flavorShots?.(r))
          );
          linkedFlavorShots.forEach((r) => {
            if (!flavorShotsSet.has(getIDValue.flavorShots?.(r))) {
              flavorShotsToUnLink.push(r);
            }
          });
          flavorShots.forEach((r) => {
            if (!linkedFlavorShotsSet.has(getIDValue.flavorShots?.(r))) {
              flavorShotsToLink.push(r);
            }
          });
          flavorShotsToUnLink.forEach((original) => {
            if (!canUnlinkFlavorShots) {
              throw Error(
                `FlavorShot ${original.id} cannot be unlinked from OrderItem because orderItemFlavorShotsId is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateFlavorShot.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderItemFlavorShotsId: null,
                  },
                },
              })
            );
          });
          flavorShotsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateFlavorShot.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderItemFlavorShotsId: orderItemRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            orderItemDrinkId: modelFields?.drink?.id ?? null,
            orderItemMilkId: modelFields?.milk?.id ?? null,
            orderItemSizeId: modelFields?.size?.id ?? null,
            price: modelFields.price,
            orderItemsId: modelFields.orderItemsId ?? null,
          };
          promises.push(
            client.graphql({
              query: updateOrderItem.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: orderItemRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "OrderItemUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              drink: value,
              milk,
              size,
              flavorShots,
              price,
              orderItemsId,
            };
            const result = onChange(modelFields);
            value = result?.drink ?? value;
          }
          setDrink(value);
          setCurrentDrinkValue(undefined);
          setCurrentDrinkDisplayValue("");
        }}
        currentFieldValue={currentDrinkValue}
        label={"Drink"}
        items={drink ? [drink] : []}
        hasError={errors?.drink?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("drink", currentDrinkValue)
        }
        errorMessage={errors?.drink?.errorMessage}
        getBadgeText={getDisplayValue.drink}
        setFieldValue={(model) => {
          setCurrentDrinkDisplayValue(
            model ? getDisplayValue.drink(model) : ""
          );
          setCurrentDrinkValue(model);
        }}
        inputFieldRef={drinkRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Drink"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Drink"
          value={currentDrinkDisplayValue}
          options={drinkRecords
            .filter((r) => !drinkIdSet.has(getIDValue.drink?.(r)))
            .map((r) => ({
              id: getIDValue.drink?.(r),
              label: getDisplayValue.drink?.(r),
            }))}
          isLoading={drinkLoading}
          onSelect={({ id, label }) => {
            setCurrentDrinkValue(
              drinkRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDrinkDisplayValue(label);
            runValidationTasks("drink", label);
          }}
          onClear={() => {
            setCurrentDrinkDisplayValue("");
          }}
          defaultValue={drink}
          onChange={(e) => {
            let { value } = e.target;
            fetchDrinkRecords(value);
            if (errors.drink?.hasError) {
              runValidationTasks("drink", value);
            }
            setCurrentDrinkDisplayValue(value);
            setCurrentDrinkValue(undefined);
          }}
          onBlur={() => runValidationTasks("drink", currentDrinkDisplayValue)}
          errorMessage={errors.drink?.errorMessage}
          hasError={errors.drink?.hasError}
          ref={drinkRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "drink")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              drink,
              milk: value,
              size,
              flavorShots,
              price,
              orderItemsId,
            };
            const result = onChange(modelFields);
            value = result?.milk ?? value;
          }
          setMilk(value);
          setCurrentMilkValue(undefined);
          setCurrentMilkDisplayValue("");
        }}
        currentFieldValue={currentMilkValue}
        label={"Milk"}
        items={milk ? [milk] : []}
        hasError={errors?.milk?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("milk", currentMilkValue)
        }
        errorMessage={errors?.milk?.errorMessage}
        getBadgeText={getDisplayValue.milk}
        setFieldValue={(model) => {
          setCurrentMilkDisplayValue(model ? getDisplayValue.milk(model) : "");
          setCurrentMilkValue(model);
        }}
        inputFieldRef={milkRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Milk"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Milk"
          value={currentMilkDisplayValue}
          options={milkRecords
            .filter((r) => !milkIdSet.has(getIDValue.milk?.(r)))
            .map((r) => ({
              id: getIDValue.milk?.(r),
              label: getDisplayValue.milk?.(r),
            }))}
          isLoading={milkLoading}
          onSelect={({ id, label }) => {
            setCurrentMilkValue(
              milkRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMilkDisplayValue(label);
            runValidationTasks("milk", label);
          }}
          onClear={() => {
            setCurrentMilkDisplayValue("");
          }}
          defaultValue={milk}
          onChange={(e) => {
            let { value } = e.target;
            fetchMilkRecords(value);
            if (errors.milk?.hasError) {
              runValidationTasks("milk", value);
            }
            setCurrentMilkDisplayValue(value);
            setCurrentMilkValue(undefined);
          }}
          onBlur={() => runValidationTasks("milk", currentMilkDisplayValue)}
          errorMessage={errors.milk?.errorMessage}
          hasError={errors.milk?.hasError}
          ref={milkRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "milk")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              drink,
              milk,
              size: value,
              flavorShots,
              price,
              orderItemsId,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          setSize(value);
          setCurrentSizeValue(undefined);
          setCurrentSizeDisplayValue("");
        }}
        currentFieldValue={currentSizeValue}
        label={"Size"}
        items={size ? [size] : []}
        hasError={errors?.size?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("size", currentSizeValue)
        }
        errorMessage={errors?.size?.errorMessage}
        getBadgeText={getDisplayValue.size}
        setFieldValue={(model) => {
          setCurrentSizeDisplayValue(model ? getDisplayValue.size(model) : "");
          setCurrentSizeValue(model);
        }}
        inputFieldRef={sizeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Size"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Size"
          value={currentSizeDisplayValue}
          options={sizeRecords
            .filter((r) => !sizeIdSet.has(getIDValue.size?.(r)))
            .map((r) => ({
              id: getIDValue.size?.(r),
              label: getDisplayValue.size?.(r),
            }))}
          isLoading={sizeLoading}
          onSelect={({ id, label }) => {
            setCurrentSizeValue(
              sizeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSizeDisplayValue(label);
            runValidationTasks("size", label);
          }}
          onClear={() => {
            setCurrentSizeDisplayValue("");
          }}
          defaultValue={size}
          onChange={(e) => {
            let { value } = e.target;
            fetchSizeRecords(value);
            if (errors.size?.hasError) {
              runValidationTasks("size", value);
            }
            setCurrentSizeDisplayValue(value);
            setCurrentSizeValue(undefined);
          }}
          onBlur={() => runValidationTasks("size", currentSizeDisplayValue)}
          errorMessage={errors.size?.errorMessage}
          hasError={errors.size?.hasError}
          ref={sizeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "size")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              drink,
              milk,
              size,
              flavorShots: values,
              price,
              orderItemsId,
            };
            const result = onChange(modelFields);
            values = result?.flavorShots ?? values;
          }
          setFlavorShots(values);
          setCurrentFlavorShotsValue(undefined);
          setCurrentFlavorShotsDisplayValue("");
        }}
        currentFieldValue={currentFlavorShotsValue}
        label={"Flavor shots"}
        items={flavorShots}
        hasError={errors?.flavorShots?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("flavorShots", currentFlavorShotsValue)
        }
        errorMessage={errors?.flavorShots?.errorMessage}
        getBadgeText={getDisplayValue.flavorShots}
        setFieldValue={(model) => {
          setCurrentFlavorShotsDisplayValue(
            model ? getDisplayValue.flavorShots(model) : ""
          );
          setCurrentFlavorShotsValue(model);
        }}
        inputFieldRef={flavorShotsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Flavor shots"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search FlavorShot"
          value={currentFlavorShotsDisplayValue}
          options={flavorShotsRecords
            .filter((r) => !flavorShotsIdSet.has(getIDValue.flavorShots?.(r)))
            .map((r) => ({
              id: getIDValue.flavorShots?.(r),
              label: getDisplayValue.flavorShots?.(r),
            }))}
          isLoading={flavorShotsLoading}
          onSelect={({ id, label }) => {
            setCurrentFlavorShotsValue(
              flavorShotsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFlavorShotsDisplayValue(label);
            runValidationTasks("flavorShots", label);
          }}
          onClear={() => {
            setCurrentFlavorShotsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchFlavorShotsRecords(value);
            if (errors.flavorShots?.hasError) {
              runValidationTasks("flavorShots", value);
            }
            setCurrentFlavorShotsDisplayValue(value);
            setCurrentFlavorShotsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("flavorShots", currentFlavorShotsDisplayValue)
          }
          errorMessage={errors.flavorShots?.errorMessage}
          hasError={errors.flavorShots?.hasError}
          ref={flavorShotsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "flavorShots")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              drink,
              milk,
              size,
              flavorShots,
              price: value,
              orderItemsId,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              drink,
              milk,
              size,
              flavorShots,
              price,
              orderItemsId: value,
            };
            const result = onChange(modelFields);
            value = result?.orderItemsId ?? value;
          }
          setOrderItemsId(value);
          setCurrentOrderItemsIdValue(undefined);
        }}
        currentFieldValue={currentOrderItemsIdValue}
        label={"Order items id"}
        items={orderItemsId ? [orderItemsId] : []}
        hasError={errors?.orderItemsId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("orderItemsId", currentOrderItemsIdValue)
        }
        errorMessage={errors?.orderItemsId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.orderItemsId(
                orderItemsIdRecords.find((r) => r.id === value) ??
                  selectedOrderItemsIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentOrderItemsIdDisplayValue(
            value
              ? getDisplayValue.orderItemsId(
                  orderItemsIdRecords.find((r) => r.id === value) ??
                    selectedOrderItemsIdRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentOrderItemsIdValue(value);
          const selectedRecord = orderItemsIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedOrderItemsIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={orderItemsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Order items id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Order"
          value={currentOrderItemsIdDisplayValue}
          options={orderItemsIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.orderItemsId?.(r),
            }))}
          isLoading={orderItemsIdLoading}
          onSelect={({ id, label }) => {
            setCurrentOrderItemsIdValue(id);
            setCurrentOrderItemsIdDisplayValue(label);
            runValidationTasks("orderItemsId", label);
          }}
          onClear={() => {
            setCurrentOrderItemsIdDisplayValue("");
          }}
          defaultValue={orderItemsId}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrderItemsIdRecords(value);
            if (errors.orderItemsId?.hasError) {
              runValidationTasks("orderItemsId", value);
            }
            setCurrentOrderItemsIdDisplayValue(value);
            setCurrentOrderItemsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("orderItemsId", currentOrderItemsIdValue)
          }
          errorMessage={errors.orderItemsId?.errorMessage}
          hasError={errors.orderItemsId?.hasError}
          ref={orderItemsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "orderItemsId")}
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
          isDisabled={!(idProp || orderItemModelProp)}
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
              !(idProp || orderItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
