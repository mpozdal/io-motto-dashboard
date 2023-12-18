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
export declare type SizeCreateFormInputValues = {
    value?: string;
    extraCost?: number;
    drinkSizesId?: string;
};
export declare type SizeCreateFormValidationValues = {
    value?: ValidationFunction<string>;
    extraCost?: ValidationFunction<number>;
    drinkSizesId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SizeCreateFormOverridesProps = {
    SizeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    extraCost?: PrimitiveOverrideProps<TextFieldProps>;
    drinkSizesId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SizeCreateFormProps = React.PropsWithChildren<{
    overrides?: SizeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SizeCreateFormInputValues) => SizeCreateFormInputValues;
    onSuccess?: (fields: SizeCreateFormInputValues) => void;
    onError?: (fields: SizeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SizeCreateFormInputValues) => SizeCreateFormInputValues;
    onValidate?: SizeCreateFormValidationValues;
} & React.CSSProperties>;
export default function SizeCreateForm(props: SizeCreateFormProps): React.ReactElement;
