import * as React from "react";
import {
  PlasmicSelect2__OptionGroup,
  DefaultSelect2__OptionGroupProps
} from "./plasmic/appel_site/PlasmicSelect2__OptionGroup";

export interface Select2__OptionGroupProps
  extends DefaultSelect2__OptionGroupProps {
  // Feel free to add any additional props that this component should receive
}
function Select2__OptionGroup(props: Select2__OptionGroupProps) {
  const { plasmicProps } = PlasmicSelect2__OptionGroup.useBehavior(props);
  return <PlasmicSelect2__OptionGroup {...plasmicProps} />;
}

export default Object.assign(
  Select2__OptionGroup,

  {
    __plumeType: "select-option-group"
  }
);
