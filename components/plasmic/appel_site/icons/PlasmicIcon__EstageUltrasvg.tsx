// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EstageUltrasvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EstageUltrasvgIcon(props: EstageUltrasvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 170 128"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 5a5 5 0 015-5h160a5 5 0 015 5v103a5 5 0 01-5 5H5a5 5 0 01-5-5V5z"
        }
        fill={"#000"}
      ></path>

      <path
        d={
          "M5 1.5h160a3.5 3.5 0 013.5 3.5v92a3.5 3.5 0 01-3.5 3.5H5A3.5 3.5 0 011.5 97V5A3.5 3.5 0 015 1.5z"
        }
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <path
        fill={"#000"}
        d={
          "M70 100h30v24H70zm-5 26.667A2.667 2.667 0 0167.667 124h34.666a2.667 2.667 0 012.667 2.667c0 .736-.597 1.333-1.333 1.333H66.333A1.333 1.333 0 0165 126.667z"
        }
      ></path>

      <rect
        x={"75"}
        y={"5"}
        width={"20"}
        height={"4"}
        rx={"2"}
        fill={"#000"}
      ></rect>
    </svg>
  );
}

export default EstageUltrasvgIcon;
/* prettier-ignore-end */
