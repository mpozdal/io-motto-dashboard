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
  getDrink,
  getFlavorShot,
  getOrderItem,
  listDrinks,
  listOrderItems,
} from "../graphql/queries";
import { updateFlavorShot } from "../graphql/mutations";
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
export default function FlavorShotUpdateForm(props) {
  const {
    id: idProp,
    flavorShot: flavorShotModelProp,
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
    extraCost: "",
    orderItemFlavorShotsId: undefined,
    drinkFlavorShotsId: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [extraCost, setExtraCost] = React.useState(initialValues.extraCost);
  const [orderItemFlavorShotsId, setOrderItemFlavorShotsId] = React.useState(
    initialValues.orderItemFlavorShotsId
  );
  const [orderItemFlavorShotsIdLoading, setOrderItemFlavorShotsIdLoading] =
    React.useState(false);
  const [orderItemFlavorShotsIdRecords, setOrderItemFlavorShotsIdRecords] =
    React.useState([]);
  const [
    selectedOrderItemFlavorShotsIdRecords,
    setSelectedOrderItemFlavorShotsIdRecords,
  ] = React.useState([]);
  const [drinkFlavorShotsId, setDrinkFlavorShotsId] = React.useState(
    initialValues.drinkFlavorShotsId
  );
  const [drinkFlavorShotsIdLoading, setDrinkFlavorShotsIdLoading] =
    React.useState(false);
  const [drinkFlavorShotsIdRecords, setDrinkFlavorShotsIdRecords] =
    React.useState([]);
  const [
    selectedDrinkFlavorShotsIdRecords,
    setSelectedDrinkFlavorShotsIdRecords,
  ] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = flavorShotRecord
      ? {
          ...initialValues,
          ...flavorShotRecord,
          orderItemFlavorShotsId,
          drinkFlavorShotsId,
        }
      : initialValues;
    setName(cleanValues.name);
    setExtraCost(cleanValues.extraCost);
    setOrderItemFlavorShotsId(cleanValues.orderItemFlavorShotsId);
    setCurrentOrderItemFlavorShotsIdValue(undefined);
    setCurrentOrderItemFlavorShotsIdDisplayValue("");
    setDrinkFlavorShotsId(cleanValues.drinkFlavorShotsId);
    setCurrentDrinkFlavorShotsIdValue(undefined);
    setCurrentDrinkFlavorShotsIdDisplayValue("");
    setErrors({});
  };
  const [flavorShotRecord, setFlavorShotRecord] =
    React.useState(flavorShotModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFlavorShot.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFlavorShot
        : flavorShotModelProp;
      const orderItemFlavorShotsIdRecord = record
        ? record.orderItemFlavorShotsId
        : undefined;
      const orderItemRecord = orderItemFlavorShotsIdRecord
        ? (
            await client.graphql({
              query: getOrderItem.replaceAll("__typename", ""),
              variables: { id: orderItemFlavorShotsIdRecord },
            })
          )?.data?.getOrderItem
        : undefined;
      setOrderItemFlavorShotsId(orderItemFlavorShotsIdRecord);
      setSelectedOrderItemFlavorShotsIdRecords([orderItemRecord]);
      const drinkFlavorShotsIdRecord = record
        ? record.drinkFlavorShotsId
        : undefined;
      const drinkRecord = drinkFlavorShotsIdRecord
        ? (
            await client.graphql({
              query: getDrink.replaceAll("__typename", ""),
              variables: { id: drinkFlavorShotsIdRecord },
            })
          )?.data?.getDrink
        : undefined;
      setDrinkFlavorShotsId(drinkFlavorShotsIdRecord);
      setSelectedDrinkFlavorShotsIdRecords([drinkRecord]);
      setFlavorShotRecord(record);
    };
    queryData();
  }, [idProp, flavorShotModelProp]);
  React.useEffect(resetStateValues, [
    flavorShotRecord,
    orderItemFlavorShotsId,
    drinkFlavorShotsId,
  ]);
  const [
    currentOrderItemFlavorShotsIdDisplayValue,
    setCurrentOrderItemFlavorShotsIdDisplayValue,
  ] = React.useState("");
  const [
    currentOrderItemFlavorShotsIdValue,
    setCurrentOrderItemFlavorShotsIdValue,
  ] = React.useState(undefined);
  const orderItemFlavorShotsIdRef = React.createRef();
  const [
    currentDrinkFlavorShotsIdDisplayValue,
    setCurrentDrinkFlavorShotsIdDisplayValue,
  ] = React.useState("");
  const [currentDrinkFlavorShotsIdValue, setCurrentDrinkFlavorShotsIdValue] =
    React.useState(undefined);
  const drinkFlavorShotsIdRef = React.createRef();
  const getDisplayValue = {
    orderItemFlavorShotsId: (r) =>
      `${r?.price ? r?.price + " - " : ""}${r?.id}`,
    drinkFlavorShotsId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    extraCost: [{ type: "Required" }],
    orderItemFlavorShotsId: [],
    drinkFlavorShotsId: [],
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
  const fetchOrderItemFlavorShotsIdRecords = async (value) => {
    setOrderItemFlavorShotsIdLoading(true);
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
      var loaded = result.filter((item) => orderItemFlavorShotsId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrderItemFlavorShotsIdRecords(newOptions.slice(0, autocompleteLength));
    setOrderItemFlavorShotsIdLoading(false);
  };
  const fetchDrinkFlavorShotsIdRecords = async (value) => {
    setDrinkFlavorShotsIdLoading(true);
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
      var loaded = result.filter((item) => drinkFlavorShotsId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDrinkFlavorShotsIdRecords(newOptions.slice(0, autocompleteLength));
    setDrinkFlavorShotsIdLoading(false);
  };
  React.useEffect(() => {
    fetchOrderItemFlavorShotsIdRecords("");
    fetchDrinkFlavorShotsIdRecords("");
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
          extraCost,
          orderItemFlavorShotsId: orderItemFlavorShotsId ?? null,
          drinkFlavorShotsId: drinkFlavorShotsId ?? null,
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
            query: updateFlavorShot.replaceAll("__typename", ""),
            variables: {
              input: {
                id: flavorShotRecord.id,
                ...modelFields,
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
      {...getOverrideProps(overrides, "FlavorShotUpdateForm")}
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
              extraCost,
              orderItemFlavorShotsId,
              drinkFlavorShotsId,
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
        label="Extra cost"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={extraCost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              extraCost: value,
              orderItemFlavorShotsId,
              drinkFlavorShotsId,
            };
            const result = onChange(modelFields);
            value = result?.extraCost ?? value;
          }
          if (errors.extraCost?.hasError) {
            runValidationTasks("extraCost", value);
          }
          setExtraCost(value);
        }}
        onBlur={() => runValidationTasks("extraCost", extraCost)}
        errorMessage={errors.extraCost?.errorMessage}
        hasError={errors.extraCost?.hasError}
        {...getOverrideProps(overrides, "extraCost")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              extraCost,
              orderItemFlavorShotsId: value,
              drinkFlavorShotsId,
            };
            const result = onChange(modelFields);
            value = result?.orderItemFlavorShotsId ?? value;
          }
          setOrderItemFlavorShotsId(value);
          setCurrentOrderItemFlavorShotsIdValue(undefined);
        }}
        currentFieldValue={currentOrderItemFlavorShotsIdValue}
        label={"Order item flavor shots id"}
        items={orderItemFlavorShotsId ? [orderItemFlavorShotsId] : []}
        hasError={errors?.orderItemFlavorShotsId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "orderItemFlavorShotsId",
            currentOrderItemFlavorShotsIdValue
          )
        }
        errorMessage={errors?.orderItemFlavorShotsId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.orderItemFlavorShotsId(
                orderItemFlavorShotsIdRecords.find((r) => r.id === value) ??
                  selectedOrderItemFlavorShotsIdRecords.find(
                    (r) => r.id === value
                  )
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentOrderItemFlavorShotsIdDisplayValue(
            value
              ? getDisplayValue.orderItemFlavorShotsId(
                  orderItemFlavorShotsIdRecords.find((r) => r.id === value) ??
                    selectedOrderItemFlavorShotsIdRecords.find(
                      (r) => r.id === value
                    )
                )
              : ""
          );
          setCurrentOrderItemFlavorShotsIdValue(value);
          const selectedRecord = orderItemFlavorShotsIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedOrderItemFlavorShotsIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={orderItemFlavorShotsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Order item flavor shots id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search OrderItem"
          value={currentOrderItemFlavorShotsIdDisplayValue}
          options={orderItemFlavorShotsIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.orderItemFlavorShotsId?.(r),
            }))}
          isLoading={orderItemFlavorShotsIdLoading}
          onSelect={({ id, label }) => {
            setCurrentOrderItemFlavorShotsIdValue(id);
            setCurrentOrderItemFlavorShotsIdDisplayValue(label);
            runValidationTasks("orderItemFlavorShotsId", label);
          }}
          onClear={() => {
            setCurrentOrderItemFlavorShotsIdDisplayValue("");
          }}
          defaultValue={orderItemFlavorShotsId}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrderItemFlavorShotsIdRecords(value);
            if (errors.orderItemFlavorShotsId?.hasError) {
              runValidationTasks("orderItemFlavorShotsId", value);
            }
            setCurrentOrderItemFlavorShotsIdDisplayValue(value);
            setCurrentOrderItemFlavorShotsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "orderItemFlavorShotsId",
              currentOrderItemFlavorShotsIdValue
            )
          }
          errorMessage={errors.orderItemFlavorShotsId?.errorMessage}
          hasError={errors.orderItemFlavorShotsId?.hasError}
          ref={orderItemFlavorShotsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "orderItemFlavorShotsId")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              extraCost,
              orderItemFlavorShotsId,
              drinkFlavorShotsId: value,
            };
            const result = onChange(modelFields);
            value = result?.drinkFlavorShotsId ?? value;
          }
          setDrinkFlavorShotsId(value);
          setCurrentDrinkFlavorShotsIdValue(undefined);
        }}
        currentFieldValue={currentDrinkFlavorShotsIdValue}
        label={"Drink flavor shots id"}
        items={drinkFlavorShotsId ? [drinkFlavorShotsId] : []}
        hasError={errors?.drinkFlavorShotsId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "drinkFlavorShotsId",
            currentDrinkFlavorShotsIdValue
          )
        }
        errorMessage={errors?.drinkFlavorShotsId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.drinkFlavorShotsId(
                drinkFlavorShotsIdRecords.find((r) => r.id === value) ??
                  selectedDrinkFlavorShotsIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentDrinkFlavorShotsIdDisplayValue(
            value
              ? getDisplayValue.drinkFlavorShotsId(
                  drinkFlavorShotsIdRecords.find((r) => r.id === value) ??
                    selectedDrinkFlavorShotsIdRecords.find(
                      (r) => r.id === value
                    )
                )
              : ""
          );
          setCurrentDrinkFlavorShotsIdValue(value);
          const selectedRecord = drinkFlavorShotsIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedDrinkFlavorShotsIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={drinkFlavorShotsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Drink flavor shots id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Drink"
          value={currentDrinkFlavorShotsIdDisplayValue}
          options={drinkFlavorShotsIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.drinkFlavorShotsId?.(r),
            }))}
          isLoading={drinkFlavorShotsIdLoading}
          onSelect={({ id, label }) => {
            setCurrentDrinkFlavorShotsIdValue(id);
            setCurrentDrinkFlavorShotsIdDisplayValue(label);
            runValidationTasks("drinkFlavorShotsId", label);
          }}
          onClear={() => {
            setCurrentDrinkFlavorShotsIdDisplayValue("");
          }}
          defaultValue={drinkFlavorShotsId}
          onChange={(e) => {
            let { value } = e.target;
            fetchDrinkFlavorShotsIdRecords(value);
            if (errors.drinkFlavorShotsId?.hasError) {
              runValidationTasks("drinkFlavorShotsId", value);
            }
            setCurrentDrinkFlavorShotsIdDisplayValue(value);
            setCurrentDrinkFlavorShotsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "drinkFlavorShotsId",
              currentDrinkFlavorShotsIdValue
            )
          }
          errorMessage={errors.drinkFlavorShotsId?.errorMessage}
          hasError={errors.drinkFlavorShotsId?.hasError}
          ref={drinkFlavorShotsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "drinkFlavorShotsId")}
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
          isDisabled={!(idProp || flavorShotModelProp)}
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
              !(idProp || flavorShotModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
