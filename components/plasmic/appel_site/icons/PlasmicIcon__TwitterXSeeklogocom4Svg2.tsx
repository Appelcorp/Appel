// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterXSeeklogocom4Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterXSeeklogocom4Svg2Icon(
  props: TwitterXSeeklogocom4Svg2IconProps
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
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M336.33 142.251l386.39 516.64-388.83 420.05h87.51l340.42-367.76 275.05 367.76h297.8l-408.13-545.7 361.92-390.99h-87.51l-313.51 338.7-253.31-338.7h-297.8zm128.69 64.46h136.81l604.13 807.76h-136.81l-604.13-807.76z"
        }
      ></path>
    </svg>
  );
}

export default TwitterXSeeklogocom4Svg2Icon;
/* prettier-ignore-end */
