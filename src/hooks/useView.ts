import React, { useState } from "react";

function useView() {
  const [format, setFormat] = useState("table");

  function switchFormat(format: string = ""): boolean {
    setFormat(format);
    return true;
  }

  function isTable(): boolean {
    return format === "table";
  }

  function isList(): boolean {
    return format === "list";
  }

  return [isTable, isList, switchFormat];
}

export default useView;
