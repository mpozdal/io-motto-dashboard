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
export declare type UpdateUserInputValues = {
    name?: string;
    email?: string;
    defaultStore?: any;
    role?: any;
};
export declare type UpdateUserValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    defaultStore?: ValidationFunction<any>;
    role?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateUserOverridesProps = {
    UpdateUserGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    defaultStore?: PrimitiveOverrideProps<AutocompleteProps>;
    role?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UpdateUserProps = React.PropsWithChildren<{
    overrides?: UpdateUserOverridesProps | undefined | null;
} & {
    id?: string;
    user?: any;
    onSubmit?: (fields: UpdateUserInputValues) => UpdateUserInputValues;
    onSuccess?: (fields: UpdateUserInputValues) => void;
    onError?: (fields: UpdateUserInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdateUserInputValues) => UpdateUserInputValues;
    onValidate?: UpdateUserValidationValues;
} & React.CSSProperties>;
export default function UpdateUser(props: UpdateUserProps): React.ReactElement;
