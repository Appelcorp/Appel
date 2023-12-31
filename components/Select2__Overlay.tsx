import * as React from "react";
import {
  PlasmicSelect2__Overlay,
  DefaultSelect2__OverlayProps
} from "./plasmic/appel_site/PlasmicSelect2__Overlay";

import { TriggeredOverlayRef } from "@plasmicapp/react-web";

export interface Select2__OverlayProps extends DefaultSelect2__OverlayProps {
  // Feel free to add any additional props that this component should receive
}
function Select2__Overlay_(
  props: Select2__OverlayProps,
  ref: TriggeredOverlayRef
) {
  const { plasmicProps } = PlasmicSelect2__Overlay.useBehavior(props, ref);
  return <PlasmicSelect2__Overlay {...plasmicProps} />;
}

const Select2__Overlay = React.forwardRef(Select2__Overlay_);

export default Object.assign(Select2__Overlay, {
  __plumeType: "triggered-overlay"
});
