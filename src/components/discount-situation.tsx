import React from "react";
import { useFormState } from "../FormDataProvider";

export const DiscountSituation = () => {
  const { discount } = useFormState();
  console.info("Discount situation render");
  const discountPercent = Math.round((discount / 300) * 100);

  let discountSituation = "😊";
  if (discountPercent < 10) discountSituation = "😊";
  // eslint-disable-next-line react/no-unescaped-entities
  else if (discountPercent < 50) discountSituation = "😐";
  else discountSituation = "🤣";

  return <div>Your discount situation: {discountSituation}</div>;
};
