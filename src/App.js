import React, { useState } from "react";
import "./app.css";

import RadarChart from "../lib/RadarChart";

const data = [
  {
    name: "生活",
    value: 0.5,
  },
  {
    name: "娱乐",
    value: 0.4,
  },
  {
    name: "工作",
    value: 0.8,
  },
  {
    name: "学习",
    value: 0.7,
  },
  {
    name: "其他",
    value: 0.2,
  },
];

const colors = {
  lineColor: "rgb(255,255,255)",
  innerColor: "rgba(109,200,236,0.45)",
  outerColor: "transparent",
  fontColor: "rgb(255,255,255)",
  borderColor: "rgb(109,200,236)",
};

function App() {
  const [showData, setShowData] = useState(false);
  return (
    <div id="app">
      <div className="container">
        <RadarChart
          data={data}
          showData={showData}
          size={480}
          colors={colors}
        />
        <div>
          <button className="btn" onClick={() => setShowData(true)}>
            animate
          </button>
          <button className="btn" onClick={() => location.reload()}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
