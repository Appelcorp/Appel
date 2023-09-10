// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: c3l9UFt6CiU

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
import sty from "./PlasmicEPadPro.module.css"; // plasmic-import: c3l9UFt6CiU/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicEPadPro__VariantMembers = {};
export type PlasmicEPadPro__VariantsArgs = {};
type VariantPropType = keyof PlasmicEPadPro__VariantsArgs;
export const PlasmicEPadPro__VariantProps = new Array<VariantPropType>();

export type PlasmicEPadPro__ArgsType = {};
type ArgPropType = keyof PlasmicEPadPro__ArgsType;
export const PlasmicEPadPro__ArgProps = new Array<ArgPropType>();

export type PlasmicEPadPro__OverridesType = {
  single?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  select?: p.Flex<typeof Select>;
  hello?: p.Flex<"div">;
  plus?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultEPadProProps {}

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

function PlasmicEPadPro__RenderFunc(props: {
  variants: PlasmicEPadPro__VariantsArgs;
  args: PlasmicEPadPro__ArgsType;
  overrides: PlasmicEPadPro__OverridesType;
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
        <title key="title">{PlasmicEPadPro.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicEPadPro.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicEPadPro.pageMetadata.title}
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
              className={classNames(projectcss.all, sty.freeBox__cey4)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xU4NK)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__e7FnE
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </p.PlasmicLink>
                {false ? (
                  <div className={classNames(projectcss.all, sty.freeBox__dUV)}>
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__p9Mjl
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__yLc2D
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__tLeff)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__yc4Ss)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___1Yh9W
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__zWk6)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          ) : null}
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__r2YHe)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___3Khs)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__h5HOu
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
                className={classNames(projectcss.all, sty.freeBox___1HGq)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__smPrG)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__qt6L)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__aGJnd)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lWrWa
                    )}
                  >
                    {"Store"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__z3M26)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__mRliw)}
                      role={"img"}
                    />
                  }
                  link={`/shop/appel`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__uR7St)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sAnB
                    )}
                  >
                    {"Appel"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__xPlLv)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__co1Ro)}
                      role={"img"}
                    />
                  }
                  link={`/shop/epad`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__d0Nlp)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lPIrS
                    )}
                  >
                    {"ePad"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__mkGi)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___7F8QU)}
                      role={"img"}
                    />
                  }
                  link={`/shop/etop`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__gw91N)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nVs
                    )}
                  >
                    {"eTop"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__nPtMx)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__wRt2)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__eLAl)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eBca
                    )}
                  >
                    {"InVision"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__sUx5A)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__eBsFw)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__uRnzc)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fN02
                    )}
                  >
                    {"eMax"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__juJOt)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___9IIjy)}
                      role={"img"}
                    />
                  }
                  link={`/login`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___81EPc)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__v0Yye
                    )}
                  >
                    {"Log in"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__igRjp)}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__jOuyg)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__xx9Am)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cfUtT
                    )}
                  >
                    {"Sign up"}
                  </div>
                </Button>
              </p.Stack>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__d69C5)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__rYt0E
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button
                    className={classNames("__wab_instance", sty.button__f5J7J)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__zzjA0)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__ozsMj)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0LueT
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
            className={classNames(projectcss.all, sty.freeBox__mg5Ed)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__bKhTq)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__h4Ru)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qjqY6)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"206px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/appel_site/images/casepng.png",
                      fullWidth: 1013,
                      fullHeight: 1403,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__bKhnk)}
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
                    {"ePad Pro"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xGuNf
                    )}
                  >
                    {"From $699 or\n $29.13/mo for 24 mo."}
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__oste)}
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
                          sty.option___8Ivr5
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
                          sty.option__gGg2Z
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
                        sty.button__f1PCw
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
            className={classNames(projectcss.all, sty.freeBox__eTTme)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dmlsZ)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mb1Yr)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___4FoCj)}
                >
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
                className={classNames(projectcss.all, sty.freeBox__fMj4J)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__gNsyX)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__tU9CI)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__yTVk)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"119px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/casepng.png",
                        fullWidth: 1013,
                        fullHeight: 1403,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___66TRm
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___4RDr
                        )}
                      >
                        {"Device"}
                      </div>
                    </div>
                  </p.Stack>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__iRe)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nVobt)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__zAems)}
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
                      className={classNames(projectcss.all, sty.freeBox__rAMxu)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ems09
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
  typeof PlasmicDescendants[T][number];
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
  PlasmicEPadPro__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEPadPro__VariantsArgs;
    args?: PlasmicEPadPro__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEPadPro__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEPadPro__ArgsType,
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
          internalArgPropNames: PlasmicEPadPro__ArgProps,
          internalVariantPropNames: PlasmicEPadPro__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEPadPro__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicEPadPro";
  } else {
    func.displayName = `PlasmicEPadPro.${nodeName}`;
  }
  return func;
}

export const PlasmicEPadPro = Object.assign(
  // Top-level PlasmicEPadPro renders the root element
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

    // Metadata about props expected for PlasmicEPadPro
    internalVariantProps: PlasmicEPadPro__VariantProps,
    internalArgProps: PlasmicEPadPro__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - ePad Pro",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEPadPro;
/* prettier-ignore-end */
