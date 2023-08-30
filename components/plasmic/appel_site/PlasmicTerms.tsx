// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: 1ltfeGk7Pv

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

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicTerms.module.css"; // plasmic-import: 1ltfeGk7Pv/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicTerms__VariantMembers = {};
export type PlasmicTerms__VariantsArgs = {};
type VariantPropType = keyof PlasmicTerms__VariantsArgs;
export const PlasmicTerms__VariantProps = new Array<VariantPropType>();

export type PlasmicTerms__ArgsType = {};
type ArgPropType = keyof PlasmicTerms__ArgsType;
export const PlasmicTerms__ArgProps = new Array<ArgPropType>();

export type PlasmicTerms__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTermsProps {}

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

function PlasmicTerms__RenderFunc(props: {
  variants: PlasmicTerms__VariantsArgs;
  args: PlasmicTerms__ArgsType;
  overrides: PlasmicTerms__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantseH80Ck18IRB()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicTerms.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicTerms.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicTerms.pageMetadata.title}
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
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
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
            sty.root
          )}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__thSg0)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : false
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__nMAzO)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__npqBm)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__j00Kh
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
                          sty.freeBox__p95K0
                        )}
                      >
                        <button
                          className={classNames(
                            projectcss.all,
                            projectcss.button,
                            projectcss.__wab_text,
                            sty.button__rElBd
                          )}
                        >
                          {"Sign up"}
                        </button>
                        {true ? (
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__y4KjW
                            )}
                            color={"clear" as const}
                            endIcon={
                              <Icon38Icon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg___9Plz1
                                )}
                                role={"img"}
                              />
                            }
                            startIcon={
                              <ChecksvgIcon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg___7SB5B
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
                                sty.text__mcc1X
                              )}
                            >
                              {"Log in"}
                            </div>
                          </Button>
                        ) : null}
                      </div>
                    ) : null}
                    <BarsIcon
                      className={classNames(projectcss.all, sty.svg__tkTyf)}
                      role={"img"}
                    />
                  </p.Stack>
                </p.Stack>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__cNdL2)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__bI6EX)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__dHlv
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
                      className={classNames(projectcss.all, sty.freeBox__mch7B)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__y0IN6
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__z41Eh
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__vpOac
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
                            sty.text__xgYfj
                          )}
                        >
                          {"Store"}
                        </div>
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___9LxIp
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg___1TbYq
                            )}
                            role={"img"}
                          />
                        }
                        link={`/shop/appel`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__y9Jnf
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
                            sty.text___6ZaCn
                          )}
                        >
                          {"Appel"}
                        </div>
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__nucTk
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ohlW
                            )}
                            role={"img"}
                          />
                        }
                        link={`/shop/epad`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__krdbN
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
                            sty.text__r8WE
                          )}
                        >
                          {"ePad"}
                        </div>
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__pKvEu
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__ys0TE
                            )}
                            role={"img"}
                          />
                        }
                        link={`/shop/etop`}
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___9Po1K
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
                            sty.text__b9Ld
                          )}
                        >
                          {"eTop"}
                        </div>
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__joGjH
                        )}
                        color={"clear" as const}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__mUbJn
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__cbuq5
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
                            sty.text__qpoOv
                          )}
                        >
                          {"eMax"}
                        </div>
                      </Button>
                      {(
                        hasVariant(globalVariants, "screen", "mobile")
                          ? true
                          : true
                      ) ? (
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__or8Sc
                          )}
                          color={"clear" as const}
                          endIcon={
                            <Icon38Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__ihplL
                              )}
                              role={"img"}
                            />
                          }
                          link={`/login`}
                          startIcon={
                            <ChecksvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__gNcY
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
                              sty.text__vfiar
                            )}
                          >
                            {"Log in"}
                          </div>
                        </Button>
                      ) : null}
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__n9HoX
                        )}
                        endIcon={
                          <Icon38Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qu0OD
                            )}
                            role={"img"}
                          />
                        }
                        startIcon={
                          <ChecksvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___2ON1I
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
                            sty.text__qyVxl
                          )}
                        >
                          {"Sign up"}
                        </div>
                      </Button>
                    </p.Stack>
                    {false ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__wauj4
                        )}
                      >
                        <button
                          className={classNames(
                            projectcss.all,
                            projectcss.button,
                            projectcss.__wab_text,
                            sty.button__iIawO
                          )}
                        >
                          {"Sign up"}
                        </button>
                        {true ? (
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__xpJj
                            )}
                            color={"clear" as const}
                            endIcon={
                              <Icon38Icon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg___3MzJt
                                )}
                                role={"img"}
                              />
                            }
                            startIcon={
                              <ChecksvgIcon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__iGkUc
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
                                sty.text__tVjNu
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
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fGhL)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__x0SIh)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yPegN)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__n4Vkp)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__uLnng
                        )}
                      >
                        {"Terms & Conditions"}
                      </h2>
                    </div>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__lzcb4)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__dlBlj)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__aRzMt
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__h9O0F
                          )}
                        >
                          {"General"}
                        </h2>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wH9EF
                          )}
                        >
                          {"this is parody, this is not associated with apple"}
                        </div>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTerms__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTerms__VariantsArgs;
    args?: PlasmicTerms__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTerms__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTerms__ArgsType,
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
          internalArgPropNames: PlasmicTerms__ArgProps,
          internalVariantPropNames: PlasmicTerms__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTerms__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTerms";
  } else {
    func.displayName = `PlasmicTerms.${nodeName}`;
  }
  return func;
}

export const PlasmicTerms = Object.assign(
  // Top-level PlasmicTerms renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTerms
    internalVariantProps: PlasmicTerms__VariantProps,
    internalArgProps: PlasmicTerms__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Terms",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTerms;
/* prettier-ignore-end */
