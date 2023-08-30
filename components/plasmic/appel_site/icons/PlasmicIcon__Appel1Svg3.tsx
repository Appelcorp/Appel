// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Appel1Svg3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Appel1Svg3Icon(props: Appel1Svg3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 200"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"2"}
        y={"30"}
        width={"102"}
        height={"168"}
        rx={"18"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></rect>

      <rect
        x={"55"}
        y={"2"}
        width={"137"}
        height={"196"}
        rx={"18"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></rect>
    </svg>
  );
}

export default Appel1Svg3Icon;
/* prettier-ignore-end */
