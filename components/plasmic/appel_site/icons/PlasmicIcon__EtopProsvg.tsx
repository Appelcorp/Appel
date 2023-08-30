// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EtopProsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EtopProsvgIcon(props: EtopProsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 110"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 101a1 1 0 011-1h192a1 1 0 011 1v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6z"
        }
        fill={"#000"}
      ></path>

      <path
        d={"M17 2h160a3 3 0 013 3v93H14V5a3 3 0 013-3z"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></path>
    </svg>
  );
}

export default EtopProsvgIcon;
/* prettier-ignore-end */
