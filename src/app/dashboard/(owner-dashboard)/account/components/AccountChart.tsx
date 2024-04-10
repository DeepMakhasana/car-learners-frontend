"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styles from "../account.module.css";

interface ChartProp {
  labels: string[];
  revenue: number[];
  expense: number[];
}

const AccountChart = ({ data }: { data: ChartProp }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && data) {
      let delayed: boolean;
      const accountChart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Revenue",
              data: data.revenue,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
            {
              label: "Expense",
              data: data.expense,
              backgroundColor: "rgba(255, 160, 180, 0.2)",
              borderColor: "rgba(255, 160, 180, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              console.log(context);
              if (context.type === "data" && context.mode === "default" && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return () => {
        accountChart.destroy();
      };
    }
  }, [data]);

  return (
    <div className={styles.accountChartContainer}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default AccountChart;
