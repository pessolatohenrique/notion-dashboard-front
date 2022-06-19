import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";

import { Bar } from "react-chartjs-2";
import { IBarChart } from "../interfaces/Chart";
import { CHART_COLORS } from "../constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionsComparative: ChartOptions<"bar"> = {
  indexAxis: "y",
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export function BarChartComparative({
  data,
  labelProperty,
  mainConfig,
}: IBarChart) {
  const [labels, setLabels] = useState<Array<string>>([]);

  useEffect(() => {
    const mappedLabels: Array<string> = [...data].map(
      (item) => item[labelProperty]
    );
    setLabels(mappedLabels);
  }, [data, labelProperty]);

  const dataObject = {
    labels,
    datasets: [
      {
        label: mainConfig.legend,
        data: labels.map((item, key) => {
          const mainValue =
            (data[key] && data[key][mainConfig.valueProperty]) || 0;
          return mainValue;
        }),
        backgroundColor: CHART_COLORS,
      },
    ],
  };

  return (
    <Grid>
      <Bar
        options={optionsComparative}
        data={dataObject}
        width={400}
        height={400}
      />
    </Grid>
  );
}
