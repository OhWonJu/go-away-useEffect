import React from "react";
import { P, Strong } from "./Callout.styles";

interface CalloutProps {
  mainContent?: string;
  subContent?: string;
}

const Callout: React.FC<CalloutProps> = ({ mainContent, subContent }) => {
  return (
    <div>
      {mainContent && <Strong>{mainContent}</Strong>}
      {subContent && <P>{subContent}</P>}
    </div>
  );
};

export default Callout;
