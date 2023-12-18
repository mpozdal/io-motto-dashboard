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
export declare type MilkCreateFormInputValues = {
    name?: string;
    drinkMilksId?: string;
};
export declare type MilkCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    drinkMilksId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MilkCreateFormOverridesProps = {
    MilkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    drinkMilksId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MilkCreateFormProps = React.PropsWithChildren<{
    overrides?: MilkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MilkCreateFormInputValues) => MilkCreateFormInputValues;
    onSuccess?: (fields: MilkCreateFormInputValues) => void;
    onError?: (fields: MilkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MilkCreateFormInputValues) => MilkCreateFormInputValues;
    onValidate?: MilkCreateFormValidationValues;
} & React.CSSProperties>;
export default function MilkCreateForm(props: MilkCreateFormProps): React.ReactElement;
