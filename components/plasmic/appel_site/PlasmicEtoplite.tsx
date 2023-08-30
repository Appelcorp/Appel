// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: QEUPU6plyBN

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
import sty from "./PlasmicEtoplite.module.css"; // plasmic-import: QEUPU6plyBN/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicEtoplite__VariantMembers = {};
export type PlasmicEtoplite__VariantsArgs = {};
type VariantPropType = keyof PlasmicEtoplite__VariantsArgs;
export const PlasmicEtoplite__VariantProps = new Array<VariantPropType>();

export type PlasmicEtoplite__ArgsType = {};
type ArgPropType = keyof PlasmicEtoplite__ArgsType;
export const PlasmicEtoplite__ArgProps = new Array<ArgPropType>();

export type PlasmicEtoplite__OverridesType = {
  single?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  select?: p.Flex<typeof Select>;
  hello?: p.Flex<"div">;
  plus?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultEtopliteProps {}

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

function PlasmicEtoplite__RenderFunc(props: {
  variants: PlasmicEtoplite__VariantsArgs;
  args: PlasmicEtoplite__ArgsType;
  overrides: PlasmicEtoplite__OverridesType;
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
        <title key="title">{PlasmicEtoplite.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicEtoplite.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicEtoplite.pageMetadata.title}
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
              className={classNames(projectcss.all, sty.freeBox__pswem)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ljpux)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__fftGl
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </p.PlasmicLink>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__aJkxl)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__wxAtt
                      )}
                    >
                      {"Sign up"}
                    </button>
                    {true ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___92KG
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__jD0B1
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__fcosy
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
                            sty.text__ghHi3
                          )}
                        >
                          {"Log in"}
                        </div>
                      </Button>
                    ) : null}
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg___3X4Zb)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ucu9F)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__y181P)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___4WbKs
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
                  className={classNames(projectcss.all, sty.freeBox__dFtzr)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__cmohO)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__lj8Pe)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__zls3Z)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___91Ro0
                      )}
                    >
                      {"Store"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__iGWno)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___0BNc8)}
                        role={"img"}
                      />
                    }
                    link={`/shop/appel`}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___1HoHs)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__obsWc
                      )}
                    >
                      {"Appel"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__ns305)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__ceYqU)}
                        role={"img"}
                      />
                    }
                    link={`/shop/epad`}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__isv8)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5NZ9I
                      )}
                    >
                      {"ePad"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__mfCe)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__xDKs)}
                        role={"img"}
                      />
                    }
                    link={`/shop/etop`}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__evF7)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__c4Mwn
                      )}
                    >
                      {"eTop"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__t6NkD)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__jCx9)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__uwERg)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3FLtf
                      )}
                    >
                      {"eMax"}
                    </div>
                  </Button>
                  {(
                    hasVariant(globalVariants, "screen", "mobile") ? true : true
                  ) ? (
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__vL40K
                      )}
                      color={"clear" as const}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__nSUe6)}
                          role={"img"}
                        />
                      }
                      link={`/login`}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__qOoKu)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___2Lsdz
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  ) : null}
                  <Button
                    className={classNames("__wab_instance", sty.button__kFrjS)}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___8A0Rl)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___4Ts0G)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qbBn
                      )}
                    >
                      {"Sign up"}
                    </div>
                  </Button>
                </p.Stack>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__beYqb)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__td5P
                      )}
                    >
                      {"Sign up"}
                    </button>
                    {true ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__qRQh
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__fzY49
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__cudAn
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
                            sty.text___7Gofx
                          )}
                        >
                          {"Log in"}
                        </div>
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </p.Stack>
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hS2J)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__bCnfd)}>
                <div
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__ylgoE)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__pNqab)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"539px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/appel_site/images/etopLitepng.png",
                        fullWidth: 2117,
                        fullHeight: 1240,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__rx9Qh)}
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
                      {"eTop Lite"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__g5B3
                      )}
                    >
                      {"From $999 or\n $41.63/mo for 24 mo."}
                    </div>
                    {(
                      hasVariant(globalVariants, "screen", "mobile")
                        ? true
                        : true
                    ) ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___2Uko
                        )}
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
                                sty.text__zXtS5
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
                              sty.option__vGcnq
                            )}
                            value={"value1" as const}
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
                              sty.option__b8Tvt
                            )}
                            value={"value2" as const}
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
                            sty.button__t4DpK
                          )}
                          submitsForm={true}
                        >
                          {"Buy"}
                        </Button>
                      </p.Stack>
                    ) : null}
                  </p.Stack>
                </div>
              </div>
            </p.Stack>
          ) : null}
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___5D2C)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__egM93)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__faF6B)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__eWevc)}>
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
                className={classNames(projectcss.all, sty.freeBox___1MJx9)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__b5ItQ)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jZM5)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__tYeEe)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobile")
                          ? ("102px" as const)
                          : ("161px" as const)
                      }
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/appel_site/images/etopLitepng.png",
                        fullWidth: 2117,
                        fullHeight: 1240,
                        aspectRatio: undefined
                      }}
                    />

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__afhor
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__llhFb
                          )}
                        >
                          {"Device"}
                        </div>
                      </div>
                    ) : null}
                  </p.Stack>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__oPuuz)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__w9PHf)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__vpxqc)}
                      displayHeight={"161px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"90px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/appel_site/images/chargerpng.png",
                        fullWidth: 480,
                        fullHeight: 1124,
                        aspectRatio: undefined
                      }}
                    />

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__bmFsp
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ez38E
                          )}
                        >
                          {"Charging Cable"}
                        </div>
                      </div>
                    ) : null}
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
  PlasmicEtoplite__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEtoplite__VariantsArgs;
    args?: PlasmicEtoplite__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEtoplite__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEtoplite__ArgsType,
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
          internalArgPropNames: PlasmicEtoplite__ArgProps,
          internalVariantPropNames: PlasmicEtoplite__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEtoplite__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicEtoplite";
  } else {
    func.displayName = `PlasmicEtoplite.${nodeName}`;
  }
  return func;
}

export const PlasmicEtoplite = Object.assign(
  // Top-level PlasmicEtoplite renders the root element
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

    // Metadata about props expected for PlasmicEtoplite
    internalVariantProps: PlasmicEtoplite__VariantProps,
    internalArgProps: PlasmicEtoplite__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - eTop",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEtoplite;
/* prettier-ignore-end */