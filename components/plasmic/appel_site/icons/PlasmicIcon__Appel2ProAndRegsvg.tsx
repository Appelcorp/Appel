// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Appel2ProAndRegsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Appel2ProAndRegsvgIcon(props: Appel2ProAndRegsvgIconProps) {
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
        x={"54.5"}
        y={"1.5"}
        width={"97"}
        height={"197"}
        rx={"18.5"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></rect>

      <circle cx={"103"} cy={"9"} r={"3"} fill={"#000"}></circle>

      <rect
        x={"1.5"}
        y={"29.5"}
        width={"83"}
        height={"169"}
        rx={"18.5"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></rect>

      <circle cx={"43"} cy={"37"} r={"3"} fill={"#000"}></circle>
    </svg>
  );
}

export default Appel2ProAndRegsvgIcon;
/* prettier-ignore-end */
