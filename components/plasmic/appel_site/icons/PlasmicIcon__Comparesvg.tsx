// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ComparesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ComparesvgIcon(props: ComparesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 182 172"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"1.5"}
        y={"1.5"}
        width={"83"}
        height={"169"}
        rx={"18.5"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></rect>

      <rect
        x={"97.5"}
        y={"1.5"}
        width={"83"}
        height={"169"}
        rx={"18.5"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
        strokeDasharray={"10 10"}
      ></rect>
    </svg>
  );
}

export default ComparesvgIcon;
/* prettier-ignore-end */
