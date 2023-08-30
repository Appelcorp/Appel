// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CardsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CardsvgIcon(props: CardsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 70"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"100"} height={"70"} rx={"10"} fill={"#000"}></rect>

      <path
        d={
          "M50.145 43.364c-1.63 0-3.038-.38-4.228-1.137-1.189-.765-2.11-1.822-2.761-3.17-.644-1.356-.966-2.917-.966-4.682 0-1.758.322-3.318.966-4.682.652-1.371 1.55-2.443 2.693-3.216 1.152-.78 2.481-1.17 3.989-1.17.947 0 1.86.174 2.739.523a6.652 6.652 0 012.363 1.58c.705.704 1.262 1.594 1.67 2.67.41 1.068.614 2.333.614 3.795v1H43.588v-1.784h11.568c0-1.121-.227-2.129-.682-3.023-.447-.901-1.072-1.614-1.875-2.136-.795-.523-1.716-.784-2.761-.784-1.106 0-2.08.295-2.92.886-.841.591-1.5 1.371-1.978 2.341-.47.97-.708 2.03-.716 3.182v1.068c0 1.386.239 2.599.716 3.636.485 1.03 1.17 1.83 2.057 2.398.886.568 1.936.852 3.148.852.825 0 1.549-.128 2.17-.386a4.654 4.654 0 001.58-1.034c.431-.44.757-.92.977-1.443l1.92.625c-.265.735-.7 1.413-1.306 2.034-.599.621-1.349 1.121-2.25 1.5-.894.371-1.925.557-3.091.557z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default CardsvgIcon;
/* prettier-ignore-end */
