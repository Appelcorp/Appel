// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: O8jRJZzkmVNu

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: O8jRJZzkmVNu/css

import TwitterXSeeklogocom4Svg2Icon from "./icons/PlasmicIcon__TwitterXSeeklogocom4Svg2"; // plasmic-import: AXYHtippGlW3/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: zVudMwrt8UrDS/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseH80Ck18IRB()
  });

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
      <Stack__
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column___02Q7W)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__u0AeA)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__ny0My
              )}
            >
              {"Appel"}
            </h3>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eyoNw)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__daveb
                )}
              >
                {"Connect with us"}
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__odo5G)}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___2WDq6
                  )}
                  component={Link}
                  href={"https://www.twitter.com/appel_us"}
                  platform={"nextjs"}
                  target={undefined}
                >
                  <TwitterXSeeklogocom4Svg2Icon
                    className={classNames(projectcss.all, sty.svg__rw3Lg)}
                    role={"img"}
                  />
                </PlasmicLink__>
              </Stack__>
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__ox0Ih)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__gL5)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3___1QN5H
              )}
            >
              {"Company"}
            </h3>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__w9Aj5)}
            >
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__hPwMv
                )}
                component={Link}
                href={`/developer`}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__us1Ua)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e716
                  )}
                >
                  {"Developer"}
                </div>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__kagjd)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__y0OAx
                )}
              >
                {"Event24"}
              </div>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__wOw2H
                )}
                component={Link}
                href={"https://www.twitter.com/appel_us"}
                platform={"nextjs"}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__stTL
                  )}
                  component={Link}
                  href={"https://www.twitter.com/appel_us"}
                  platform={"nextjs"}
                >
                  {"X"}
                </PlasmicLink__>
              </Stack__>
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__un8V)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__frlJd)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3__at2V
              )}
            >
              {"Legal"}
            </h3>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nydGi)}
            >
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__ojWwQ
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__db9TI)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yrPfz
                  )}
                >
                  {"Privacy Policy"}
                </div>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__xwtHx)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
              <Stack__
                as={PlasmicLink__}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__jzU65
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___62Ap)}
                    role={"img"}
                  />
                ) : null}
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__kBwWs
                  )}
                  component={Link}
                  href={`/terms`}
                  platform={"nextjs"}
                >
                  {"Terms"}
                </PlasmicLink__>
                {false ? (
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__uthX1)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
            </Stack__>
          </Stack__>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
