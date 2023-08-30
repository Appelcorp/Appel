// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EtopLitesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EtopLitesvgIcon(props: EtopLitesvgIconProps) {
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

      <mask id={"P2FwRSuTma"} fill={"#fff"}>
        <path d={"M12 5a5 5 0 015-5h160a5 5 0 015 5v95H12V5z"}></path>
      </mask>

      <path
        d={"M12 5a5 5 0 015-5h160a5 5 0 015 5v95H12V5z"}
        fill={"#fff"}
        stroke={"#000"}
        strokeWidth={"16"}
        mask={"url(#P2FwRSuTma)"}
      ></path>

      <path
        d={"M82 8h30v2a4 4 0 01-4 4H86a4 4 0 01-4-4V8z"}
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default EtopLitesvgIcon;
/* prettier-ignore-end */
