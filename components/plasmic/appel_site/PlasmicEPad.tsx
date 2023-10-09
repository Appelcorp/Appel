// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: PwKnXt-oGIm

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
import sty from "./PlasmicEPad.module.css"; // plasmic-import: PwKnXt-oGIm/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicEPad__VariantMembers = {};
export type PlasmicEPad__VariantsArgs = {};
type VariantPropType = keyof PlasmicEPad__VariantsArgs;
export const PlasmicEPad__VariantProps = new Array<VariantPropType>();

export type PlasmicEPad__ArgsType = {};
type ArgPropType = keyof PlasmicEPad__ArgsType;
export const PlasmicEPad__ArgProps = new Array<ArgPropType>();

export type PlasmicEPad__OverridesType = {
  single?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  select?: p.Flex<typeof Select>;
  hello?: p.Flex<"div">;
  plus?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultEPadProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEPad__RenderFunc(props: {
  variants: PlasmicEPad__VariantsArgs;
  args: PlasmicEPad__ArgsType;
  overrides: PlasmicEPad__OverridesType;
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
        <title key="title">{PlasmicEPad.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicEPad.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicEPad.pageMetadata.title}
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
              className={classNames(projectcss.all, sty.freeBox__oCm2U)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lR6Qt)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__kkI4
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </p.PlasmicLink>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ikKbH)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__e4Thk
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__a2S60
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__wj1Cc)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__rrt3Z)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__y7AZc
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__eXvyV)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          ) : null}
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___85Kgh)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__d2NdE)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__i8ILo
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
                className={classNames(projectcss.all, sty.freeBox___8WSur)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__hzpdz)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__c3Cs)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___2NsrR)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rix4W
                    )}
                  >
                    {"Store"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__tMgdS)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__dgqzM)}
                      role={"img"}
                    />
                  }
                  link={`/shop/appel`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___2OHsi)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__y9Zbk
                    )}
                  >
                    {"Appel"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__bWrd)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__oWww)}
                      role={"img"}
                    />
                  }
                  link={`/shop/epad`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__euNjU)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0E3H2
                    )}
                  >
                    {"ePad"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__yOnT6)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__lxw6C)}
                      role={"img"}
                    />
                  }
                  link={`/shop/etop`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__zVwf3)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rXOF
                    )}
                  >
                    {"eTop"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__sAv3K)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__sILk)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__c98EX)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hvGtq
                    )}
                  >
                    {"InVision"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__wrnre)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___44CPx)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__q1Ey3)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hElQk
                    )}
                  >
                    {"eMax"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___2HS6V)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___87KaT)}
                      role={"img"}
                    />
                  }
                  link={`/login`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__eoOz4)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jisEc
                    )}
                  >
                    {"Log in"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__icLB)}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___1THc)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__zFvx)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bepDi
                    )}
                  >
                    {"Sign up"}
                  </div>
                </Button>
              </p.Stack>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__fy0Fq)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__eCgOr
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button
                    className={classNames("__wab_instance", sty.button__eHrf)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__zUrSk)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__rSqgl)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r2GTd
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
            className={classNames(projectcss.all, sty.freeBox__yxiax)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__sYd5P)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column___2VquC)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__s50Js)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"206px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/appel_site/images/elpadBackpng.png",
                      fullWidth: 4209,
                      fullHeight: 5769,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__oh0Yy)}
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
                    {"ePad"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3N2Dg
                    )}
                  >
                    {"From $699 or\n $29.13/mo for 24 mo."}
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__rFzcB)}
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
                      placeholder={"Pick Model"}
                      value={p.generateStateValueProp($state, [
                        "select",
                        "value"
                      ])}
                    >
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__ywkXa
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
                          {"Pro"}
                        </div>
                      </Select__Option>
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__ndBst
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
                          {"Option 2"}
                        </div>
                      </Select__Option>
                    </Select>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__c0L7Q
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
            className={classNames(projectcss.all, sty.freeBox__hVpuY)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nsnfN)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uMcS)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__gi2Ei)}>
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
                className={classNames(projectcss.all, sty.freeBox___35CXo)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__yaFfj)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xqDtg)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__u71JX)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"119px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/elpadBackpng.png",
                        fullWidth: 4209,
                        fullHeight: 5769,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__ybIm1)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___4Lwd3
                        )}
                      >
                        {"Device"}
                      </div>
                    </div>
                  </p.Stack>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__xoOd)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___912YW)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__ws9Vl)}
                      displayHeight={"161px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"90px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/chargerpng.png",
                        fullWidth: 480,
                        fullHeight: 1124,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__qwmKo)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bbgn
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
  PlasmicEPad__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEPad__VariantsArgs;
    args?: PlasmicEPad__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEPad__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEPad__ArgsType,
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
          internalArgPropNames: PlasmicEPad__ArgProps,
          internalVariantPropNames: PlasmicEPad__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEPad__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicEPad";
  } else {
    func.displayName = `PlasmicEPad.${nodeName}`;
  }
  return func;
}

export const PlasmicEPad = Object.assign(
  // Top-level PlasmicEPad renders the root element
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

    // Metadata about props expected for PlasmicEPad
    internalVariantProps: PlasmicEPad__VariantProps,
    internalArgProps: PlasmicEPad__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - ePad",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEPad;
/* prettier-ignore-end */
