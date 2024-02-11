// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EtopLite4SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EtopLite4SvgIcon(props: EtopLite4SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 108"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 101a1 1 0 011-1h192a1 1 0 011 1v4a3 3 0 01-3 3H3a3 3 0 01-3-3v-4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M17 2h160a3 3 0 013 3v93H14V5a3 3 0 013-3z"}
        stroke={"currentColor"}
        strokeWidth={"4"}
      ></path>

      <rect
        x={"85"}
        y={"5"}
        width={"24"}
        height={"6"}
        rx={"3"}
        fill={"currentColor"}
      ></rect>
    </svg>
  );
}

export default EtopLite4SvgIcon;
/* prettier-ignore-end */
