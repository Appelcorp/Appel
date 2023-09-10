// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eiC1VCbma8t6iMexZerqLa

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-swell"; // plasmic-import: tbDZqxoBkbo/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  commerceProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof CommerceProviderComponent>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, commerceProviderComponentProps } = props;

  return (
    <CommerceProviderComponent
      {...commerceProviderComponentProps}
      publicKey={
        commerceProviderComponentProps &&
        "publicKey" in commerceProviderComponentProps
          ? commerceProviderComponentProps.publicKey!
          : "pk_QaZeGhtpQaVbNQnWJdRlE1abE6Ezf9U9"
      }
      storeId={
        commerceProviderComponentProps &&
        "storeId" in commerceProviderComponentProps
          ? commerceProviderComponentProps.storeId!
          : "plasmic-sandbox"
      }
    >
      {children}
    </CommerceProviderComponent>
  );
}
