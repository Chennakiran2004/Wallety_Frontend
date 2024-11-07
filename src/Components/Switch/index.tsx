import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";

interface SwitchProps{
    onToggle: (value: boolean)=> void
}
const Switch:React.FC<SwitchProps> = ({onToggle}) =>{
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle(!isOn)
}

  return (
    <AnimatePresence mode = "wait">
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
      
    </div>
    </AnimatePresence>
  );
}

const spring = {
  type: "spring",
  stiffness: 1000,
  damping: 30
};

export default Switch
