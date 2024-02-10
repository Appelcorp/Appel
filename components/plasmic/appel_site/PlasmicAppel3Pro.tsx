// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: XjqCh-5qZX

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

import Heade from "../../Heade"; // plasmic-import: SVZGM5FMLbLU/component
import Button from "../../Button"; // plasmic-import: 2YS4YxHJgFKju/component
import Select from "../../Select"; // plasmic-import: NNJmEAQECZJ/component
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicAppel3Pro.module.css"; // plasmic-import: XjqCh-5qZX/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicAppel3Pro__VariantMembers = {};
export type PlasmicAppel3Pro__VariantsArgs = {};
type VariantPropType = keyof PlasmicAppel3Pro__VariantsArgs;
export const PlasmicAppel3Pro__VariantProps = new Array<VariantPropType>();

export type PlasmicAppel3Pro__ArgsType = {};
type ArgPropType = keyof PlasmicAppel3Pro__ArgsType;
export const PlasmicAppel3Pro__ArgProps = new Array<ArgPropType>();

export type PlasmicAppel3Pro__OverridesType = {
  single?: Flex__<"div">;
  heade?: Flex__<typeof Heade>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  columns?: Flex__<"div">;
  h1?: Flex__<"h1">;
  select2?: Flex__<typeof Select>;
  h2?: Flex__<"h2">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultAppel3ProProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppel3Pro__RenderFunc(props: {
  variants: PlasmicAppel3Pro__VariantsArgs;
  args: PlasmicAppel3Pro__ArgsType;
  overrides: PlasmicAppel3Pro__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "select2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseH80Ck18IRB()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicAppel3Pro.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAppel3Pro.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAppel3Pro.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"single"}
          data-plasmic-override={overrides.single}
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
            sty.single
          )}
        >
          <Heade
            data-plasmic-name={"heade"}
            data-plasmic-override={overrides.heade}
            className={classNames("__wab_instance", sty.heade)}
          />

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hYmpA)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__nlhOo)}>
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              ) ? (
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lIbmZ)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__bU8G)}
                  >
                    <PlasmicLink__
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link
                      )}
                      component={Link}
                      href={`/`}
                      platform={"nextjs"}
                    >
                      {"\u212e"}
                    </PlasmicLink__>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__uKDv
                        )}
                      >
                        <button
                          className={classNames(
                            projectcss.all,
                            projectcss.button,
                            projectcss.__wab_text,
                            sty.button__ds2Fe
                          )}
                        >
                          {"Sign up"}
                        </button>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__nHnEi
                          )}
                          color={"clear"}
                          endIcon={
                            <Icon38Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__oqH4I
                              )}
                              role={"img"}
                            />
                          }
                          startIcon={
                            <ChecksvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__hzEQe
                              )}
                              role={"img"}
                            />
                          }
                          submitsForm={true}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__mrY6G
                            )}
                          >
                            {"Log in"}
                          </div>
                        </Button>
                      </div>
                    ) : null}
                    <BarsIcon
                      className={classNames(projectcss.all, sty.svg__g1ZNv)}
                      role={"img"}
                    />
                  </Stack__>
                </Stack__>
              ) : null}
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__vj7Eo)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__vyzH1)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/appel_site/images/mainpicpropng2.png",
                      fullWidth: 1196,
                      fullHeight: 1614,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__k7VoH)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Appel 3 Pro"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8RiyW
                    )}
                  >
                    {"From $999 or\n $41.63/mo for 24 mo."}
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__naA3Q)}
                  >
                    <Select
                      data-plasmic-name={"select2"}
                      data-plasmic-override={overrides.select2}
                      className={classNames("__wab_instance", sty.select2)}
                      onChange={(...eventArgs) => {
                        generateStateOnChangeProp($state, ["select2", "value"])(
                          eventArgs[0]
                        );
                      }}
                      options={(() => {
                        const __composite = [
                          { value: null, label: null },
                          { value: null, label: null }
                        ];
                        __composite["0"]["value"] = "Shine";
                        __composite["0"]["label"] = "Shine";
                        __composite["1"]["value"] = "Matte";
                        __composite["1"]["label"] = "Matte";
                        return __composite;
                      })()}
                      placeholder={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mKymy
                          )}
                        >
                          {"Pick Color"}
                        </div>
                      }
                      value={generateStateValueProp($state, [
                        "select2",
                        "value"
                      ])}
                    />

                    <Button
                      className={classNames("__wab_instance", sty.button__iNhY)}
                      submitsForm={true}
                    >
                      {"BUY NOW"}
                    </Button>
                  </Stack__>
                </Stack__>
              </div>
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pPa7S)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zDIT)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xpmhM)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__xdvy)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "What's in the Box"
                      : "What's in the Box"}
                  </h2>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bMxKu)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__s83Yt)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__kkmb5)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__wRokx)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"170px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/allcolorspropng.png",
                        fullWidth: 894,
                        fullHeight: 847,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__dCx6B)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bAhW
                        )}
                      >
                        {"Device (All Colours Shown)"}
                      </div>
                    </div>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__c7YLd)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ny7D1)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__k2QR4)}
                      displayHeight={"161px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"90px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/group5Png2.png",
                        fullWidth: 580,
                        fullHeight: 1078,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___6JZ4F
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__aa9Jq
                        )}
                      >
                        {"Charging Cable"}
                      </div>
                    </div>
                  </Stack__>
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  single: [
    "single",
    "heade",
    "link",
    "columns",
    "h1",
    "select2",
    "h2",
    "footer"
  ],
  heade: ["heade"],
  link: ["link"],
  columns: ["columns", "h1", "select2"],
  h1: ["h1"],
  select2: ["select2"],
  h2: ["h2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  single: "div";
  heade: typeof Heade;
  link: "a";
  columns: "div";
  h1: "h1";
  select2: typeof Select;
  h2: "h2";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppel3Pro__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppel3Pro__VariantsArgs;
    args?: PlasmicAppel3Pro__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppel3Pro__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppel3Pro__ArgsType,
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
          internalArgPropNames: PlasmicAppel3Pro__ArgProps,
          internalVariantPropNames: PlasmicAppel3Pro__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppel3Pro__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicAppel3Pro";
  } else {
    func.displayName = `PlasmicAppel3Pro.${nodeName}`;
  }
  return func;
}

export const PlasmicAppel3Pro = Object.assign(
  // Top-level PlasmicAppel3Pro renders the root element
  makeNodeComponent("single"),
  {
    // Helper components rendering sub-elements
    heade: makeNodeComponent("heade"),
    link: makeNodeComponent("link"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    select2: makeNodeComponent("select2"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAppel3Pro
    internalVariantProps: PlasmicAppel3Pro__VariantProps,
    internalArgProps: PlasmicAppel3Pro__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - Appel 3 pro",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAppel3Pro;
/* prettier-ignore-end */
