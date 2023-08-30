// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group20Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group20Svg2Icon(props: Group20Svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 70"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"70"} height={"70"} rx={"10"} fill={"#000"}></rect>

      <rect
        x={"4.5"}
        y={"4.5"}
        width={"61"}
        height={"61"}
        rx={"5.5"}
        fill={"#000"}
        stroke={"#fff"}
        strokeWidth={"3"}
      ></rect>

      <path
        d={
          "M35.43 45.364c-1.628 0-3.038-.38-4.227-1.137-1.19-.765-2.11-1.822-2.761-3.17-.644-1.356-.966-2.917-.966-4.682 0-1.758.322-3.318.966-4.682.651-1.371 1.549-2.443 2.693-3.216 1.151-.78 2.481-1.17 3.989-1.17.947 0 1.86.174 2.738.523a6.653 6.653 0 012.364 1.58c.704.704 1.261 1.594 1.67 2.67.41 1.068.614 2.333.614 3.795v1H28.874v-1.784h11.568c0-1.121-.227-2.129-.682-3.023-.447-.901-1.072-1.613-1.875-2.136-.795-.523-1.716-.784-2.761-.784-1.107 0-2.08.295-2.92.886-.842.591-1.5 1.371-1.978 2.341-.47.97-.709 2.03-.716 3.182v1.068c0 1.386.239 2.599.716 3.636.485 1.03 1.17 1.83 2.057 2.398.886.568 1.935.852 3.147.852.826 0 1.55-.128 2.17-.386a4.653 4.653 0 001.58-1.034c.432-.44.758-.92.978-1.443l1.92.625c-.265.735-.7 1.413-1.307 2.034-.598.621-1.348 1.121-2.25 1.5-.894.371-1.924.557-3.09.557z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default Group20Svg2Icon;
/* prettier-ignore-end */
