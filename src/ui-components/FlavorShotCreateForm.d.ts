/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FlavorShotCreateFormInputValues = {
    name?: string;
    extraCost?: number;
    orderItemFlavorShotsId?: string;
    drinkFlavorShotsId?: string;
};
export declare type FlavorShotCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    extraCost?: ValidationFunction<number>;
    orderItemFlavorShotsId?: ValidationFunction<string>;
    drinkFlavorShotsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlavorShotCreateFormOverridesProps = {
    FlavorShotCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    extraCost?: PrimitiveOverrideProps<TextFieldProps>;
    orderItemFlavorShotsId?: PrimitiveOverrideProps<AutocompleteProps>;
    drinkFlavorShotsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FlavorShotCreateFormProps = React.PropsWithChildren<{
    overrides?: FlavorShotCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FlavorShotCreateFormInputValues) => FlavorShotCreateFormInputValues;
    onSuccess?: (fields: FlavorShotCreateFormInputValues) => void;
    onError?: (fields: FlavorShotCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FlavorShotCreateFormInputValues) => FlavorShotCreateFormInputValues;
    onValidate?: FlavorShotCreateFormValidationValues;
} & React.CSSProperties>;
export default function FlavorShotCreateForm(props: FlavorShotCreateFormProps): React.ReactElement;
