import React from "react";
import { useParams } from "react-router-dom";
import { ISpecificItem } from "../../interfaces/Search";

function ExampleDetail() {
  const { id }: ISpecificItem = useParams();
  return <h1>Detail with ID: {id}</h1>;
}

export default ExampleDetail;
