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
export declare type MilkUpdateFormInputValues = {
    name?: string;
    drinkMilksId?: string;
};
export declare type MilkUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    drinkMilksId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MilkUpdateFormOverridesProps = {
    MilkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    drinkMilksId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MilkUpdateFormProps = React.PropsWithChildren<{
    overrides?: MilkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    milk?: any;
    onSubmit?: (fields: MilkUpdateFormInputValues) => MilkUpdateFormInputValues;
    onSuccess?: (fields: MilkUpdateFormInputValues) => void;
    onError?: (fields: MilkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MilkUpdateFormInputValues) => MilkUpdateFormInputValues;
    onValidate?: MilkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MilkUpdateForm(props: MilkUpdateFormProps): React.ReactElement;
