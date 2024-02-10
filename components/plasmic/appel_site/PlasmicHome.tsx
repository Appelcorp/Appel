// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: cwWSae17Ytui

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
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: cwWSae17Ytui/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: Flex__<"div">;
  heade?: Flex__<typeof Heade>;
  navigationBar?: Flex__<typeof NavigationBar>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  columns?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultHomeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHome.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHome.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHome.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Heade
            data-plasmic-name={"heade"}
            data-plasmic-override={overrides.heade}
            className={classNames("__wab_instance", sty.heade)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__v6Zm)}>
            {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jlBcd)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__nis5T)}
                >
                  {false ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__mtRcN)}
                    >
                      <button
                        className={classNames(
                          projectcss.all,
                          projectcss.button,
                          projectcss.__wab_text,
                          sty.button__gJMh
                        )}
                      >
                        {"Sign up"}
                      </button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__haZsO
                        )}
                        color={"clear"}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg___7ZMhw
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___00AHo
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
                            sty.text__l5NVu
                          )}
                        >
                          {"Log in"}
                        </div>
                      </Button>
                    </div>
                  ) : null}
                  <NavigationBar
                    data-plasmic-name={"navigationBar"}
                    data-plasmic-override={overrides.navigationBar}
                    brand={
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
                    }
                    className={classNames("__wab_instance", sty.navigationBar)}
                    closeButton={
                      <BarsIcon
                        className={classNames(projectcss.all, sty.svg__oZ4Fw)}
                        role={"img"}
                      />
                    }
                    forceOpenMenu={false}
                    itemsGap={8}
                    menuItems={
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__k13H
                        )}
                      >
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__lxR9W
                          )}
                          color={"softSand"}
                          submitsForm={true}
                        >
                          {"Store"}
                        </Button>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__h3MNt
                          )}
                          color={"softSand"}
                          submitsForm={true}
                        >
                          {"Appel"}
                        </Button>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__yipV0
                          )}
                          color={"softSand"}
                          submitsForm={true}
                        >
                          {"ePad"}
                        </Button>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__pzTzo
                          )}
                          color={"softSand"}
                          submitsForm={true}
                        >
                          {"eTop"}
                        </Button>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__iJ5LQ
                          )}
                          color={"blue"}
                          submitsForm={true}
                        >
                          {"Sign In"}
                        </Button>
                      </Stack__>
                    }
                    openButton={
                      <BarsIcon
                        className={classNames(projectcss.all, sty.svg__cFskx)}
                        role={"img"}
                      />
                    }
                    responsiveBreakpoint={768}
                  />
                </Stack__>
              </Stack__>
            ) : null}
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vTD)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__zIgH)}>
                <div className={classNames(projectcss.all, sty.freeBox__pzsY1)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___2FuG6)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___7EAnR
                      )}
                      color={"blue"}
                      isDisabled={true}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__j8Qxu
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobile")
                          ? "Buy Now"
                          : "Learn More"}
                      </div>
                    </Button>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__mZcEw
                      )}
                      isDisabled={true}
                      submitsForm={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dZ7S
                        )}
                      >
                        {"DOWNLOAD"}
                      </div>
                    </Button>
                  </Stack__>
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__awRWg)}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox__d9XBc)}
                loading={"lazy"}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox__tYPev)}
                />
              </div>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__duoSr)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__xZ3Bi)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__vrobv)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__qVNb)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"80px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/mainpicpropng2.png",
                        fullWidth: 1196,
                        fullHeight: 1614,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__eApPv)}
                  >
                    <h3
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3__lmoJt
                      )}
                    >
                      {"Appel 3 Pro"}
                    </h3>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jvEGy
                      )}
                    >
                      {"Luxury Meets Precision"}
                    </div>
                    <Button
                      className={classNames("__wab_instance", sty.button__bV5F)}
                      link={`/shop/appel/appel-3-pro`}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tiDiQ
                        )}
                      >
                        {"BUY NOW"}
                      </div>
                    </Button>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__l5B7)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__uQvef)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__a8BAe)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"176px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/epadpng.png",
                        fullWidth: 6800,
                        fullHeight: 6529,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__apg8V)}
                  >
                    <h3
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3__poG1
                      )}
                    >
                      {"ePad"}
                    </h3>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___4IxgT
                      )}
                    >
                      {"Your New Laptop."}
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__bGgzS
                      )}
                      link={`/shop/epad/epad`}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eblEm
                        )}
                      >
                        {"Buy Now"}
                      </div>
                    </Button>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__li1Jk)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__s8BtF)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___4KChV)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"378px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/etopLite2Png.png",
                        fullWidth: 4234,
                        fullHeight: 2480,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__isg2E)}
                  >
                    <h3
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3__taKy
                      )}
                    >
                      {"eTop Lite 2"}
                    </h3>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___2Wgk
                      )}
                    >
                      {"Snappy and Sleek"}
                    </div>
                    <Button
                      className={classNames("__wab_instance", sty.button__dwDn)}
                      link={`/shop/etop/etop-lite-3`}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__b713P
                        )}
                      >
                        {"PRE ORDER"}
                      </div>
                    </Button>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__wbSkg)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__tmZq2)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__uihOq)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"201px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/pod11Png.png",
                        fullWidth: 299,
                        fullHeight: 314,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qTtm6)}
                  >
                    <h3
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3___7JqWl
                      )}
                    >
                      {"eMax"}
                    </h3>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qRcr7
                      )}
                    >
                      {"The Worlds Best Audio."}
                    </div>
                    <Button
                      className={classNames("__wab_instance", sty.button__c1Wm)}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eGhaQ
                        )}
                      >
                        {"Buy Now"}
                      </div>
                    </Button>
                  </div>
                </div>
              </Stack__>
            </div>
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__xpMZh)} />
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yGo4Y
            )}
          >
            {"Enter some text"}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "heade", "navigationBar", "link", "columns", "footer"],
  heade: ["heade"],
  navigationBar: ["navigationBar", "link"],
  link: ["link"],
  columns: ["columns"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  heade: typeof Heade;
  navigationBar: typeof NavigationBar;
  link: "a";
  columns: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHome__ArgsType,
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
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heade: makeNodeComponent("heade"),
    navigationBar: makeNodeComponent("navigationBar"),
    link: makeNodeComponent("link"),
    columns: makeNodeComponent("columns"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
