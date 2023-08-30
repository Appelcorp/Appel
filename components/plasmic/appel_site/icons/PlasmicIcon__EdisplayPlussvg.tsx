// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EdisplayPlussvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EdisplayPlussvgIcon(props: EdisplayPlussvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 170 128"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5 1.5h160a3.5 3.5 0 013.5 3.5v90a3.5 3.5 0 01-3.5 3.5H5A3.5 3.5 0 011.5 95V5A3.5 3.5 0 015 1.5z"
        }
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <path
        fill={"#000"}
        d={
          "M70 100h30v20H70zm-5 21a1 1 0 011-1h38a1 1 0 011 1v5a2 2 0 01-2 2H67a2 2 0 01-2-2v-5z"
        }
      ></path>
    </svg>
  );
}

export default EdisplayPlussvgIcon;
/* prettier-ignore-end */
