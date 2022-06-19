import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  InputLabel,
  Select,
  Box,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  IDatabaseResponseList,
  IDatabaseSearchForm,
} from "../../interfaces/Database";
import {
  IDatabaseSummarized,
  IDatabaseItemSummaridedResult,
  IDatabaseItemSummarized,
} from "../../interfaces/Statistic";
import { THEME_COLOR } from "../../constants/default_settings";
import { BarChartComparative } from "../../components/ChartWrapper";
import { IBarChartItem } from "../../interfaces/Chart";

function DashboardContainer() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IDatabaseSearchForm>();

  const watchId = watch("id");

  const [databases, setDatabases] = useState<IDatabaseResponseList>({
    items: [],
  });

  const [statistic, setStatistic] = useState<IDatabaseSummarized>({
    items: [],
  });

  useEffect(() => {
    async function loadDatabases() {
      try {
        const response = await axios.get(`/search?fromCache=true`);
        const results = response?.data?.results;
        return results;
      } catch (error) {}
    }

    async function loadMain() {
      const databases = await loadDatabases();
      setDatabases({ items: databases });
    }

    loadMain();
  }, []);

  useEffect(() => {
    function mapValuesChart(values: Array<IDatabaseItemSummaridedResult>) {
      const valuesChart: Array<IBarChartItem> = [];
      [...values].map((subitem) => {
        valuesChart.push({
          key: Object.keys(subitem)[0],
          value: Object.values(subitem)[0],
        });
      });

      return valuesChart;
    }

    async function loadStatistic() {
      try {
        const response = await axios.get(`statistic/${watchId}?fromCache=true`);
        const results = response?.data?.result;

        const resultsMapped = [...results].map((item) => {
          const valuesChart: Array<IBarChartItem> = mapValuesChart(item.values);
          return { ...item, valuesChart: valuesChart };
        });

        return resultsMapped;
      } catch (error) {}
    }

    async function loadMain() {
      if (watchId) {
        const statistic = await loadStatistic();
        setStatistic({ items: statistic });
      }
    }

    loadMain();
  }, [watchId]);

  return (
    <Box
      minHeight="100vh"
      sx={{
        backgroundColor: `#E5E5E5`,
        overflow: "hidden",
      }}
    >
      <Grid
        container
        marginLeft={2}
        marginRight={2}
        columnSpacing={3}
        marginTop={3}
        marginBottom={2}
      >
        <Grid item lg={3} md={3} sm={11} xs={11}>
          <InputLabel id="author">Selecione o Database</InputLabel>

          <Select
            labelId="id"
            id="id"
            fullWidth
            inputProps={{ "data-testid": "id" }}
            {...register("id", {
              required: true,
            })}
          >
            {databases.items.map((item) => {
              return (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={{ xs: 3 }}
        marginLeft={2}
        marginRight={2}
        columnSpacing={3}
        marginTop={3}
        marginBottom={2}
        sx={{ width: "96%" }}
      >
        {statistic.items?.map((item) => {
          return (
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Card>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    color={THEME_COLOR}
                  >
                    Agrupado por {item.key}
                  </Typography>

                  <BarChartComparative
                    data={item.valuesChart || []}
                    labelProperty="key"
                    mainConfig={{
                      legend: "Contagem",
                      backgroundColor: "rgba(53, 162, 235, 0.5)",
                      valueProperty: "value",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default DashboardContainer;
