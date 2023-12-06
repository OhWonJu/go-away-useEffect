import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToggleButtonWrapper, ToggleHandle } from "./ToggleButton.styles";
import useToggle from "../../../lib/client/hooks/useToggle";

interface ToggleButtonProps {
  onFunc: Function;
  offFunc: Function;
  initToggleState?: boolean;
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onFunc,
  offFunc,
  initToggleState = false,
}) => {
  // const [isOn, setIsOn] = useState<boolean>(initToggleState);

  // useEffect(() => {
  //   if (isOn) onFunc();
  //   else offFunc();
  // }, [isOn]);

  // const toggleHandler = () => {
  //   const next = !isOn;
  //   setIsOn(next);
  //   if (next) onFunc();
  //   else offFunc();
  // };

  const [isOn, toggler] = useToggle({
    onFunc,
    offFunc,
    initState: initToggleState,
  });

  return (
    // <ToggleButtonWrapper $isOn={isOn} onClick={() => setIsOn(!isOn)}>
    //   <ToggleHandle layout transition={spring} />
    // </ToggleButtonWrapper>

    <ToggleButtonWrapper $isOn={isOn} onClick={toggler}>
      <ToggleHandle layout transition={spring} />
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;
