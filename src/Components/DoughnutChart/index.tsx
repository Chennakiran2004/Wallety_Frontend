import React, { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  ChartConfiguration,
  Plugin,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: number[];
  backgroundColors: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  backgroundColors,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const chartData = {
    datasets: [
      {
        label: "Expenses Breakdown",
        data: data,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors.map((color) => color + "AA"),
        hoverOffset: 20,
        borderWidth: 0,
      },
    ],
  };

  const config: ChartConfiguration<"doughnut", number[], string> = {
    type: "doughnut",
    data: chartData,
    options: {
      cutout: "85%",
      plugins: {
        tooltip: {
          enabled: true,
        },
      },
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

  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerTextPlugin",
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      const text = "365";

      const fontSize = 32;
      const fontStyle = "normal";
      const fontWeight = 700; // Bold
      const fontFamily = "Inter";
      const lineHeight = 39;
      const color = "#000";

      ctx.save();
      ctx.font = `${fontWeight} ${fontStyle} ${fontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;

      const x = (chartArea.left + chartArea.right) / 2;
      const y = (chartArea.top + chartArea.bottom) / 2;

      ctx.fillText(text, x, y);
      ctx.restore();
    },
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      const doughnutChart = new Chart(ctx, {
        ...config,
        plugins: [centerTextPlugin],
      });

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
