// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EdisplayMaxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EdisplayMaxsvgIcon(props: EdisplayMaxsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 170 128"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5 1.5h160a3.5 3.5 0 013.5 3.5v108a3.5 3.5 0 01-3.5 3.5H5a3.5 3.5 0 01-3.5-3.5V5A3.5 3.5 0 015 1.5z"
        }
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></path>

      <path
        fill={"#000"}
        d={
          "M70 118h30v6H70zm-10 7a1 1 0 011-1h48a1 1 0 011 1v1a2 2 0 01-2 2H62a2 2 0 01-2-2v-1z"
        }
      ></path>
    </svg>
  );
}

export default EdisplayMaxsvgIcon;
/* prettier-ignore-end */
