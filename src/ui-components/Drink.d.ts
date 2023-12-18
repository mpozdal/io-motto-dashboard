/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type DrinkInputValues = {
    name?: string;
    description?: string;
    price?: number;
    Milk?: string;
    sizes?: any[];
    flavorShots?: any[];
    milks?: any[];
    categoryDrinksId?: string;
};
export declare type DrinkValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    Milk?: ValidationFunction<string>;
    sizes?: ValidationFunction<any>;
    flavorShots?: ValidationFunction<any>;
    milks?: ValidationFunction<any>;
    categoryDrinksId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DrinkOverridesProps = {
    DrinkGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    Milk?: PrimitiveOverrideProps<SelectFieldProps>;
    sizes?: PrimitiveOverrideProps<AutocompleteProps>;
    flavorShots?: PrimitiveOverrideProps<AutocompleteProps>;
    milks?: PrimitiveOverrideProps<AutocompleteProps>;
    categoryDrinksId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type DrinkProps = React.PropsWithChildren<{
    overrides?: DrinkOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DrinkInputValues) => DrinkInputValues;
    onSuccess?: (fields: DrinkInputValues) => void;
    onError?: (fields: DrinkInputValues, errorMessage: string) => void;
    onChange?: (fields: DrinkInputValues) => DrinkInputValues;
    onValidate?: DrinkValidationValues;
} & React.CSSProperties>;
export default function Drink(props: DrinkProps): React.ReactElement;
