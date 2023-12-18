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
export declare type DrinkUpdateFormInputValues = {
    name?: string;
    description?: string;
    price?: number;
    sizes?: any[];
    flavorShots?: any[];
    milks?: any[];
    categoryDrinksId?: string;
};
export declare type DrinkUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    sizes?: ValidationFunction<any>;
    flavorShots?: ValidationFunction<any>;
    milks?: ValidationFunction<any>;
    categoryDrinksId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DrinkUpdateFormOverridesProps = {
    DrinkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    sizes?: PrimitiveOverrideProps<AutocompleteProps>;
    flavorShots?: PrimitiveOverrideProps<AutocompleteProps>;
    milks?: PrimitiveOverrideProps<AutocompleteProps>;
    categoryDrinksId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type DrinkUpdateFormProps = React.PropsWithChildren<{
    overrides?: DrinkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    drink?: any;
    onSubmit?: (fields: DrinkUpdateFormInputValues) => DrinkUpdateFormInputValues;
    onSuccess?: (fields: DrinkUpdateFormInputValues) => void;
    onError?: (fields: DrinkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DrinkUpdateFormInputValues) => DrinkUpdateFormInputValues;
    onValidate?: DrinkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DrinkUpdateForm(props: DrinkUpdateFormProps): React.ReactElement;
