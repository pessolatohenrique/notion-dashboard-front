import React from "react";
import { Button, Grid } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { IViewListToggle } from "../interfaces/ViewList";

function ViewListToggle({ isTable, isList, switchFormat }: IViewListToggle) {
  return (
    <Grid container justifyContent="flex-end" gap="10px">
      <Button
        variant={isTable() ? "contained" : "text"}
        data-testid="view-table"
        onClick={() => switchFormat("table")}
      >
        <ListIcon />
      </Button>
      <Button
        variant={isList() ? "contained" : "text"}
        data-testid="view-card"
        onClick={() => switchFormat("list")}
      >
        <ViewModuleIcon />
      </Button>
    </Grid>
  );
}

export default ViewListToggle;
