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
  getCategory,
  getDrink,
  listCategories,
  listFlavorShots,
  listMilks,
  listSizes,
} from "../graphql/queries";
import {
  updateDrink,
  updateFlavorShot,
  updateMilk,
  updateSize,
} from "../graphql/mutations";
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
export default function UpdateDrink(props) {
  const {
    id: idProp,
    drink: drinkModelProp,
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
    description: "",
    price: "",
    sizes: [],
    flavorShots: [],
    milks: [],
    categoryDrinksId: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [sizes, setSizes] = React.useState(initialValues.sizes);
  const [sizesLoading, setSizesLoading] = React.useState(false);
  const [sizesRecords, setSizesRecords] = React.useState([]);
  const [flavorShots, setFlavorShots] = React.useState(
    initialValues.flavorShots
  );
  const [flavorShotsLoading, setFlavorShotsLoading] = React.useState(false);
  const [flavorShotsRecords, setFlavorShotsRecords] = React.useState([]);
  const [milks, setMilks] = React.useState(initialValues.milks);
  const [milksLoading, setMilksLoading] = React.useState(false);
  const [milksRecords, setMilksRecords] = React.useState([]);
  const [categoryDrinksId, setCategoryDrinksId] = React.useState(
    initialValues.categoryDrinksId
  );
  const [categoryDrinksIdLoading, setCategoryDrinksIdLoading] =
    React.useState(false);
  const [categoryDrinksIdRecords, setCategoryDrinksIdRecords] = React.useState(
    []
  );
  const [selectedCategoryDrinksIdRecords, setSelectedCategoryDrinksIdRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = drinkRecord
      ? {
          ...initialValues,
          ...drinkRecord,
          sizes: linkedSizes,
          flavorShots: linkedFlavorShots,
          milks: linkedMilks,
          categoryDrinksId,
        }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setPrice(cleanValues.price);
    setSizes(cleanValues.sizes ?? []);
    setCurrentSizesValue(undefined);
    setCurrentSizesDisplayValue("");
    setFlavorShots(cleanValues.flavorShots ?? []);
    setCurrentFlavorShotsValue(undefined);
    setCurrentFlavorShotsDisplayValue("");
    setMilks(cleanValues.milks ?? []);
    setCurrentMilksValue(undefined);
    setCurrentMilksDisplayValue("");
    setCategoryDrinksId(cleanValues.categoryDrinksId);
    setCurrentCategoryDrinksIdValue(undefined);
    setCurrentCategoryDrinksIdDisplayValue("");
    setErrors({});
  };
  const [drinkRecord, setDrinkRecord] = React.useState(drinkModelProp);
  const [linkedSizes, setLinkedSizes] = React.useState([]);
  const canUnlinkSizes = true;
  const [linkedFlavorShots, setLinkedFlavorShots] = React.useState([]);
  const canUnlinkFlavorShots = true;
  const [linkedMilks, setLinkedMilks] = React.useState([]);
  const canUnlinkMilks = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDrink.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDrink
        : drinkModelProp;
      const linkedSizes = record?.sizes?.items ?? [];
      setLinkedSizes(linkedSizes);
      const linkedFlavorShots = record?.flavorShots?.items ?? [];
      setLinkedFlavorShots(linkedFlavorShots);
      const linkedMilks = record?.milks?.items ?? [];
      setLinkedMilks(linkedMilks);
      const categoryDrinksIdRecord = record
        ? record.categoryDrinksId
        : undefined;
      const categoryRecord = categoryDrinksIdRecord
        ? (
            await client.graphql({
              query: getCategory.replaceAll("__typename", ""),
              variables: { id: categoryDrinksIdRecord },
            })
          )?.data?.getCategory
        : undefined;
      setCategoryDrinksId(categoryDrinksIdRecord);
      setSelectedCategoryDrinksIdRecords([categoryRecord]);
      setDrinkRecord(record);
    };
    queryData();
  }, [idProp, drinkModelProp]);
  React.useEffect(resetStateValues, [
    drinkRecord,
    linkedSizes,
    linkedFlavorShots,
    linkedMilks,
    categoryDrinksId,
  ]);
  const [currentSizesDisplayValue, setCurrentSizesDisplayValue] =
    React.useState("");
  const [currentSizesValue, setCurrentSizesValue] = React.useState(undefined);
  const sizesRef = React.createRef();
  const [currentFlavorShotsDisplayValue, setCurrentFlavorShotsDisplayValue] =
    React.useState("");
  const [currentFlavorShotsValue, setCurrentFlavorShotsValue] =
    React.useState(undefined);
  const flavorShotsRef = React.createRef();
  const [currentMilksDisplayValue, setCurrentMilksDisplayValue] =
    React.useState("");
  const [currentMilksValue, setCurrentMilksValue] = React.useState(undefined);
  const milksRef = React.createRef();
  const [
    currentCategoryDrinksIdDisplayValue,
    setCurrentCategoryDrinksIdDisplayValue,
  ] = React.useState("");
  const [currentCategoryDrinksIdValue, setCurrentCategoryDrinksIdValue] =
    React.useState(undefined);
  const categoryDrinksIdRef = React.createRef();
  const getIDValue = {
    sizes: (r) => JSON.stringify({ id: r?.id }),
    flavorShots: (r) => JSON.stringify({ id: r?.id }),
    milks: (r) => JSON.stringify({ id: r?.id }),
  };
  const sizesIdSet = new Set(
    Array.isArray(sizes)
      ? sizes.map((r) => getIDValue.sizes?.(r))
      : getIDValue.sizes?.(sizes)
  );
  const flavorShotsIdSet = new Set(
    Array.isArray(flavorShots)
      ? flavorShots.map((r) => getIDValue.flavorShots?.(r))
      : getIDValue.flavorShots?.(flavorShots)
  );
  const milksIdSet = new Set(
    Array.isArray(milks)
      ? milks.map((r) => getIDValue.milks?.(r))
      : getIDValue.milks?.(milks)
  );
  const getDisplayValue = {
    sizes: (r) => `${r?.value ? r?.value + " - " : ""}${r?.id}`,
    flavorShots: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    milks: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    categoryDrinksId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
    price: [{ type: "Required" }],
    sizes: [],
    flavorShots: [],
    milks: [],
    categoryDrinksId: [],
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
  const fetchSizesRecords = async (value) => {
    setSizesLoading(true);
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
        (item) => !sizesIdSet.has(getIDValue.sizes?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSizesRecords(newOptions.slice(0, autocompleteLength));
    setSizesLoading(false);
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
  const fetchMilksRecords = async (value) => {
    setMilksLoading(true);
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
        (item) => !milksIdSet.has(getIDValue.milks?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMilksRecords(newOptions.slice(0, autocompleteLength));
    setMilksLoading(false);
  };
  const fetchCategoryDrinksIdRecords = async (value) => {
    setCategoryDrinksIdLoading(true);
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
          query: listCategories.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCategories?.items;
      var loaded = result.filter((item) => categoryDrinksId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCategoryDrinksIdRecords(newOptions.slice(0, autocompleteLength));
    setCategoryDrinksIdLoading(false);
  };
  React.useEffect(() => {
    fetchSizesRecords("");
    fetchFlavorShotsRecords("");
    fetchMilksRecords("");
    fetchCategoryDrinksIdRecords("");
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
          description,
          price,
          sizes: sizes ?? null,
          flavorShots: flavorShots ?? null,
          milks: milks ?? null,
          categoryDrinksId: categoryDrinksId ?? null,
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
          const sizesToLink = [];
          const sizesToUnLink = [];
          const sizesSet = new Set();
          const linkedSizesSet = new Set();
          sizes.forEach((r) => sizesSet.add(getIDValue.sizes?.(r)));
          linkedSizes.forEach((r) => linkedSizesSet.add(getIDValue.sizes?.(r)));
          linkedSizes.forEach((r) => {
            if (!sizesSet.has(getIDValue.sizes?.(r))) {
              sizesToUnLink.push(r);
            }
          });
          sizes.forEach((r) => {
            if (!linkedSizesSet.has(getIDValue.sizes?.(r))) {
              sizesToLink.push(r);
            }
          });
          sizesToUnLink.forEach((original) => {
            if (!canUnlinkSizes) {
              throw Error(
                `Size ${original.id} cannot be unlinked from Drink because drinkSizesId is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateSize.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    drinkSizesId: null,
                  },
                },
              })
            );
          });
          sizesToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateSize.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    drinkSizesId: drinkRecord.id,
                  },
                },
              })
            );
          });
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
                `FlavorShot ${original.id} cannot be unlinked from Drink because drinkFlavorShotsId is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateFlavorShot.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    drinkFlavorShotsId: null,
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
                    drinkFlavorShotsId: drinkRecord.id,
                  },
                },
              })
            );
          });
          const milksToLink = [];
          const milksToUnLink = [];
          const milksSet = new Set();
          const linkedMilksSet = new Set();
          milks.forEach((r) => milksSet.add(getIDValue.milks?.(r)));
          linkedMilks.forEach((r) => linkedMilksSet.add(getIDValue.milks?.(r)));
          linkedMilks.forEach((r) => {
            if (!milksSet.has(getIDValue.milks?.(r))) {
              milksToUnLink.push(r);
            }
          });
          milks.forEach((r) => {
            if (!linkedMilksSet.has(getIDValue.milks?.(r))) {
              milksToLink.push(r);
            }
          });
          milksToUnLink.forEach((original) => {
            if (!canUnlinkMilks) {
              throw Error(
                `Milk ${original.id} cannot be unlinked from Drink because drinkMilksId is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateMilk.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    drinkMilksId: null,
                  },
                },
              })
            );
          });
          milksToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateMilk.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    drinkMilksId: drinkRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            description: modelFields.description,
            price: modelFields.price,
            categoryDrinksId: modelFields.categoryDrinksId ?? null,
          };
          promises.push(
            client.graphql({
              query: updateDrink.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: drinkRecord.id,
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
      {...getOverrideProps(overrides, "UpdateDrink")}
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
              description,
              price,
              sizes,
              flavorShots,
              milks,
              categoryDrinksId,
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
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              price,
              sizes,
              flavorShots,
              milks,
              categoryDrinksId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
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
              name,
              description,
              price: value,
              sizes,
              flavorShots,
              milks,
              categoryDrinksId,
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
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              sizes: values,
              flavorShots,
              milks,
              categoryDrinksId,
            };
            const result = onChange(modelFields);
            values = result?.sizes ?? values;
          }
          setSizes(values);
          setCurrentSizesValue(undefined);
          setCurrentSizesDisplayValue("");
        }}
        currentFieldValue={currentSizesValue}
        label={"Sizes"}
        items={sizes}
        hasError={errors?.sizes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("sizes", currentSizesValue)
        }
        errorMessage={errors?.sizes?.errorMessage}
        getBadgeText={getDisplayValue.sizes}
        setFieldValue={(model) => {
          setCurrentSizesDisplayValue(
            model ? getDisplayValue.sizes(model) : ""
          );
          setCurrentSizesValue(model);
        }}
        inputFieldRef={sizesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Sizes"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Size"
          value={currentSizesDisplayValue}
          options={sizesRecords
            .filter((r) => !sizesIdSet.has(getIDValue.sizes?.(r)))
            .map((r) => ({
              id: getIDValue.sizes?.(r),
              label: getDisplayValue.sizes?.(r),
            }))}
          isLoading={sizesLoading}
          onSelect={({ id, label }) => {
            setCurrentSizesValue(
              sizesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSizesDisplayValue(label);
            runValidationTasks("sizes", label);
          }}
          onClear={() => {
            setCurrentSizesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchSizesRecords(value);
            if (errors.sizes?.hasError) {
              runValidationTasks("sizes", value);
            }
            setCurrentSizesDisplayValue(value);
            setCurrentSizesValue(undefined);
          }}
          onBlur={() => runValidationTasks("sizes", currentSizesDisplayValue)}
          errorMessage={errors.sizes?.errorMessage}
          hasError={errors.sizes?.hasError}
          ref={sizesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "sizes")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              sizes,
              flavorShots: values,
              milks,
              categoryDrinksId,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              sizes,
              flavorShots,
              milks: values,
              categoryDrinksId,
            };
            const result = onChange(modelFields);
            values = result?.milks ?? values;
          }
          setMilks(values);
          setCurrentMilksValue(undefined);
          setCurrentMilksDisplayValue("");
        }}
        currentFieldValue={currentMilksValue}
        label={"Milks"}
        items={milks}
        hasError={errors?.milks?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("milks", currentMilksValue)
        }
        errorMessage={errors?.milks?.errorMessage}
        getBadgeText={getDisplayValue.milks}
        setFieldValue={(model) => {
          setCurrentMilksDisplayValue(
            model ? getDisplayValue.milks(model) : ""
          );
          setCurrentMilksValue(model);
        }}
        inputFieldRef={milksRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Milks"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Milk"
          value={currentMilksDisplayValue}
          options={milksRecords
            .filter((r) => !milksIdSet.has(getIDValue.milks?.(r)))
            .map((r) => ({
              id: getIDValue.milks?.(r),
              label: getDisplayValue.milks?.(r),
            }))}
          isLoading={milksLoading}
          onSelect={({ id, label }) => {
            setCurrentMilksValue(
              milksRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMilksDisplayValue(label);
            runValidationTasks("milks", label);
          }}
          onClear={() => {
            setCurrentMilksDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchMilksRecords(value);
            if (errors.milks?.hasError) {
              runValidationTasks("milks", value);
            }
            setCurrentMilksDisplayValue(value);
            setCurrentMilksValue(undefined);
          }}
          onBlur={() => runValidationTasks("milks", currentMilksDisplayValue)}
          errorMessage={errors.milks?.errorMessage}
          hasError={errors.milks?.hasError}
          ref={milksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "milks")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              sizes,
              flavorShots,
              milks,
              categoryDrinksId: value,
            };
            const result = onChange(modelFields);
            value = result?.categoryDrinksId ?? value;
          }
          setCategoryDrinksId(value);
          setCurrentCategoryDrinksIdValue(undefined);
        }}
        currentFieldValue={currentCategoryDrinksIdValue}
        label={"Category drinks id"}
        items={categoryDrinksId ? [categoryDrinksId] : []}
        hasError={errors?.categoryDrinksId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "categoryDrinksId",
            currentCategoryDrinksIdValue
          )
        }
        errorMessage={errors?.categoryDrinksId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.categoryDrinksId(
                categoryDrinksIdRecords.find((r) => r.id === value) ??
                  selectedCategoryDrinksIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentCategoryDrinksIdDisplayValue(
            value
              ? getDisplayValue.categoryDrinksId(
                  categoryDrinksIdRecords.find((r) => r.id === value) ??
                    selectedCategoryDrinksIdRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentCategoryDrinksIdValue(value);
          const selectedRecord = categoryDrinksIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedCategoryDrinksIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={categoryDrinksIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Category drinks id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Category"
          value={currentCategoryDrinksIdDisplayValue}
          options={categoryDrinksIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.categoryDrinksId?.(r),
            }))}
          isLoading={categoryDrinksIdLoading}
          onSelect={({ id, label }) => {
            setCurrentCategoryDrinksIdValue(id);
            setCurrentCategoryDrinksIdDisplayValue(label);
            runValidationTasks("categoryDrinksId", label);
          }}
          onClear={() => {
            setCurrentCategoryDrinksIdDisplayValue("");
          }}
          defaultValue={categoryDrinksId}
          onChange={(e) => {
            let { value } = e.target;
            fetchCategoryDrinksIdRecords(value);
            if (errors.categoryDrinksId?.hasError) {
              runValidationTasks("categoryDrinksId", value);
            }
            setCurrentCategoryDrinksIdDisplayValue(value);
            setCurrentCategoryDrinksIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("categoryDrinksId", currentCategoryDrinksIdValue)
          }
          errorMessage={errors.categoryDrinksId?.errorMessage}
          hasError={errors.categoryDrinksId?.hasError}
          ref={categoryDrinksIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "categoryDrinksId")}
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
          isDisabled={!(idProp || drinkModelProp)}
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
              !(idProp || drinkModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
