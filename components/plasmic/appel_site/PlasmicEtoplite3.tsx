// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: ODCRtGAk6YgZ

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
import Select from "../../Select"; // plasmic-import: NNJmEAQECZJ/component
import Select__Option from "../../Select__Option"; // plasmic-import: hjMs8PXBOz6/component
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicEtoplite3.module.css"; // plasmic-import: ODCRtGAk6YgZ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicEtoplite3__VariantMembers = {};
export type PlasmicEtoplite3__VariantsArgs = {};
type VariantPropType = keyof PlasmicEtoplite3__VariantsArgs;
export const PlasmicEtoplite3__VariantProps = new Array<VariantPropType>();

export type PlasmicEtoplite3__ArgsType = {};
type ArgPropType = keyof PlasmicEtoplite3__ArgsType;
export const PlasmicEtoplite3__ArgProps = new Array<ArgPropType>();

export type PlasmicEtoplite3__OverridesType = {
  single?: Flex__<"div">;
  heade?: Flex__<typeof Heade>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  columns?: Flex__<"div">;
  h1?: Flex__<"h1">;
  select?: Flex__<typeof Select>;
  hello?: Flex__<"div">;
  plus?: Flex__<"div">;
  plus2?: Flex__<"div">;
  h2?: Flex__<"h2">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultEtoplite3Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEtoplite3__RenderFunc(props: {
  variants: PlasmicEtoplite3__VariantsArgs;
  args: PlasmicEtoplite3__ArgsType;
  overrides: PlasmicEtoplite3__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
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
  const $state = useDollarState(stateSpecs, {
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
        <title key="title">{PlasmicEtoplite3.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicEtoplite3.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicEtoplite3.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
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
          <Heade
            data-plasmic-name={"heade"}
            data-plasmic-override={overrides.heade}
            className={classNames("__wab_instance", sty.heade)}
          />

          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___35Zg8)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kuoRf)}
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
                  <div
                    className={classNames(projectcss.all, sty.freeBox___4YeDb)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__vLbh
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__ughb8
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__q0A8X)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__pC3JS)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__amv3N
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__r8Vv)}
                  role={"img"}
                />
              </Stack__>
            </Stack__>
          ) : null}
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qLf)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___88Upw)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column___5JN1R)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__sBq6)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"539px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/appel_site/images/etopLite3Png.png",
                      fullWidth: 8468,
                      fullHeight: 4962,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__cunsl)}
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
                    {"eTop Lite 3"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vkwwQ
                    )}
                  >
                    {"From $999 or\n $41.63/mo for 24 mo."}
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dnxLp)}
                  >
                    <Select
                      data-plasmic-name={"select"}
                      data-plasmic-override={overrides.select}
                      className={classNames("__wab_instance", sty.select)}
                      onChange={(...eventArgs) => {
                        generateStateOnChangeProp($state, ["select", "value"])(
                          eventArgs[0]
                        );
                      }}
                      placeholder={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__cUkrr
                          )}
                        >
                          {"Pick Color"}
                        </div>
                      }
                      value={generateStateValueProp($state, [
                        "select",
                        "value"
                      ])}
                    >
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__qLg0
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
                          sty.option__nqytA
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
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__yxhx
                        )}
                        value={"value3"}
                      >
                        <div
                          data-plasmic-name={"plus2"}
                          data-plasmic-override={overrides.plus2}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.plus2
                          )}
                        >
                          {"Navy"}
                        </div>
                      </Select__Option>
                    </Select>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___1ZzXr
                      )}
                      submitsForm={true}
                    >
                      {"Pre Order"}
                    </Button>
                  </Stack__>
                </Stack__>
              </div>
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bXp2E)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eTvJz)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dpFug)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__t9B9C)}>
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
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__klTa4)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__xwaVy)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___3BvLu)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___1XFr)}
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
                        src: "/plasmic/appel_site/images/etopLite3Png.png",
                        fullWidth: 8468,
                        fullHeight: 4962,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__c0G4P)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eIOnG
                        )}
                      >
                        {"Device"}
                      </div>
                    </div>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__cIIr)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__tsdnz)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__faPnY)}
                      displayHeight={"161px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"90px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/appel_site/images/charger2Png.png",
                        fullWidth: 480,
                        fullHeight: 1124,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__eMj9M)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hHmz
                        )}
                      >
                        {"Charging Cable"}
                      </div>
                    </div>
                  </Stack__>
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  single: [
    "single",
    "heade",
    "link",
    "columns",
    "h1",
    "select",
    "hello",
    "plus",
    "plus2",
    "h2",
    "footer"
  ],
  heade: ["heade"],
  link: ["link"],
  columns: ["columns", "h1", "select", "hello", "plus", "plus2"],
  h1: ["h1"],
  select: ["select", "hello", "plus", "plus2"],
  hello: ["hello"],
  plus: ["plus"],
  plus2: ["plus2"],
  h2: ["h2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  single: "div";
  heade: typeof Heade;
  link: "a";
  columns: "div";
  h1: "h1";
  select: typeof Select;
  hello: "div";
  plus: "div";
  plus2: "div";
  h2: "h2";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEtoplite3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEtoplite3__VariantsArgs;
    args?: PlasmicEtoplite3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEtoplite3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEtoplite3__ArgsType,
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
          internalArgPropNames: PlasmicEtoplite3__ArgProps,
          internalVariantPropNames: PlasmicEtoplite3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEtoplite3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "single") {
    func.displayName = "PlasmicEtoplite3";
  } else {
    func.displayName = `PlasmicEtoplite3.${nodeName}`;
  }
  return func;
}

export const PlasmicEtoplite3 = Object.assign(
  // Top-level PlasmicEtoplite3 renders the root element
  makeNodeComponent("single"),
  {
    // Helper components rendering sub-elements
    heade: makeNodeComponent("heade"),
    link: makeNodeComponent("link"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    select: makeNodeComponent("select"),
    hello: makeNodeComponent("hello"),
    plus: makeNodeComponent("plus"),
    plus2: makeNodeComponent("plus2"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicEtoplite3
    internalVariantProps: PlasmicEtoplite3__VariantProps,
    internalArgProps: PlasmicEtoplite3__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - eTop Lite 3",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEtoplite3;
/* prettier-ignore-end */