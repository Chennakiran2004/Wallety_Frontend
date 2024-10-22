import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const MyProgressBar: React.FC = () => {
  const [progress] = useState<number>(50); // You can change this to control progress

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <ProgressBar
        completed={progress}
        bgColor="#FCAC12"
        height="20px"
        labelAlignment="center"
        labelColor="#fff"
        maxCompleted={100}
        isLabelVisible={false}
      />
    </div>
  );
};

export default MyProgressBar;
