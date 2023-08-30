// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Appel12SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Appel12SvgIcon(props: Appel12SvgIconProps) {
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
        x={"6"}
        y={"34"}
        width={"94"}
        height={"160"}
        rx={"14"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"12"}
      ></rect>

      <rect
        x={"59"}
        y={"6"}
        width={"129"}
        height={"188"}
        rx={"14"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"12"}
      ></rect>

      <path
        d={
          "M53 171h141v9c0 11.046-8.954 20-20 20H73c-11.046 0-20-8.954-20-20v-9z"
        }
        fill={"#000"}
      ></path>

      <path
        d={
          "M0 171h141v9c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-9z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default Appel12SvgIcon;
/* prettier-ignore-end */
