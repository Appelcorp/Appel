// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: KVz1UiCXjxfR

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

import Button from "../../Button"; // plasmic-import: 2YS4YxHJgFKju/component
import Heade from "../../Heade"; // plasmic-import: SVZGM5FMLbLU/component
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax";
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import Button2 from "../../Button2"; // plasmic-import: UZjdrU3vHc5/component
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicAppOsPublic.module.css"; // plasmic-import: KVz1UiCXjxfR/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicAppOsPublic__VariantMembers = {};
export type PlasmicAppOsPublic__VariantsArgs = {};
type VariantPropType = keyof PlasmicAppOsPublic__VariantsArgs;
export const PlasmicAppOsPublic__VariantProps = new Array<VariantPropType>();

export type PlasmicAppOsPublic__ArgsType = {};
type ArgPropType = keyof PlasmicAppOsPublic__ArgsType;
export const PlasmicAppOsPublic__ArgProps = new Array<ArgPropType>();

export type PlasmicAppOsPublic__OverridesType = {
  root?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  heade?: Flex__<typeof Heade>;
  scrollParallax?: Flex__<typeof ParallaxWrapper>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultAppOsPublicProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppOsPublic__RenderFunc(props: {
  variants: PlasmicAppOsPublic__VariantsArgs;
  args: PlasmicAppOsPublic__ArgsType;
  overrides: PlasmicAppOsPublic__OverridesType;
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
        <title key="title">{PlasmicAppOsPublic.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAppOsPublic.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAppOsPublic.pageMetadata.title}
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
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__rwGaT)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tmtvI)}
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
                <div className={classNames(projectcss.all, sty.freeBox__tgjAr)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__bsSDk
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button
                    className={classNames("__wab_instance", sty.button__ifxQn)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__yXvvc)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__irIV)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__oXkgw
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button>
                </div>
              ) : null}
              <BarsIcon
                className={classNames(projectcss.all, sty.svg__yXLah)}
                role={"img"}
              />
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hv7Bw)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__j6TCj)}
            >
              <svg
                className={classNames(projectcss.all, sty.svg__lyb87)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg___6ALwt)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg___1TLht)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__lpKhq)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__rqYiC)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__dW4F7)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__nK15U)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__rbQds)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__rU2Lo)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__ozxna)}
                role={"img"}
              />

              <svg
                className={classNames(projectcss.all, sty.svg__ianyt)}
                role={"img"}
              />
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___64Rd4)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qFfsX
                )}
              >
                {"ePad Pro"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__l5Es7
                )}
              >
                {"ePad"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9A1Sf
                )}
              >
                {"ePad Lite"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7HAxj
                )}
              >
                {"Compare"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__imuma
                )}
              >
                {"eMax Lite"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__u0Pun
                )}
              >
                {"Accessories"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jqfOv
                )}
              >
                {"eOS 14"}
              </div>
            </Stack__>
          </Stack__>
          <Heade
            data-plasmic-name={"heade"}
            data-plasmic-override={overrides.heade}
            className={classNames("__wab_instance", sty.heade)}
          />

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qVeO4)}
          >
            {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__ynCxB)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/appel_site/images/twopcshapng2.png",
                  fullWidth: 9657,
                  fullHeight: 6647,
                  aspectRatio: undefined
                }}
              />
            ) : null}
            <ParallaxWrapper
              data-plasmic-name={"scrollParallax"}
              data-plasmic-override={overrides.scrollParallax}
              className={classNames("__wab_instance", sty.scrollParallax)}
              speed={20}
            >
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__djpPs)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/appel_site/images/twopcshapng2.png",
                  fullWidth: 9657,
                  fullHeight: 6647,
                  aspectRatio: undefined
                }}
              />
            </ParallaxWrapper>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yVixa)}
          >
            <Reveal
              className={classNames("__wab_instance", sty.reveal__uL9H)}
              effect={"fade"}
              triggerOnce={false}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dNg7K
                )}
              >
                {"appOS Public"}
              </div>
            </Reveal>
            <Reveal
              className={classNames("__wab_instance", sty.reveal___5FY1E)}
              effect={"fade"}
              triggerOnce={false}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__crs
                )}
              >
                {"Bringing the Power\nto the Masses."}
              </div>
            </Reveal>
            <Reveal
              className={classNames("__wab_instance", sty.reveal___96YhD)}
              effect={"fade"}
              triggerOnce={false}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b9WRk
                )}
              >
                {
                  "With appOS Public, enter a new powerful web based\noperating experience on any PC, Laptop, or TV."
                }
              </div>
            </Reveal>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cc3Yw)}
            >
              <Button2
                className={classNames("__wab_instance", sty.button2__ansY0)}
                color={"link"}
                isDisabled={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aswaE
                  )}
                >
                  {"Watch Trailer"}
                </div>
              </Button2>
              <Button2
                className={classNames("__wab_instance", sty.button2__yvWe3)}
                color={"link"}
                isDisabled={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__llanD
                  )}
                >
                  {"Watch Event"}
                </div>
              </Button2>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ewPPu)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oQsf
              )}
            >
              {"appOS Public"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dFl66
              )}
            >
              {"Bringing the Power\nto the Masses."}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iuFlp
              )}
            >
              {
                "With appOS Public, enter a new powerful web based\noperating experience on any PC, Laptop, or TV."
              }
            </div>
            <Button2
              className={classNames("__wab_instance", sty.button2__sGk8P)}
              color={"link"}
              isDisabled={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__s5Hof
                )}
              >
                {"Watch Trailer >"}
              </div>
            </Button2>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__u7X42)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ySLI
              )}
            >
              {"Web Based"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hfcll)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c4AJp
                )}
              >
                {"Experience Web Applications"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__y7VJa
                )}
              >
                {
                  "Unlock the power of lightning-fast and seamlessly efficient web applications like Excel, Word, PowerPoint, and iCloud across all your devices. These application are seamlessly integrated and require no installation on your device, ensuring a secure and hassle-free experience while minimizing the risk of malware."
                }
              </div>
            </Stack__>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__fgIm)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/appel_site/images/appelwebappspng2.png",
                fullWidth: 2117,
                fullHeight: 1084,
                aspectRatio: undefined
              }}
            />
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__x6DA)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kQNi
              )}
            >
              {"New Design"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__p6L12)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ecZri
                )}
              >
                {"Brand New User Interface"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ev0MY
                )}
              >
                {
                  "Through meticulous design from the ground up, we've crafted a cutting-edge user interface that seamlessly adapts to all your devices, regardless of size, ensuring a flawless experience across all your devices."
                }
              </div>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox___5O3Vq)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__dcGmF)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/appel_site/images/appelx2Png.png",
                  fullWidth: 1920,
                  fullHeight: 1080,
                  aspectRatio: undefined
                }}
              />

              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__gbqsB)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/appel_site/images/appelx3Png2.png",
                  fullWidth: 1920,
                  fullHeight: 1080,
                  aspectRatio: undefined
                }}
              />
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___2Npu7)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__esS5A)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9Jio6
                )}
              >
                {"Chrome"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6YKi8
                )}
              >
                {" Firefox"}
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__oga3X)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rviEy
                )}
              >
                {"Privacy Oriented"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pro30
                )}
              >
                {
                  "At Appel, your privacy and security are our top priorities. While Google Chrome is an option, we've selected Firefox as our preferred browser for its robust security features, ensuring your online experience remains safeguarded at every turn."
                }
              </div>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bcJp7)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__v2J1
              )}
            >
              {"Coming late 2024.*"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lf9Yy
              )}
            >
              {"Trailer and event coming this month."}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mkSEz)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hhVid
              )}
            >
              {
                "*Coming late 2024 for alpha testers, an official date for final release is unset."
              }
            </div>
          </Stack__>
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
  root: ["root", "link", "heade", "scrollParallax", "footer"],
  link: ["link"],
  heade: ["heade"],
  scrollParallax: ["scrollParallax"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  heade: typeof Heade;
  scrollParallax: typeof ParallaxWrapper;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppOsPublic__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppOsPublic__VariantsArgs;
    args?: PlasmicAppOsPublic__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppOsPublic__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppOsPublic__ArgsType,
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
          internalArgPropNames: PlasmicAppOsPublic__ArgProps,
          internalVariantPropNames: PlasmicAppOsPublic__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppOsPublic__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAppOsPublic";
  } else {
    func.displayName = `PlasmicAppOsPublic.${nodeName}`;
  }
  return func;
}

export const PlasmicAppOsPublic = Object.assign(
  // Top-level PlasmicAppOsPublic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    heade: makeNodeComponent("heade"),
    scrollParallax: makeNodeComponent("scrollParallax"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAppOsPublic
    internalVariantProps: PlasmicAppOsPublic__VariantProps,
    internalArgProps: PlasmicAppOsPublic__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - AppOS Public",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAppOsPublic;
/* prettier-ignore-end */
