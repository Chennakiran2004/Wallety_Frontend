import React, { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  ChartConfiguration,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const data = {
    datasets: [
      {
        label: "Pie Chart Data",
        data: [204.5, 108.5, 188.461],
        backgroundColor: ["#7F3DFF", "#FD3C4A", "#FCAC12"],
        hoverBackgroundColor: ["#BA55D3", "#FF6347", "#FFD700"],
        hoverOffset: 20,
        borderWidth: 0,
      },
    ],
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config: ChartConfiguration<"doughnut", number[], string> = {
    type: "doughnut",
    data: data,
    options: {
      cutout: "85%",
      elements: {
        arc: {
          borderWidth: 0,
          borderRadius(ctx, options) {
            return {
              outerStart: 0,
              innerStart: 0,
              outerEnd: 20,
              innerEnd: 10,
            };
          },
        },
      },
    },
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      const doughnutChart = new Chart(ctx, config);

      return () => {
        doughnutChart.destroy();
      };
    }
  }, [config]);

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DoughnutChart;
