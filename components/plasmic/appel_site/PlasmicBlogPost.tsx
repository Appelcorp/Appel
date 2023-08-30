// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: ntNeK25t9Q1VG

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import sty from "./PlasmicBlogPost.module.css"; // plasmic-import: ntNeK25t9Q1VG/css

createPlasmicElementProxy;

export type PlasmicBlogPost__VariantMembers = {
  long: "long";
};
export type PlasmicBlogPost__VariantsArgs = {
  long?: SingleBooleanChoiceArg<"long">;
};
type VariantPropType = keyof PlasmicBlogPost__VariantsArgs;
export const PlasmicBlogPost__VariantProps = new Array<VariantPropType>("long");

export type PlasmicBlogPost__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  author?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBlogPost__ArgsType;
export const PlasmicBlogPost__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "image",
  "author"
);

export type PlasmicBlogPost__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultBlogPostProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  author?: React.ReactNode;
  long?: SingleBooleanChoiceArg<"long">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBlogPost__RenderFunc(props: {
  variants: PlasmicBlogPost__VariantsArgs;
  args: PlasmicBlogPost__ArgsType;
  overrides: PlasmicBlogPost__OverridesType;
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
        path: "long",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.long
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

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        { [sty.rootlong]: hasVariant($state, "long", "long") }
      )}
    >
      {(hasVariant($state, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__pE8Xf, {
            [sty.freeBoxlong__pE8XfVpdfx]: hasVariant($state, "long", "long")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__uu8K)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                src={{
                  src: "/plasmic/appel_site/images/b1.jpg",
                  fullWidth: 370,
                  fullHeight: 250,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.image
          })}
        </div>
      ) : null}
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__qkOf5, {
          [sty.freeBoxlong__qkOf5Vpdfx]: hasVariant($state, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Why Brands are Looking at Local Language",
          value: args.title,
          className: classNames(sty.slotTargetTitle, {
            [sty.slotTargetTitlelong]: hasVariant($state, "long", "long")
          })
        })}
        {p.renderPlasmicSlot({
          defaultContents: "By Robert Norby / 18th March 2018",
          value: args.author,
          className: classNames(sty.slotTargetAuthor)
        })}
        {p.renderPlasmicSlot({
          defaultContents:
            "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptionlong]: hasVariant($state, "long", "long")
          })
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogPost__VariantsArgs;
    args?: PlasmicBlogPost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogPost__ArgsType,
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
          internalArgPropNames: PlasmicBlogPost__ArgProps,
          internalVariantPropNames: PlasmicBlogPost__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlogPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPost";
  } else {
    func.displayName = `PlasmicBlogPost.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPost = Object.assign(
  // Top-level PlasmicBlogPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBlogPost
    internalVariantProps: PlasmicBlogPost__VariantProps,
    internalArgProps: PlasmicBlogPost__ArgProps
  }
);

export default PlasmicBlogPost;
/* prettier-ignore-end */
