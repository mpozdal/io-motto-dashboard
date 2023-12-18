/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createStore } from "../graphql/mutations";
const client = generateClient();
export default function NewForm1(props) {
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
    address: "",
    latitude: "",
    longtitude: "",
    openingHour: "",
    closingHour: "",
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [longtitude, setLongtitude] = React.useState(initialValues.longtitude);
  const [openingHour, setOpeningHour] = React.useState(
    initialValues.openingHour
  );
  const [closingHour, setClosingHour] = React.useState(
    initialValues.closingHour
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAddress(initialValues.address);
    setLatitude(initialValues.latitude);
    setLongtitude(initialValues.longtitude);
    setOpeningHour(initialValues.openingHour);
    setClosingHour(initialValues.closingHour);
    setErrors({});
  };
  const validations = {
    address: [{ type: "Required" }],
    latitude: [{ type: "Required" }],
    longtitude: [{ type: "Required" }],
    openingHour: [{ type: "Required" }],
    closingHour: [{ type: "Required" }],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          address,
          latitude,
          longtitude,
          openingHour,
          closingHour,
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
            query: createStore.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "NewForm1")}
      {...rest}
    >
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              latitude,
              longtitude,
              openingHour,
              closingHour,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={true}
        isReadOnly={false}
        value={latitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              latitude: value,
              longtitude,
              openingHour,
              closingHour,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Longtitude"
        isRequired={true}
        isReadOnly={false}
        value={longtitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              latitude,
              longtitude: value,
              openingHour,
              closingHour,
            };
            const result = onChange(modelFields);
            value = result?.longtitude ?? value;
          }
          if (errors.longtitude?.hasError) {
            runValidationTasks("longtitude", value);
          }
          setLongtitude(value);
        }}
        onBlur={() => runValidationTasks("longtitude", longtitude)}
        errorMessage={errors.longtitude?.errorMessage}
        hasError={errors.longtitude?.hasError}
        {...getOverrideProps(overrides, "longtitude")}
      ></TextField>
      <TextField
        label="Opening hour"
        isRequired={true}
        isReadOnly={false}
        value={openingHour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              latitude,
              longtitude,
              openingHour: value,
              closingHour,
            };
            const result = onChange(modelFields);
            value = result?.openingHour ?? value;
          }
          if (errors.openingHour?.hasError) {
            runValidationTasks("openingHour", value);
          }
          setOpeningHour(value);
        }}
        onBlur={() => runValidationTasks("openingHour", openingHour)}
        errorMessage={errors.openingHour?.errorMessage}
        hasError={errors.openingHour?.hasError}
        {...getOverrideProps(overrides, "openingHour")}
      ></TextField>
      <TextField
        label="Closing hour"
        isRequired={true}
        isReadOnly={false}
        value={closingHour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              latitude,
              longtitude,
              openingHour,
              closingHour: value,
            };
            const result = onChange(modelFields);
            value = result?.closingHour ?? value;
          }
          if (errors.closingHour?.hasError) {
            runValidationTasks("closingHour", value);
          }
          setClosingHour(value);
        }}
        onBlur={() => runValidationTasks("closingHour", closingHour)}
        errorMessage={errors.closingHour?.errorMessage}
        hasError={errors.closingHour?.hasError}
        {...getOverrideProps(overrides, "closingHour")}
      ></TextField>
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
