import { rawCountries } from "./raw-data";
import { Country } from "./types";
import { useState } from "react";
import { CountriesList } from "./list";
import { ThemeProvider, Mode } from "./theme";

const getCountriesFromRawData = (raw: any[]): Country[] => {
  return raw.map((value: any) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion)
  }));
};

type SelectCountryProps = {
  activeCountry?: Country;
  onChange: (country: Country) => void;
};

export { Country };

export const SelectCountry = ({
  activeCountry,
  onChange
}: SelectCountryProps) => {
  const countries = getCountriesFromRawData(rawCountries);
  const [mode] = useState<Mode>("light");

  return (
    <ThemeProvider value={{ mode }}>
      <div className="content">
        <CountriesList
          countries={countries}
          onCountryChanged={(c) => onChange(c)}
          savedCountry={activeCountry || countries[0]}
        />
      </div>
    </ThemeProvider>
  );
};
