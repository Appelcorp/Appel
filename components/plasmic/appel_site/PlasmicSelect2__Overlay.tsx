// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: yvnEUWAdn6f

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicSelect2__Overlay.module.css"; // plasmic-import: yvnEUWAdn6f/css

import SUPER__PlasmicSelect2 from "./PlasmicSelect2"; // plasmic-import: dU451UGPmaB/render

createPlasmicElementProxy;

export type PlasmicSelect2__Overlay__VariantMembers = {
  relativePlacement: "top" | "bottom" | "left" | "right";
};
export type PlasmicSelect2__Overlay__VariantsArgs = {
  relativePlacement?: SingleChoiceArg<"top" | "bottom" | "left" | "right">;
};
type VariantPropType = keyof PlasmicSelect2__Overlay__VariantsArgs;
export const PlasmicSelect2__Overlay__VariantProps = new Array<VariantPropType>(
  "relativePlacement"
);

export type PlasmicSelect2__Overlay__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSelect2__Overlay__ArgsType;
export const PlasmicSelect2__Overlay__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicSelect2__Overlay__OverridesType = {
  root?: p.Flex<"div">;
  top?: p.Flex<"div">;
  middle?: p.Flex<"div">;
  left?: p.Flex<"div">;
  main?: p.Flex<"div">;
  right?: p.Flex<"div">;
  bottom?: p.Flex<"div">;
};

export interface DefaultSelect2__OverlayProps
  extends pp.BaseTriggeredOverlayProps {
  children?: React.ReactNode;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelect2__Overlay__RenderFunc(props: {
  variants: PlasmicSelect2__Overlay__VariantsArgs;
  args: PlasmicSelect2__Overlay__ArgsType;
  overrides: PlasmicSelect2__Overlay__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "relativePlacement",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.relativePlacement
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const superContexts = {
    Select2: React.useContext(SUPER__PlasmicSelect2.Context)
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant($state, "relativePlacement", "bottom") ? true : false) ? (
        <div
          data-plasmic-name={"top"}
          data-plasmic-override={overrides.top}
          className={classNames(projectcss.all, sty.top, {
            [sty.toprelativePlacement_bottom]: hasVariant(
              $state,
              "relativePlacement",
              "bottom"
            )
          })}
        />
      ) : null}
      <div
        data-plasmic-name={"middle"}
        data-plasmic-override={overrides.middle}
        className={classNames(projectcss.all, sty.middle)}
      >
        {(hasVariant($state, "relativePlacement", "right") ? true : false) ? (
          <div
            data-plasmic-name={"left"}
            data-plasmic-override={overrides.left}
            className={classNames(projectcss.all, sty.left, {
              [sty.leftrelativePlacement_right]: hasVariant(
                $state,
                "relativePlacement",
                "right"
              )
            })}
          />
        ) : null}
        <div
          data-plasmic-name={"main"}
          data-plasmic-override={overrides.main}
          className={classNames(projectcss.all, sty.main)}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
        {(hasVariant($state, "relativePlacement", "left") ? true : false) ? (
          <div
            data-plasmic-name={"right"}
            data-plasmic-override={overrides.right}
            className={classNames(projectcss.all, sty.right, {
              [sty.rightrelativePlacement_left]: hasVariant(
                $state,
                "relativePlacement",
                "left"
              )
            })}
          />
        ) : null}
      </div>
      {(hasVariant($state, "relativePlacement", "top") ? true : false) ? (
        <div
          data-plasmic-name={"bottom"}
          data-plasmic-override={overrides.bottom}
          className={classNames(projectcss.all, sty.bottom, {
            [sty.bottomrelativePlacement_top]: hasVariant(
              $state,
              "relativePlacement",
              "top"
            )
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseTriggeredOverlayProps>(
  props: P,
  ref: pp.TriggeredOverlayRef
) {
  return pp.useTriggeredOverlay(
    PlasmicSelect2__Overlay,
    props,
    {
      isPlacedTopVariant: { group: "relativePlacement", variant: "top" },
      isPlacedBottomVariant: { group: "relativePlacement", variant: "bottom" },
      isPlacedLeftVariant: { group: "relativePlacement", variant: "left" },
      isPlacedRightVariant: { group: "relativePlacement", variant: "right" },
      contentSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "top", "middle", "left", "main", "right", "bottom"],
  top: ["top"],
  middle: ["middle", "left", "main", "right"],
  left: ["left"],
  main: ["main"],
  right: ["right"],
  bottom: ["bottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  top: "div";
  middle: "div";
  left: "div";
  main: "div";
  right: "div";
  bottom: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect2__Overlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect2__Overlay__VariantsArgs;
    args?: PlasmicSelect2__Overlay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelect2__Overlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelect2__Overlay__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSelect2__Overlay__ArgProps,
          internalVariantPropNames: PlasmicSelect2__Overlay__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelect2__Overlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect2__Overlay";
  } else {
    func.displayName = `PlasmicSelect2__Overlay.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect2__Overlay = Object.assign(
  // Top-level PlasmicSelect2__Overlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    top: makeNodeComponent("top"),
    middle: makeNodeComponent("middle"),
    left: makeNodeComponent("left"),
    main: makeNodeComponent("main"),
    right: makeNodeComponent("right"),
    bottom: makeNodeComponent("bottom"),

    // Metadata about props expected for PlasmicSelect2__Overlay
    internalVariantProps: PlasmicSelect2__Overlay__VariantProps,
    internalArgProps: PlasmicSelect2__Overlay__ArgProps,

    useBehavior
  }
);

export default PlasmicSelect2__Overlay;
/* prettier-ignore-end */
