import React from "react";
import { useFormAPI, useFormState } from "../FormDataProvider";
import { SelectCountry, Country } from "../select-country-library";

export type { Country };

export const SelectCountryFormComponent = () => {
  const { onCountryChange } = useFormAPI();
  const { country } = useFormState();
  console.info("SelectCountryFormComponent render");

  return <SelectCountry onChange={onCountryChange} activeCountry={country} />;
};
