// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Appellitesvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Appellitesvg2Icon(props: Appellitesvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 131 172"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"2"}
        y={"25.974"}
        width={"69.634"}
        height={"143.268"}
        rx={"8"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></rect>

      <path
        d={"M3 28.742a3.5 3.5 0 013.5-3.5h43a3.5 3.5 0 013.5 3.5v3.5H3v-3.5z"}
        fill={"#000"}
      ></path>

      <rect
        x={"47.379"}
        y={"2"}
        width={"81.621"}
        height={"167.242"}
        rx={"8"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></rect>

      <path
        d={"M48 5.742a3.5 3.5 0 013.5-3.5h74a3.5 3.5 0 013.5 3.5v3.5H48v-3.5z"}
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default Appellitesvg2Icon;
/* prettier-ignore-end */
