// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Appel2ProAndRegsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Appel2ProAndRegsvg2Icon(props: Appel2ProAndRegsvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 153 200"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"55"}
        y={"2"}
        width={"96"}
        height={"196"}
        rx={"18"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></rect>

      <circle cx={"103"} cy={"9"} r={"3"} fill={"#000"}></circle>

      <rect
        x={"2"}
        y={"30"}
        width={"82"}
        height={"168"}
        rx={"18"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></rect>

      <circle cx={"43"} cy={"37"} r={"3"} fill={"#000"}></circle>
    </svg>
  );
}

export default Appel2ProAndRegsvg2Icon;
/* prettier-ignore-end */
