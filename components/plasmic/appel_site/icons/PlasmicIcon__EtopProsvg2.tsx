// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EtopProsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EtopProsvg2Icon(props: EtopProsvg2IconProps) {
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
        d={"M17 1h160a4 4 0 014 4v94H13V5a4 4 0 014-4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default EtopProsvg2Icon;
/* prettier-ignore-end */
