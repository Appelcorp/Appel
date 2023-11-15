// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: aN-YkR2tN53

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
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicAppel3.module.css"; // plasmic-import: aN-YkR2tN53/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicAppel3__VariantMembers = {};
export type PlasmicAppel3__VariantsArgs = {};
type VariantPropType = keyof PlasmicAppel3__VariantsArgs;
export const PlasmicAppel3__VariantProps = new Array<VariantPropType>();

export type PlasmicAppel3__ArgsType = {};
type ArgPropType = keyof PlasmicAppel3__ArgsType;
export const PlasmicAppel3__ArgProps = new Array<ArgPropType>();

export type PlasmicAppel3__OverridesType = {
  single?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  select?: p.Flex<typeof Select>;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultAppel3Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppel3__RenderFunc(props: {
  variants: PlasmicAppel3__VariantsArgs;
  args: PlasmicAppel3__ArgsType;
  overrides: PlasmicAppel3__OverridesType;
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
        <title key="title">{PlasmicAppel3.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAppel3.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAppel3.pageMetadata.title}
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
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ry3Fx)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__l05No)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__zpycD
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
                className={classNames(projectcss.all, sty.freeBox__lQIdp)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__mQx4E)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__grMzb)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__w6Vrn)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mUtoy
                    )}
                  >
                    {"Store"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__vu9FY)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__biCfS)}
                      role={"img"}
                    />
                  }
                  link={`/shop/appel`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__vbjAz)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__humX
                    )}
                  >
                    {"Appel"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__jNo)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___9FBa)}
                      role={"img"}
                    />
                  }
                  link={`/shop/epad`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__jVpSm)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__g8CgA
                    )}
                  >
                    {"ePad"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__rxRfB)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__mncC7)}
                      role={"img"}
                    />
                  }
                  link={`/shop/etop`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__hQa0Z)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p0ApL
                    )}
                  >
                    {"eTop"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___1XsZy)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__bU8J2)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__tqjla)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uSrEy
                    )}
                  >
                    {"InVision"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___0Ubop)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__qQiEr)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__noax7)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yiMuL
                    )}
                  >
                    {"eMax"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__h8Ouy)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__vgPIt)}
                      role={"img"}
                    />
                  }
                  link={`/login`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__zHyR)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kcGdB
                    )}
                  >
                    {"Log in"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__zyMgT)}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg___2A06J)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__d5Ehe)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6ETxm
                    )}
                  >
                    {"Sign up"}
                  </div>
                </Button>
              </p.Stack>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__ukjJv)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__wBiT0
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button
                    className={classNames("__wab_instance", sty.button__geJnV)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__fwxwd)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__rEoBr)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__crz2O
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
            className={classNames(projectcss.all, sty.freeBox__qsaLw)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___5SPuB)}>
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__r7ATb)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__te3Ie)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link___5Oa1I
                      )}
                      component={Link}
                      href={`/`}
                      platform={"nextjs"}
                    >
                      {"\u212e"}
                    </p.PlasmicLink>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xgog4
                        )}
                      >
                        <button
                          className={classNames(
                            projectcss.all,
                            projectcss.button,
                            projectcss.__wab_text,
                            sty.button__uSDsG
                          )}
                        >
                          {"Sign up"}
                        </button>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__lpBlW
                          )}
                          color={"clear"}
                          endIcon={
                            <Icon38Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__jzXXq
                              )}
                              role={"img"}
                            />
                          }
                          startIcon={
                            <ChecksvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___5ApD3
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
                              sty.text__ftDbH
                            )}
                          >
                            {"Log in"}
                          </div>
                        </Button>
                      </div>
                    ) : null}
                    <BarsIcon
                      className={classNames(projectcss.all, sty.svg__a6Jzn)}
                      role={"img"}
                    />
                  </p.Stack>
                </p.Stack>
              ) : null}
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__neRx)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__lrJHr)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/appel_site/images/mainpicpng4.png",
                      fullWidth: 1196,
                      fullHeight: 1614,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__uv8A1)}
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
                    {"Appel 3"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uZpiQ
                    )}
                  >
                    {"From $699 or\n $29.12/mo for 24 mo."}
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__cYYcU)}
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
                      options={(() => {
                        const __composite = [
                          { value: null, label: null },
                          { value: null, label: null },
                          { value: null, label: null, isDisabled: null }
                        ];
                        __composite["0"]["value"] = "Shine";
                        __composite["0"]["label"] = "Shine";
                        __composite["1"]["value"] = "Matte";
                        __composite["1"]["label"] = "Matte";
                        __composite["2"]["value"] = "Gold";
                        __composite["2"]["label"] = "Gold";
                        __composite["2"]["isDisabled"] = false;
                        return __composite;
                      })()}
                      placeholder={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vUoEw
                          )}
                        >
                          {"Pick Color"}
                        </div>
                      }
                      value={p.generateStateValueProp($state, [
                        "select",
                        "value"
                      ])}
                    />

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__dnxSr
                      )}
                      submitsForm={true}
                    >
                      {"BUY NOW"}
                    </Button>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__z8Ql8)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rrI1C)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kw724)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__zskKf)}>
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
                className={classNames(projectcss.all, sty.freeBox__y5E0X)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___7HoTg)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wpfc7)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__qWAaY)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"300px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/allcolorspng.png",
                        fullWidth: 1371,
                        fullHeight: 847,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__gwSni)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__z0RqT
                        )}
                      >
                        {"Device (All Colours Shown)"}
                      </div>
                    </div>
                  </p.Stack>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__qAph)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___6IaE)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___9EbMl)}
                      displayHeight={"180px"}
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
                      className={classNames(projectcss.all, sty.freeBox__x7S1J)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__k2J9I
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
  single: ["single", "columns", "h1", "select", "h2", "footer"],
  columns: ["columns", "h1", "select"],
  h1: ["h1"],
  select: ["select"],
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
  h2: "h2";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppel3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppel3__VariantsArgs;
    args?: PlasmicAppel3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppel3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppel3__ArgsType,
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
          internalArgPropNames: PlasmicAppel3__ArgProps,
          internalVariantPropNames: PlasmicAppel3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppel3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicAppel3";
  } else {
    func.displayName = `PlasmicAppel3.${nodeName}`;
  }
  return func;
}

export const PlasmicAppel3 = Object.assign(
  // Top-level PlasmicAppel3 renders the root element
  makeNodeComponent("single"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    select: makeNodeComponent("select"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAppel3
    internalVariantProps: PlasmicAppel3__VariantProps,
    internalArgProps: PlasmicAppel3__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - Appel Max",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAppel3;
/* prettier-ignore-end */
