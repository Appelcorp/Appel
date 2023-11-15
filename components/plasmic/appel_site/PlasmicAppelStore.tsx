// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wBRmoS7Qf8danpDnoXZLVz
// Component: fOSuQpZqxl

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
import Footer from "../../Footer"; // plasmic-import: O8jRJZzkmVNu/component

import { useScreenVariants as useScreenVariantseH80Ck18IRB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -eH80ck18iR_B/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_appel_site.module.css"; // plasmic-import: wBRmoS7Qf8danpDnoXZLVz/projectcss
import sty from "./PlasmicAppelStore.module.css"; // plasmic-import: fOSuQpZqxl/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nWUWSgWJ4hmrU/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: tjW8u0N4RQb/icon
import Appel1Svg2Icon from "./icons/PlasmicIcon__Appel1Svg2"; // plasmic-import: gBVsTHBahp/icon
import Appel2ProAndRegsvg2Icon from "./icons/PlasmicIcon__Appel2ProAndRegsvg2"; // plasmic-import: NvKwx_b9Y/icon
import Appellitesvg2Icon from "./icons/PlasmicIcon__Appellitesvg2"; // plasmic-import: KOQRl1mc7d/icon
import Comparesvg2Icon from "./icons/PlasmicIcon__Comparesvg2"; // plasmic-import: PKKaeI26jF/icon
import Emaxlite2SvgIcon from "./icons/PlasmicIcon__Emaxlite2Svg"; // plasmic-import: dsOT3dlAx5oW/icon
import Group20Svg2Icon from "./icons/PlasmicIcon__Group20Svg2"; // plasmic-import: V_5h_74dcu/icon
import Stuffsvg2Icon from "./icons/PlasmicIcon__Stuffsvg2"; // plasmic-import: 946drNMN0qzF/icon
import CardsvgIcon from "./icons/PlasmicIcon__Cardsvg"; // plasmic-import: GBeGc91B0z/icon
import Group21SvgIcon from "./icons/PlasmicIcon__Group21Svg"; // plasmic-import: dON5qOa0yP/icon
import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: 4ZVpxMLEvcR9y/icon

createPlasmicElementProxy;

export type PlasmicAppelStore__VariantMembers = {};
export type PlasmicAppelStore__VariantsArgs = {};
type VariantPropType = keyof PlasmicAppelStore__VariantsArgs;
export const PlasmicAppelStore__VariantProps = new Array<VariantPropType>();

export type PlasmicAppelStore__ArgsType = {};
type ArgPropType = keyof PlasmicAppelStore__ArgsType;
export const PlasmicAppelStore__ArgProps = new Array<ArgPropType>();

export type PlasmicAppelStore__OverridesType = {
  root?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultAppelStoreProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppelStore__RenderFunc(props: {
  variants: PlasmicAppelStore__VariantsArgs;
  args: PlasmicAppelStore__ArgsType;
  overrides: PlasmicAppelStore__OverridesType;
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
        <title key="title">{PlasmicAppelStore.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAppelStore.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAppelStore.pageMetadata.title}
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
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__meuFg)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fdJz)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__d1Hhl
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
                className={classNames(projectcss.all, sty.freeBox__g5WMe)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button___8Vq3H)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__f84N)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__hpjCc)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2ApJn
                    )}
                  >
                    {"Store"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__sXdqF)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__m41Fw)}
                      role={"img"}
                    />
                  }
                  link={`/shop/appel`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__i4Nh)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3URuy
                    )}
                  >
                    {"Appel"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__s1Cy6)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__jaXf0)}
                      role={"img"}
                    />
                  }
                  link={`/shop/epad`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__yyiGa)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__o5PyS
                    )}
                  >
                    {"ePad"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__r5Zr9)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__sPtbG)}
                      role={"img"}
                    />
                  }
                  link={`/shop/etop`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___55L)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1Csq
                    )}
                  >
                    {"eTop"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__uZCn)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__dYf0)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___1ByRd)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__n63VC
                    )}
                  >
                    {"InVision"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___78TpN)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__sfbbe)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__dKdB)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aHeD
                    )}
                  >
                    {"eMax"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__tosa6)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__kaJMc)}
                      role={"img"}
                    />
                  }
                  link={`/login`}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__lK5Zn)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aaAVl
                    )}
                  >
                    {"Log in"}
                  </div>
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__pbDz)}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__pIgBf)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__whEeB)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wpHbz
                    )}
                  >
                    {"Sign up"}
                  </div>
                </Button>
              </p.Stack>
              {false ? (
                <div className={classNames(projectcss.all, sty.freeBox__vCqma)}>
                  <button
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.button__xgRr3
                    )}
                  >
                    {"Sign up"}
                  </button>
                  <Button
                    className={classNames("__wab_instance", sty.button__pcQWg)}
                    color={"clear"}
                    endIcon={
                      <Icon38Icon
                        className={classNames(projectcss.all, sty.svg___3AW9)}
                        role={"img"}
                      />
                    }
                    startIcon={
                      <ChecksvgIcon
                        className={classNames(projectcss.all, sty.svg__drG9T)}
                        role={"img"}
                      />
                    }
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ek2Mi
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
            className={classNames(projectcss.all, sty.freeBox___55Pf2)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__km9UG)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__do4WX)}>
                <Appel1Svg2Icon
                  className={classNames(projectcss.all, sty.svg__xvc2Q)}
                  role={"img"}
                />

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__viG6S
                  )}
                  component={Link}
                  href={`/shop/appel/appel-3-pro`}
                  platform={"nextjs"}
                >
                  {"Appel 3 Pro"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__aglo2
                  )}
                  component={Link}
                  href={`/shop/appel/appel-3-pro`}
                  platform={"nextjs"}
                >
                  {"New"}
                </p.PlasmicLink>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__aZap2)}>
                <Appel1Svg2Icon
                  className={classNames(projectcss.all, sty.svg__dGGo)}
                  role={"img"}
                />

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__lp0In
                  )}
                  component={Link}
                  href={`/shop/appel/appel-3`}
                  platform={"nextjs"}
                >
                  {"Appel 3"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__cgLaw
                  )}
                  component={Link}
                  href={`/shop/appel/appel-3`}
                  platform={"nextjs"}
                >
                  {"New"}
                </p.PlasmicLink>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__hUNzw)}>
                <Appel2ProAndRegsvg2Icon
                  className={classNames(projectcss.all, sty.svg__iuRz5)}
                  role={"img"}
                />

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__k0Htn
                  )}
                  component={Link}
                  href={`/shop/appel/appel-2`}
                  platform={"nextjs"}
                >
                  {"Appel 2"}
                </p.PlasmicLink>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__sAmbw)}>
                <Appellitesvg2Icon
                  className={classNames(projectcss.all, sty.svg__hzClM)}
                  role={"img"}
                />

                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ldjTl
                  )}
                  component={Link}
                  href={`/shop/appel/appel-2-lite`}
                  platform={"nextjs"}
                >
                  {"Appel 2 Lite"}
                </p.PlasmicLink>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__ersp)}>
                <Comparesvg2Icon
                  className={classNames(projectcss.all, sty.svg__tF7Pa)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6LCns
                  )}
                >
                  {"Compare"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__hVdY9)}>
                <Emaxlite2SvgIcon
                  className={classNames(projectcss.all, sty.svg__meTje)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6Yv3T
                  )}
                >
                  {"eMax Lite 2"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4ZzNk
                  )}
                >
                  {"New"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__spxRr)}>
                <Group20Svg2Icon
                  className={classNames(projectcss.all, sty.svg__xf1Wd)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6LtDp
                  )}
                >
                  {"Findr"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__fTFi)}>
                <Stuffsvg2Icon
                  className={classNames(projectcss.all, sty.svg___3WQtx)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rl1Tu
                  )}
                >
                  {"Accessories"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__wm6Jd)}>
                <CardsvgIcon
                  className={classNames(projectcss.all, sty.svg__ixCqN)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ylpfV
                  )}
                >
                  {"eCard"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__mq239)}>
                <Group21SvgIcon
                  className={classNames(projectcss.all, sty.svg__rBqj6)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pyUdC
                  )}
                >
                  {"eOS 15"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wkHtm
                  )}
                >
                  {"Preview"}
                </div>
              </div>
            </p.Stack>
          </p.Stack>
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vdRy2)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__njeEn)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__kfs8A
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  {"\u212e"}
                </p.PlasmicLink>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__evlZf)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__ahvEe
                      )}
                    >
                      {"Sign up"}
                    </button>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__zDh1P
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__osKA)}
                          role={"img"}
                        />
                      }
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__dxKwu)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__t2L5J
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button>
                  </div>
                ) : null}
                <BarsIcon
                  className={classNames(projectcss.all, sty.svg__j0RrR)}
                  role={"img"}
                />
              </p.Stack>
            </p.Stack>
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__yFyen)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__aPpcU)}
              >
                <svg
                  className={classNames(projectcss.all, sty.svg___9SJg2)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg___58Toc)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__kltqC)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__sYbCn)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__n1Kyy)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg___9QjWd)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__roOj9)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__nusrp)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__pDpXp)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__kXc6R)}
                  role={"img"}
                />

                <svg
                  className={classNames(projectcss.all, sty.svg__fRoVn)}
                  role={"img"}
                />
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__k5Ef)}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__niZll
                  )}
                  component={Link}
                  href={`/shop/appel/appel-3-pro`}
                  platform={"nextjs"}
                >
                  {"Appel 2 Pro"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___7ZZJe
                  )}
                  component={Link}
                  href={`/shop/appel/appel-2`}
                  platform={"nextjs"}
                >
                  {"Appel 2"}
                </p.PlasmicLink>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zpWu6
                  )}
                >
                  {"Appel 1"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__chpH9
                  )}
                >
                  {"Appel Lite"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mtrtn
                  )}
                >
                  {"Compare"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fQahW
                  )}
                >
                  {"eMax Lite"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qrJt8
                  )}
                >
                  {"Findr"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4VvLk
                  )}
                >
                  {"Accessories"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jz4RU
                  )}
                >
                  {"eCard"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__o9Eg
                  )}
                >
                  {"eOS 14"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dmY5S
                  )}
                >
                  {"Shop Appel"}
                </div>
              </p.Stack>
            </p.Stack>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__a05ND)}>
            <div className={classNames(projectcss.all, sty.freeBox__v7NGq)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__t7C53)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__k6V2)}>
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__ucY4O
                    )}
                  >
                    {"Appel 3"}
                  </h1>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__o1Ecw)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__h1Vxs)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__f0Po
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "From $29.13/mo. for 24 mo. or $699 before trade in"
                        : "From $29.13/mo. for 24 mo. or $699 before trade in"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qjQg
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Simply Beautiful."
                        : "Design Meets Diversity"}
                    </div>
                  </div>
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__qCqDq)}
                  color={"blue"}
                  link={`/shop/appel/appel-3`}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d8RQh
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Buy Now"
                      : "BUY NOW"}
                  </div>
                </Button>
              </p.Stack>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__xuLz)}>
            <div className={classNames(projectcss.all, sty.freeBox__dRfVv)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___9Smf3)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__ojmAp)}>
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__rx2Kj
                    )}
                  >
                    {"Appel 3 Pro"}
                  </h1>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__xvT0X)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__iOv7)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yDvC8
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "From $41.63/mo. for 24 mo. or $999 before trade in"
                        : "From $41.63/mo. for 24 mo. or $999 before trade in"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__smRk6
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobile")
                        ? "Pro Power. Pro Capabilities."
                        : "Luxury Meets Precision"}
                    </div>
                  </div>
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__mQpDs)}
                  color={"blue"}
                  link={`/shop/appel/appel-3-pro`}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bufdO
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Buy Now"
                      : "BUY NOW"}
                  </div>
                </Button>
              </p.Stack>
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
  root: ["root", "footer"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppelStore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppelStore__VariantsArgs;
    args?: PlasmicAppelStore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppelStore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppelStore__ArgsType,
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
          internalArgPropNames: PlasmicAppelStore__ArgProps,
          internalVariantPropNames: PlasmicAppelStore__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppelStore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAppelStore";
  } else {
    func.displayName = `PlasmicAppelStore.${nodeName}`;
  }
  return func;
}

export const PlasmicAppelStore = Object.assign(
  // Top-level PlasmicAppelStore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAppelStore
    internalVariantProps: PlasmicAppelStore__VariantProps,
    internalArgProps: PlasmicAppelStore__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Appel - Appel",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAppelStore;
/* prettier-ignore-end */
