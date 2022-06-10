import React from "react";
import { Typography, Link, Breadcrumbs } from "@mui/material";
import { IBreadcrumb } from "../interfaces/Breadcrumb";

function BreadcrumbsWrapper({ childrenLabel, parentLink }: IBreadcrumb) {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link
        underline="hover"
        key="1"
        color="inherit"
        href="/"
        variant="body2"
        data-testid="bread-firstlevel"
      >
        Início
      </Link>
      {parentLink && (
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href={parentLink.link}
          variant="body2"
          data-testid="bread-secondlevel"
        >
          {parentLink.label}
        </Link>
      )}
      <Typography
        key="3"
        color="text.primary"
        variant="body2"
        data-testid="bread-lastlevel"
      >
        {childrenLabel}
      </Typography>
    </Breadcrumbs>
  );
}

export default BreadcrumbsWrapper;
