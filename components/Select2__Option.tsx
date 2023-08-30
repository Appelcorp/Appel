import * as React from "react";
import {
  PlasmicSelect2__Option,
  DefaultSelect2__OptionProps
} from "./plasmic/appel_site/PlasmicSelect2__Option";

import { SelectOptionRef } from "@plasmicapp/react-web";

export interface Select2__OptionProps extends DefaultSelect2__OptionProps {
  // Feel free to add any additional props that this component should receive
}
function Select2__Option_(props: Select2__OptionProps, ref: SelectOptionRef) {
  const { plasmicProps } = PlasmicSelect2__Option.useBehavior(props, ref);
  return <PlasmicSelect2__Option {...plasmicProps} />;
}

const Select2__Option = React.forwardRef(Select2__Option_);

export default Object.assign(
  Select2__Option,

  {
    __plumeType: "select-option"
  }
);
