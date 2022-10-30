import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ShareHoldersChart({ shareholders }) {
  const datas = {
    labels:
      shareholders &&
      shareholders.map((res, index) => {
        return res.title;
      }),

    datasets: [
      {
        label: "# of Votes",
        data:
          shareholders &&
          shareholders.map((res, index) => {
            return res.percent;
          }),
        backgroundColor: [
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 5,
      },
    ],
  };
  return (
    <Box my={50}>
      <Doughnut
        data={datas}
        width={900}
        height={500}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",

              labels: {
                padding: 20,
                color: "white",
                font: {
                  size: 20,
                  family: "IranSans",
                },
              },
            },
          },
          layout: {},
        }}
      />
    </Box>
  );
}
