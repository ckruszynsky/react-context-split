import React from "react";
import { SelectCountryFormComponent } from "./select-country-from-component";
import { Section } from "./section";
import { DiscountSituation } from "./discount-situation";
import { NameFormComponent } from "./name-form-component";

export const PersonalInfoSection = () => {
  console.info("PersonalInfoSection render");

  return (
    <Section title="Personal information">
      <DiscountSituation />
      <NameFormComponent />
      <SelectCountryFormComponent />
    </Section>
  );
};
