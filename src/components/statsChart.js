import React, { useState } from "react";
import {
  BarChart,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import "../views/header/Header.css";

const data = [
  { name: "A", value: 40, color: "#E6AD6D" },
  { name: "B", value: 5, color: "#A98AFF" },
  { name: "C", value: 10, color: "#E957C9" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-main">
        <div className="tt-months-cnt">
          <p className="tt-months">this Month</p>
          <p style={{ borderTop: "1px dashed #fff", margin: "0" }} />
        </div>
        <div className="tooltip-count">
          <h3 className="tt-num">{`${payload[0].value}K+`}</h3>
          <p className="tt-pat">patients</p>
        </div>
      </div>
    );
  }
  return null;
};

const Statchart = () => {
  const [activeBar, setActiveBar] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleBarClick = (entry, index, event) => {
    setActiveBar(activeBar === index ? null : index);
    const { clientX, clientY } = event;
    setTooltipPosition({ x: clientX, y: clientY });
  };

  const handleChartLeave = () => {
    setActiveBar(null);
  };

  return (
    <div style={{ display: "flex", width: "208px", height: "175px" }}>
      {data.map((entry, index) => (
        <div key={`bar-${index}`} style={{ height: "175px", width: "100px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[entry]} onMouseLeave={handleChartLeave}>
              <defs>
                <linearGradient
                  id={`colorGradient-${index}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={entry.color} stopOpacity={1} />
                  <stop offset="95%" stopColor={entry.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip 
                content={<CustomTooltip />} 
                cursor={false}
                position={tooltipPosition}
                active={activeBar === index}
              />
              <Bar
                dataKey="value"
                fill={`url(#colorGradient-${index})`}
                radius={[30, 30, 0, 0]}
                barSize={57}
                onClick={(event) => handleBarClick(entry, index, event)}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default Statchart;
