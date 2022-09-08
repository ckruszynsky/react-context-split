/** @jsxImportSource @emotion/react */

import React from "react";
import { DraggingBar } from "../dragging-bar-library";
import { useFormAPI } from "../FormDataProvider";

export const DiscountFormComponent = () => {
  const { onDiscountChange } = useFormAPI();
  console.info("DiscountFormComponent render");
  return (
    <div>
      Please select your discount here: <br />
      <DraggingBar onChange={(value: number) => onDiscountChange(value)} />
    </div>
  );
};
