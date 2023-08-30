// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: c1ydxW86pPC

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
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicEPadLite.module.css"; // plasmic-import: c1ydxW86pPC/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicEPadLite__VariantMembers = {};
export type PlasmicEPadLite__VariantsArgs = {};
type VariantPropType = keyof PlasmicEPadLite__VariantsArgs;
export const PlasmicEPadLite__VariantProps = new Array<VariantPropType>();

export type PlasmicEPadLite__ArgsType = {};
type ArgPropType = keyof PlasmicEPadLite__ArgsType;
export const PlasmicEPadLite__ArgProps = new Array<ArgPropType>();

export type PlasmicEPadLite__OverridesType = {
  single?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  select?: p.Flex<typeof Select>;
  hello?: p.Flex<"div">;
  plus?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultEPadLiteProps {}

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

function PlasmicEPadLite__RenderFunc(props: {
  variants: PlasmicEPadLite__VariantsArgs;
  args: PlasmicEPadLite__ArgsType;
  overrides: PlasmicEPadLite__OverridesType;
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
        <title key="title">{PlasmicEPadLite.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicEPadLite.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicEPadLite.pageMetadata.title}
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
            sty.single
          )}
        >
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__b4Gdh)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bceA)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__kErY
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </p.PlasmicLink>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__vrNa4)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__wqfRy
                      )}
                    >
                      {"Sign up"}
                    </button>
                    {true ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__jOdh5
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__m2JS
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__sY7Dz
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
                            sty.text__lDZtY
                          )}
                        >
                          {"Log in"}
                        </div>
                      </Button>
                    ) : null}
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg___30D7V)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tK8Z)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___6KyIa)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___6NjRq
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
                  className={classNames(projectcss.all, sty.freeBox__kW48R)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__ggzJk)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__oqbSq)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__phxxH)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pCDqD
                      )}
                    >
                      {"Store"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__sbKxl)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__bw9Lh)}
                        role={"img"}
                      />
                    }
                    link={`/shop/appel`}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__bbMdr)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0XdKb
                      )}
                    >
                      {"Appel"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__vNMl)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__grn2N)}
                        role={"img"}
                      />
                    }
                    link={`/shop/epad`}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___607Af)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__p0ChK
                      )}
                    >
                      {"ePad"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__gpjc8)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__mwSjw)}
                        role={"img"}
                      />
                    }
                    link={`/shop/etop`}
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___5JwYx)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zu3Nd
                      )}
                    >
                      {"eTop"}
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__dRr1V)}
                    color={"clear" as const}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__pbg2B)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg___7V86T)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qnNT
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
                        sty.button___0JvgC
                      )}
                      color={"clear" as const}
                      endIcon={
                        <Icon38Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___4Yml0
                          )}
                          role={"img"}
                        />
                      }
                      link={`/login`}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__qHgEi)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kVcMo
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  ) : null}
                  <Button
                    className={classNames("__wab_instance", sty.button___40Vw2)}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg__odNY)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__dxgFs)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__v8UMe
                      )}
                    >
                      {"Sign up"}
                    </div>
                  </Button>
                </p.Stack>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___7NrD)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button___3LVcG
                      )}
                    >
                      {"Sign up"}
                    </button>
                    {true ? (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__fmpub
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__j4Tb0
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wz5K0
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
                            sty.text__llzxt
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
              className={classNames(projectcss.all, sty.freeBox__x9KYl)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__luY9U)}>
                <div
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__zFhWg)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__wnUko)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"206px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/appel_site/images/caseLitepng.png",
                        fullWidth: 1013,
                        fullHeight: 1403,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__ujptC)}
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
                      {"ePad Lite"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fOfVj
                      )}
                    >
                      {"From $499 or\n $21/mo for 24 mo."}
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
                          sty.freeBox__epkyT
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
                          placeholder={"Pick Model"}
                          value={p.generateStateValueProp($state, [
                            "select",
                            "value"
                          ])}
                        >
                          <Select__Option
                            className={classNames(
                              "__wab_instance",
                              sty.option__afH0E
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
                              {"Pro"}
                            </div>
                          </Select__Option>
                          <Select__Option
                            className={classNames(
                              "__wab_instance",
                              sty.option__iujVp
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
                              {"Option 2"}
                            </div>
                          </Select__Option>
                        </Select>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__tSpa
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
            className={classNames(projectcss.all, sty.freeBox__lIlNc)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___1Y6KW)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__v0FHk)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___0OEAi)}
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
                className={classNames(projectcss.all, sty.freeBox__v4Jx)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__uyCwa)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dZkw8)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__zD1Ia)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"119px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/appel_site/images/caseLitepng.png",
                        fullWidth: 1013,
                        fullHeight: 1403,
                        aspectRatio: undefined
                      }}
                    />

                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___8Niuv
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__lpWJx
                          )}
                        >
                          {"Device"}
                        </div>
                      </div>
                    ) : null}
                  </p.Stack>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___4PQi9)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___47B0V)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___5NLKu)}
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
                          sty.freeBox__lDsxp
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__zZlUq
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
  PlasmicEPadLite__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEPadLite__VariantsArgs;
    args?: PlasmicEPadLite__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEPadLite__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEPadLite__ArgsType,
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
          internalArgPropNames: PlasmicEPadLite__ArgProps,
          internalVariantPropNames: PlasmicEPadLite__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEPadLite__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicEPadLite";
  } else {
    func.displayName = `PlasmicEPadLite.${nodeName}`;
  }
  return func;
}

export const PlasmicEPadLite = Object.assign(
  // Top-level PlasmicEPadLite renders the root element
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

    // Metadata about props expected for PlasmicEPadLite
    internalVariantProps: PlasmicEPadLite__VariantProps,
    internalArgProps: PlasmicEPadLite__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - ePad Lite",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEPadLite;
/* prettier-ignore-end */
