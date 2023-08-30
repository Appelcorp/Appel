// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmaxStudiosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmaxStudiosvgIcon(props: EmaxStudiosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 150 150"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={"27.239"}
        y={"88.44"}
        width={"20"}
        height={"50"}
        rx={"10"}
        transform={"rotate(-15 27.24 88.44)"}
        fill={"currentColor"}
      ></rect>

      <rect
        x={"102.44"}
        y={"83.264"}
        width={"20"}
        height={"50"}
        rx={"10"}
        transform={"rotate(15 102.44 83.264)"}
        fill={"currentColor"}
      ></rect>

      <path
        d={
          "M102.317 122.386A54.829 54.829 0 00108.28 31.4a54.83 54.83 0 10-60.795 90.986l2.742-4.748A49.35 49.35 0 0144.86 35.75a49.349 49.349 0 1154.715 81.888l2.742 4.748z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EmaxStudiosvgIcon;
/* prettier-ignore-end */
