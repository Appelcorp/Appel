// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EtopLite2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EtopLite2SvgIcon(props: EtopLite2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 108"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 101a1 1 0 011-1h192a1 1 0 011 1v4a3 3 0 01-3 3H3a3 3 0 01-3-3v-4z"
        }
        fill={"#000"}
      ></path>

      <path
        d={"M17 2h160a3 3 0 013 3v93H14V5a3 3 0 013-3z"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></path>

      <path
        d={"M82 4h30v2a4 4 0 01-4 4H86a4 4 0 01-4-4V4z"}
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default EtopLite2SvgIcon;
/* prettier-ignore-end */
