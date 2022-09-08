import React from "react";
import { Section } from "./section";
import { DiscountFormComponent } from "./discount-form-component";

export const ValueCalculationsSection = () => {
  console.info("ValueCalculationsSection render");
  return (
    <Section title="Value calculation">
      <DiscountFormComponent />
    </Section>
  );
};
