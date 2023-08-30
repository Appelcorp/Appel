// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group22SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group22SvgIcon(props: Group22SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 141 200"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"141"} height={"200"} rx={"20"} fill={"#000"}></rect>

      <rect
        x={"2"}
        y={"2"}
        width={"64"}
        height={"33"}
        rx={"16"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></rect>
    </svg>
  );
}

export default Group22SvgIcon;
/* prettier-ignore-end */
