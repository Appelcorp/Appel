// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Etopsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Etopsvg2Icon(props: Etopsvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 110"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 101a1 1 0 011-1h192a1 1 0 011 1v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M17 1.5h160a3.5 3.5 0 013.5 3.5v93.5h-167V5A3.5 3.5 0 0117 1.5z"}
        stroke={"currentColor"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Etopsvg2Icon;
/* prettier-ignore-end */
