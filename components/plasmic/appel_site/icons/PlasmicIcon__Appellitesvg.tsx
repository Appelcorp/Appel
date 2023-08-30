// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppellitesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppellitesvgIcon(props: AppellitesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 131 172"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"1.5"}
        y={"25.474"}
        width={"70.634"}
        height={"144.268"}
        rx={"8.5"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></rect>

      <path
        d={"M3 28.742a3.5 3.5 0 013.5-3.5h43a3.5 3.5 0 013.5 3.5v3.5H3v-3.5z"}
        fill={"#000"}
      ></path>

      <rect
        x={"46.879"}
        y={"1.5"}
        width={"82.621"}
        height={"168.242"}
        rx={"8.5"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"3"}
      ></rect>

      <path
        d={"M48 5.742a3.5 3.5 0 013.5-3.5h74a3.5 3.5 0 013.5 3.5v3.5H48v-3.5z"}
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default AppellitesvgIcon;
/* prettier-ignore-end */
