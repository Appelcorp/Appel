// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: j5MKN8ABkLT

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
import sty from "./PlasmicETopStore.module.css"; // plasmic-import: j5MKN8ABkLT/css

import EtopProsvgIcon from "./icons/PlasmicIcon__EtopProsvg"; // plasmic-import: _ToeTuh5Qo/icon
import EtopsvgIcon from "./icons/PlasmicIcon__Etopsvg"; // plasmic-import: 9eM4XrGdro/icon
import EtopLite2SvgIcon from "./icons/PlasmicIcon__EtopLite2Svg"; // plasmic-import: DzPVzDvGCHfb/icon
import EstageUltrasvgIcon from "./icons/PlasmicIcon__EstageUltrasvg"; // plasmic-import: 18MBCTLC9d1y/icon
import EstagesvgIcon from "./icons/PlasmicIcon__Estagesvg"; // plasmic-import: ydbOhlD9HekK/icon
import EmaxStudiosvgIcon from "./icons/PlasmicIcon__EmaxStudiosvg"; // plasmic-import: nAjN-qQurd/icon
import EdisplayMaxsvgIcon from "./icons/PlasmicIcon__EdisplayMaxsvg"; // plasmic-import: FgkONTRVH2O-/icon
import Comparesvg2Icon from "./icons/PlasmicIcon__Comparesvg2"; // plasmic-import: PKKaeI26jF/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicETopStore__VariantMembers = {};
export type PlasmicETopStore__VariantsArgs = {};
type VariantPropType = keyof PlasmicETopStore__VariantsArgs;
export const PlasmicETopStore__VariantProps = new Array<VariantPropType>();

export type PlasmicETopStore__ArgsType = {};
type ArgPropType = keyof PlasmicETopStore__ArgsType;
export const PlasmicETopStore__ArgProps = new Array<ArgPropType>();

