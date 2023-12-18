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
export declare type SizeUpdateFormInputValues = {
    value?: string;
    extraCost?: number;
    drinkSizesId?: string;
};
export declare type SizeUpdateFormValidationValues = {
    value?: ValidationFunction<string>;
    extraCost?: ValidationFunction<number>;
    drinkSizesId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SizeUpdateFormOverridesProps = {
    SizeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    extraCost?: PrimitiveOverrideProps<TextFieldProps>;
    drinkSizesId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SizeUpdateFormProps = React.PropsWithChildren<{
    overrides?: SizeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    size?: any;
    onSubmit?: (fields: SizeUpdateFormInputValues) => SizeUpdateFormInputValues;
    onSuccess?: (fields: SizeUpdateFormInputValues) => void;
    onError?: (fields: SizeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SizeUpdateFormInputValues) => SizeUpdateFormInputValues;
    onValidate?: SizeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SizeUpdateForm(props: SizeUpdateFormProps): React.ReactElement;
