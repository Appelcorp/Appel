import * as React from "react";
import {
  PlasmicSelect2,
  DefaultSelect2Props
} from "./plasmic/appel_site/PlasmicSelect2";

import { SelectRef } from "@plasmicapp/react-web";
import Select2__Option from "./Select2__Option";
import Select2__OptionGroup from "./Select2__OptionGroup";

export interface Select2Props extends DefaultSelect2Props {
  // Feel free to add any additional props that this component should receive
}
function Select2_(props: Select2Props, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicSelect2.useBehavior(props, ref);
  return <PlasmicSelect2 {...plasmicProps} />;
}

const Select2 = React.forwardRef(Select2_);

export default Object.assign(
  Select2,

  {
    Option: Select2__Option,
    OptionGroup: Select2__OptionGroup,
    __plumeType: "select"
  }
);
