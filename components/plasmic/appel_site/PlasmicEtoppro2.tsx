// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: PDT1ClOTrWQ

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
import Button from "../../Button"; // plasmic-import: 2YS4YxHJgFKju/component
import Select from "../../Select"; // plasmic-import: NNJmEAQECZJ/component
import Select__Option from "../../Select__Option"; // plasmic-import: hjMs8PXBOz6/component
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicEtoppro2.module.css"; // plasmic-import: PDT1ClOTrWQ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicEtoppro2__VariantMembers = {};
export type PlasmicEtoppro2__VariantsArgs = {};
type VariantPropType = keyof PlasmicEtoppro2__VariantsArgs;
export const PlasmicEtoppro2__VariantProps = new Array<VariantPropType>();

export type PlasmicEtoppro2__ArgsType = {};
type ArgPropType = keyof PlasmicEtoppro2__ArgsType;
export const PlasmicEtoppro2__ArgProps = new Array<ArgPropType>();

export type PlasmicEtoppro2__OverridesType = {
  single?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  select?: p.Flex<typeof Select>;
  hello?: p.Flex<"div">;
  plus?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultEtoppro2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEtoppro2__RenderFunc(props: {
  variants: PlasmicEtoppro2__VariantsArgs;
  args: PlasmicEtoppro2__ArgsType;
  overrides: PlasmicEtoppro2__OverridesType;
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
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseH80Ck18IRB()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicEtoppro2.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicEtoppro2.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicEtoppro2.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
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
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uM1Sa)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qcDaC)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__rjFEf
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </p.PlasmicLink>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__hhYcj)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button___5Cabp
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button
                      className={classNames("__wab_instance", sty.button__hVma)}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__bAv0H)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__qXq8X)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pf9Sa
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__nsPak)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          ) : null}
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ns0K4)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__xffVi)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__gmGux
                )}
                component={Link}
                href={`/`}
                platform={"nextjs"}
              >
                {"\u212e"}
              </p.PlasmicLink>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___55Dps)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__npXop)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__pE0Xs)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__eqnB8)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xAbYm
                    )}
                  >
                    {"Store"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__bxm66)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__z7She)}
                      role={"img"}
                    />
                  }
                  link={`/shop/appel`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__i8ZkA)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4QrZf
                    )}
                  >
                    {"Appel"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__kYe71)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__xPiFl)}
                      role={"img"}
                    />
                  }
                  link={`/shop/epad`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__te2R8)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wBdG7
                    )}
                  >
                    {"ePad"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__ooMdk)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__cVwSw)}
                      role={"img"}
                    />
                  }
                  link={`/shop/etop`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__za5)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hYuqz
                    )}
                  >
                    {"eTop"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___0K9ED)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___6A9P)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___9Prh7)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sSdFk
                    )}
                  >
                    {"InVision"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__cEtPq)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__uwwod)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___3TUit)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__siR2L
                    )}
                  >
                    {"eMax"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___2OoMl)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__lQ7RO)}
                      role={"img"}
                    />
                  }
                  link={`/login`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___9IRqb)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ofEzp
                    )}
                  >
                    {"Log in"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__cgszN)}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___6OhT5)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__uhbRt)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ymBVz
                    )}
                  >
                    {"Sign up"}
                  </div>
                </Button>
              </p.Stack>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__w74Cr)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__zGZlT
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button
                    className={classNames("__wab_instance", sty.button__oEnh6)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__qoBm7)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__vuLtA)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___57QIw
                      )}
                    >
                      {"Log in"}
                    </div>
                  </Button>
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uZid0)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__rVm9B)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__uCaWc)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___1Ju3N)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"539px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/appel_site/images/etopPro2Png.png",
                      fullWidth: 4234,
                      fullHeight: 2481,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__qNLwR)}
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
                    {"eTop Pro 2"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vtxKw
                    )}
                  >
                    {"From $3,999 or\n $166.62/mo for 24 mo."}
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___2M6N6)}
                  >
                    <Select
                      data-plasmic-name={"select"}
                      data-plasmic-override={overrides.select}
                      className={classNames("__wab_instance", sty.select)}
                      onChange={(...eventArgs) => {
                        p.generateStateOnChangeProp($state, [
                          "select",
                          "value"
                        ])(eventArgs[0]);
                      }}
                      placeholder={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__szBzu
                          )}
                        >
                          {"Pick Color"}
                        </div>
                      }
                      value={p.generateStateValueProp($state, [
                        "select",
                        "value"
                      ])}
                    >
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option___38Naa
                        )}
                        value={"value1"}
                      >
                        <div
                          data-plasmic-name={"hello"}
                          data-plasmic-override={overrides.hello}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.hello
                          )}
                        >
                          {"Shine"}
                        </div>
                      </Select__Option>
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__iDi4S
                        )}
                        value={"value2"}
                      >
                        <div
                          data-plasmic-name={"plus"}
                          data-plasmic-override={overrides.plus}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.plus
                          )}
                        >
                          {"Matte"}
                        </div>
                      </Select__Option>
                    </Select>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___03Ms6
                      )}
                      submitsForm={true}
                    >
                      {"Buy"}
                    </Button>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__n9LHz)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___2Ald3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___7PyJn)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__lWRg)}>
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
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bva2)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___5I9KC)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__uZnGj)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___1Sren)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobile")
                          ? "102px"
                          : "161px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/etopPro2Png.png",
                        fullWidth: 4234,
                        fullHeight: 2481,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__hqEvI)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dUs0
                        )}
                      >
                        {"Device"}
                      </div>
                    </div>
                  </p.Stack>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___6KYqm)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__teXZt)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__reyjq)}
                      displayHeight={"161px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"90px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/usbcCablepng2.png",
                        fullWidth: 580,
                        fullHeight: 1078,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__zoNr3)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oLn9J
                        )}
                      >
                        {"Charging Cable"}
                      </div>
                    </div>
                  </p.Stack>
                </div>
              </p.Stack>
            </p.Stack>
          </p.Stack>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  single: [
    "single",
    "columns",
    "h1",
    "select",
    "hello",
    "plus",
    "h2",
    "footer"
  ],
  columns: ["columns", "h1", "select", "hello", "plus"],
  h1: ["h1"],
  select: ["select", "hello", "plus"],
  hello: ["hello"],
  plus: ["plus"],
  h2: ["h2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  single: "div";
  columns: "div";
  h1: "h1";
  select: typeof Select;
  hello: "div";
  plus: "div";
  h2: "h2";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEtoppro2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEtoppro2__VariantsArgs;
    args?: PlasmicEtoppro2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEtoppro2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEtoppro2__ArgsType,
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
          internalArgPropNames: PlasmicEtoppro2__ArgProps,
          internalVariantPropNames: PlasmicEtoppro2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEtoppro2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicEtoppro2";
  } else {
    func.displayName = `PlasmicEtoppro2.${nodeName}`;
  }
  return func;
}

export const PlasmicEtoppro2 = Object.assign(
  // Top-level PlasmicEtoppro2 renders the root element
  makeNodeComponent("single"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    select: makeNodeComponent("select"),
    hello: makeNodeComponent("hello"),
    plus: makeNodeComponent("plus"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicEtoppro2
    internalVariantProps: PlasmicEtoppro2__VariantProps,
    internalArgProps: PlasmicEtoppro2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - eTop Pro",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEtoppro2;
/* prettier-ignore-end */
