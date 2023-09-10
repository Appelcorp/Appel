// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterXSeeklogocom4SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterXSeeklogocom4SvgIcon(
  props: TwitterXSeeklogocom4SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 1668.56 1221.19"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"834.28"}
        cy={"610.6"}
        r={"481.33"}
        stroke={"currentColor"}
        strokeMiterlimit={"10"}
      ></circle>

      <path
        d={
          "M537.78 331.731l230.07 307.62-231.52 250.11h52.11l202.7-218.98 163.77 218.98h177.32l-243.02-324.92 215.5-232.81h-52.11l-186.67 201.67-150.83-201.67H537.78zm76.63 38.38h81.46l359.72 480.97h-81.46l-359.72-480.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterXSeeklogocom4SvgIcon;
/* prettier-ignore-end */
