import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, InputLabel, Select, Box, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  IDatabaseResponseList,
  IDatabaseSearchForm,
} from "../../interfaces/Database";

function DashboardContainer() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<IDatabaseSearchForm>();

  const [databases, setDatabases] = useState<IDatabaseResponseList>({
    items: [],
  });

  useEffect(() => {
    async function loadDatabases() {
      try {
        const response = await axios.get(`/search?fromCache=true`);
        return response?.data?.results;
      } catch (error) {}
    }

    async function loadMain() {
      const databases = await loadDatabases();
      reset({ id: "0c72c795-7b93-4de7-8e34-758490319795" });
      setDatabases({ items: databases });
    }

    loadMain();
  }, []);

  console.log("databases", databases.items);

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
    </Box>
  );
}

export default DashboardContainer;