export type PlasmicETopStore__OverridesType = {
  root?: Flex__<"div">;
  heade?: Flex__<typeof Heade>;
  img?: Flex__<typeof PlasmicImg__>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultETopStoreProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicETopStore__RenderFunc(props: {
  variants: PlasmicETopStore__VariantsArgs;
  args: PlasmicETopStore__ArgsType;
  overrides: PlasmicETopStore__OverridesType;
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
        <title key="title">{PlasmicETopStore.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicETopStore.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicETopStore.pageMetadata.title}
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
            className={classNames(projectcss.all, sty.freeBox__b7Q0J)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__v7X6Y)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__obMXh)}>
                <EtopProsvgIcon
                  className={classNames(projectcss.all, sty.svg___9KjVe)}
                  role={"img"}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__nobeT
                  )}
                  component={Link}
                  href={`/shop/etop/etop-pro-2`}
                  platform={"nextjs"}
                >
                  {"eTop Pro 2"}
                </PlasmicLink__>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aAi4N
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__r9YYs)}>
                <EtopsvgIcon
                  className={classNames(projectcss.all, sty.svg__fwuSz)}
                  role={"img"}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__gr43I
                  )}
                  component={Link}
                  href={`/shop/etop/etop-2`}
                  platform={"nextjs"}
                >
                  {"eTop 2"}
                </PlasmicLink__>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__f7Pdv
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__rr0Zj)}>
                <EtopLite2SvgIcon
                  className={classNames(projectcss.all, sty.svg__zEkIa)}
                  role={"img"}
                />

                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__zQi3V
                  )}
                  component={Link}
                  href={`/shop/etop/etop-lite-2`}
                  platform={"nextjs"}
                >
                  {"eTop Lite 2"}
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__ebgi)}>
                <EstageUltrasvgIcon
                  className={classNames(projectcss.all, sty.svg__yRpnv)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7UXf3
                  )}
                >
                  {"eStage Ultra"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__erqFq
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__vdRTx)}>
                <EstagesvgIcon
                  className={classNames(projectcss.all, sty.svg__vtccu)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kSa8N
                  )}
                >
                  {"eStage"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9Y6Xf
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___5D6Uc)}>
                <EmaxStudiosvgIcon
                  className={classNames(projectcss.all, sty.svg__eBwkI)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__doDzg
                  )}
                >
                  {"eMax Studio"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__upj3E)}>
                <EdisplayMaxsvgIcon
                  className={classNames(projectcss.all, sty.svg___6LnmL)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fpPrq
                  )}
                >
                  {"eDisplay Max"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7QHn
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__yzG2M)}>
                <Comparesvg2Icon
                  className={classNames(projectcss.all, sty.svg__zbclO)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xXa8T
                  )}
                >
                  {"Compare"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__ppEmN)}>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/appel_site/images/appos5Png.png",
                    fullWidth: 1080,
                    fullHeight: 1080,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gUv7Y
                  )}
                >
                  {"AppOS 5"}
                </div>
              </div>
            </Stack__>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__wTle4)}>
            <div className={classNames(projectcss.all, sty.freeBox___1W11Q)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fxhR)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__ai7Hj)}>
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__nk7Vw
                    )}
                  >
                    {"eTop 2"}
                  </h1>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___5CjOn)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__a93IJ)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___4Ofdw
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "$1,999"
                        : "$1,999"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0Hk3K
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Powerful Performance"
                        : "x2.. no, x10 the performance."}
                    </div>
                  </div>
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__dq26M)}
                  color={"blue"}
                  link={`/shop/etop/etop-2`}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qy2Yl
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
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ivmf5)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mieZq)}
              >
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__zQCf
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </PlasmicLink__>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ooJlb)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__ww86A
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__lDvKb
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___43GX0
                          )}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__foHSs)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jKkT
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__kYoZ)}
                  role={"img"}
                />
              </Stack__>
            </Stack__>
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hThBq)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5BsBv)}
              >
                <svg
                  className={classNames(projectcss.all, sty.svg__yigtW)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg___5Dbsk)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__po7Zk)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__agWhY)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__qrEpj)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__gOze)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__szOj)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__iaHoK)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__sawMb)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__cuChR)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__oqp9V)}
                  role={"img"}
                />
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pZoGu)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ppjAw
                  )}
                >
                  {"ePad Pro"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___80F5D
                  )}
                >
                  {"ePad"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dQ611
                  )}
                >
                  {"ePad Lite"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zDh6Z
                  )}
                >
                  {"Compare"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__p2J4K
                  )}
                >
                  {"eMax Lite"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fsq2N
                  )}
                >
                  {"Accessories"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__a5Z3V
                  )}
                >
                  {"eOS 14"}
                </div>
              </Stack__>
            </Stack__>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox___4Q63)}>
            <div className={classNames(projectcss.all, sty.freeBox__eP5X)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wWZe)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__pDaed)}>
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1___8IHch
                    )}
                  >
                    {"eTop Pro 2"}
                  </h1>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__l1Uki)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__tmYoE)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rkyA8
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "$19,999"
                        : "$3,999"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kYvEj
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "speeed"
                        : "The second generation of something amazing"}
                    </div>
                  </div>
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__tErl3)}
                  color={"blue"}
                  link={`/shop/etop/etop-pro-2`}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8YvNu
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
  root: ["root", "heade", "img", "footer"],
  heade: ["heade"],
  img: ["img"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  heade: typeof Heade;
  img: typeof PlasmicImg__;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicETopStore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicETopStore__VariantsArgs;
    args?: PlasmicETopStore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicETopStore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicETopStore__ArgsType,
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
          internalArgPropNames: PlasmicETopStore__ArgProps,
          internalVariantPropNames: PlasmicETopStore__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicETopStore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicETopStore";
  } else {
    func.displayName = `PlasmicETopStore.${nodeName}`;
  }
  return func;
}

export const PlasmicETopStore = Object.assign(
  // Top-level PlasmicETopStore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heade: makeNodeComponent("heade"),
    img: makeNodeComponent("img"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicETopStore
    internalVariantProps: PlasmicETopStore__VariantProps,
    internalArgProps: PlasmicETopStore__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - eTop",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicETopStore;
/* prettier-ignore-end */
