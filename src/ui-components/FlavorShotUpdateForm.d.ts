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
export declare type FlavorShotUpdateFormInputValues = {
    name?: string;
    extraCost?: number;
    orderItemFlavorShotsId?: string;
    drinkFlavorShotsId?: string;
};
export declare type FlavorShotUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    extraCost?: ValidationFunction<number>;
    orderItemFlavorShotsId?: ValidationFunction<string>;
    drinkFlavorShotsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlavorShotUpdateFormOverridesProps = {
    FlavorShotUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    extraCost?: PrimitiveOverrideProps<TextFieldProps>;
    orderItemFlavorShotsId?: PrimitiveOverrideProps<AutocompleteProps>;
    drinkFlavorShotsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FlavorShotUpdateFormProps = React.PropsWithChildren<{
    overrides?: FlavorShotUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    flavorShot?: any;
    onSubmit?: (fields: FlavorShotUpdateFormInputValues) => FlavorShotUpdateFormInputValues;
    onSuccess?: (fields: FlavorShotUpdateFormInputValues) => void;
    onError?: (fields: FlavorShotUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FlavorShotUpdateFormInputValues) => FlavorShotUpdateFormInputValues;
    onValidate?: FlavorShotUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FlavorShotUpdateForm(props: FlavorShotUpdateFormProps): React.ReactElement;
