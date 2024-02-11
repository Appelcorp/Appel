// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Comparesvg3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Comparesvg3Icon(props: Comparesvg3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 182 172"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"2"}
        y={"2"}
        width={"82"}
        height={"168"}
        rx={"18"}
        stroke={"currentColor"}
        strokeWidth={"4"}
      ></rect>

      <rect
        x={"98"}
        y={"2"}
        width={"82"}
        height={"168"}
        rx={"18"}
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
        strokeDasharray={"16 16"}
      ></rect>
    </svg>
  );
}

export default Comparesvg3Icon;
/* prettier-ignore-end */
