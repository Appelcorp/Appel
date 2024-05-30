// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: vgSLTWsVRZp

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
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicEPadStore.module.css"; // plasmic-import: vgSLTWsVRZp/css

import Appel1Svg3Icon from "./icons/PlasmicIcon__Appel1Svg3"; // plasmic-import: 85_A7N8g1l/icon
import Appel11SvgIcon from "./icons/PlasmicIcon__Appel11Svg"; // plasmic-import: Q-GI_EKxwS/icon
import Appel12SvgIcon from "./icons/PlasmicIcon__Appel12Svg"; // plasmic-import: _Fe8oTNuID/icon
import Comparesvg2Icon from "./icons/PlasmicIcon__Comparesvg2"; // plasmic-import: PKKaeI26jF/icon
import Emaxlite2SvgIcon from "./icons/PlasmicIcon__Emaxlite2Svg"; // plasmic-import: dsOT3dlAx5oW/icon
import Group22SvgIcon from "./icons/PlasmicIcon__Group22Svg"; // plasmic-import: LkSZgZM6_S/icon
import Group21SvgIcon from "./icons/PlasmicIcon__Group21Svg"; // plasmic-import: dON5qOa0yP/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicEPadStore__VariantMembers = {};
export type PlasmicEPadStore__VariantsArgs = {};
type VariantPropType = keyof PlasmicEPadStore__VariantsArgs;
export const PlasmicEPadStore__VariantProps = new Array<VariantPropType>();

export type PlasmicEPadStore__ArgsType = {};
type ArgPropType = keyof PlasmicEPadStore__ArgsType;
export const PlasmicEPadStore__ArgProps = new Array<ArgPropType>();

export type PlasmicEPadStore__OverridesType = {
  root?: Flex__<"div">;
  heade?: Flex__<typeof Heade>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultEPadStoreProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEPadStore__RenderFunc(props: {
  variants: PlasmicEPadStore__VariantsArgs;
  args: PlasmicEPadStore__ArgsType;
  overrides: PlasmicEPadStore__OverridesType;
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
        <title key="title">{PlasmicEPadStore.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicEPadStore.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicEPadStore.pageMetadata.title}
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

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fUh3T)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__oc1Iq)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__rfzE2)}>
                <Appel1Svg3Icon
                  className={classNames(projectcss.all, sty.svg__fjrgD)}
                  role={"img"}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__c9TeY
                  )}
                  component={Link}
                  href={`/shop/epad/epad-pro`}
                  platform={"nextjs"}
                >
                  {"ePad Pro"}
                </PlasmicLink__>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jIpxI
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__asQJf)}>
                <Appel11SvgIcon
                  className={classNames(projectcss.all, sty.svg___2Bovy)}
                  role={"img"}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ob4Q
                  )}
                  component={Link}
                  href={`/shop/epad/epad`}
                  platform={"nextjs"}
                >
                  {"ePad"}
                </PlasmicLink__>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4VIrN
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___2DAc)}>
                <Appel12SvgIcon
                  className={classNames(projectcss.all, sty.svg__ou05K)}
                  role={"img"}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__gl0V
                  )}
                  component={Link}
                  href={`/shop/epad/epad-lite`}
                  platform={"nextjs"}
                >
                  {"ePad Lite"}
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___3Ydim)}>
                <Comparesvg2Icon
                  className={classNames(projectcss.all, sty.svg__vrOme)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ydA4
                  )}
                >
                  {"Compare"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___3Etbt)}>
                <Emaxlite2SvgIcon
                  className={classNames(projectcss.all, sty.svg__vmJg)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__poVrK
                  )}
                >
                  {"eMax Lite 2"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___04JIm
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__pM3V5)}>
                <Group22SvgIcon
                  className={classNames(projectcss.all, sty.svg__vdJ3K)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1T4KW
                  )}
                >
                  {"Accessories"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__kygIb)}>
                <Group21SvgIcon
                  className={classNames(projectcss.all, sty.svg__l0Ek6)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__k0VQl
                  )}
                >
                  {"eOS 15"}
                </div>
              </div>
            </Stack__>
          </Stack__>
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__kAbz)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___1Zdj3)}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___8OiY9
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </PlasmicLink__>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__dwGU)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__cbKh
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__lhiyx
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__aTfhl)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(
                            projectcss.all,
                            sty.svg___1FvoQ
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
                          sty.text__rCQqr
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__gVnLj)}
                  role={"img"}
                />
              </Stack__>
            </Stack__>
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__kwSJx)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__baSc3)}
              >
                <svg
                  className={classNames(projectcss.all, sty.svg__t2B2K)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__uYy8B)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__l635A)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__lBzy)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__zKn1F)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__u6SaQ)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__vrWHl)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__yI2Tz)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__zfKjB)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__jQwU5)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__xdUkB)}
                  role={"img"}
                />
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__tU71M)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__khbun
                  )}
                >
                  {"ePad Pro"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hh7Op
                  )}
                >
                  {"ePad"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__edWvH
                  )}
                >
                  {"ePad Lite"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__f1BS0
                  )}
                >
                  {"Compare"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__arPv0
                  )}
                >
                  {"eMax Lite"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__raIyf
                  )}
                >
                  {"Accessories"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ufi59
                  )}
                >
                  {"eOS 14"}
                </div>
              </Stack__>
            </Stack__>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__lbKkc)}>
            <div className={classNames(projectcss.all, sty.freeBox__yJdZs)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pFbFh)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___4A2IH)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__szNX
                    )}
                  >
                    {"ePad"}
                  </h1>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__rnRpP)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__dIsaN)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qoUov
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "From $29.13/mo. for 24 mo. or $699 before trade in"
                        : "From $29.13/mo. for 24 mo. or $699 before trade in"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vpRmf
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "A Powerful Beast"
                        : "Fantasy Meets Reality"}
                    </div>
                  </div>
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__zy1Ez)}
                  color={"blue"}
                  link={`/shop/epad/epad`}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dmsnV
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Buy Now"
                      : "Buy Now"}
                  </div>
                </Button>
              </Stack__>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__spBsN)}>
            <div className={classNames(projectcss.all, sty.freeBox__eDtVq)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dOt91)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__rJa3S)}>
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__wL3OD
                    )}
                  >
                    {"ePad Pro"}
                  </h1>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__c8Zx6)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__q1FdC)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sxq5S
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "From $41.63/mo. for 24 mo. or $999 before trade in"
                        : "From $41.63/mo. for 24 mo. or $999 before trade in"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__crxiD
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Insanely Speedy"
                        : "A Revolution in Computing"}
                    </div>
                  </div>
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__wuhig)}
                  color={"blue"}
                  link={`/shop/epad/epad-pro`}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iaWQ
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Buy Now"
                      : "Buy Now"}
                  </div>
                </Button>
              </Stack__>
            </div>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "heade", "footer"],
  heade: ["heade"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  heade: typeof Heade;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEPadStore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEPadStore__VariantsArgs;
    args?: PlasmicEPadStore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEPadStore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEPadStore__ArgsType,
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
          internalArgPropNames: PlasmicEPadStore__ArgProps,
          internalVariantPropNames: PlasmicEPadStore__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEPadStore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEPadStore";
  } else {
    func.displayName = `PlasmicEPadStore.${nodeName}`;
  }
  return func;
}

export const PlasmicEPadStore = Object.assign(
  // Top-level PlasmicEPadStore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heade: makeNodeComponent("heade"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicEPadStore
    internalVariantProps: PlasmicEPadStore__VariantProps,
    internalArgProps: PlasmicEPadStore__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - ePad",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEPadStore;
/* prettier-ignore-end */
