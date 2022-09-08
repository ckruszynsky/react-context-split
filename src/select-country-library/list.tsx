import { Country } from "./types";
import { useTheme } from "./theme";

type CountriesListProps = {
  countries: Country[];
  onCountryChanged: (country: Country) => void;
  savedCountry: Country;
};

export const CountriesList = ({
  countries,
  onCountryChanged,
  savedCountry
}: CountriesListProps) => {
  const { mode } = useTheme();

  const Item = ({ country }: { country: Country }) => {
    const className = `country-item ${
      savedCountry.id === country.id ? "saved" : ""
    } ${mode === "dark" ? "dark" : ""}`;

    return (
      <button className={className} onClick={() => onCountryChanged(country)}>
        <img
          src={country.flagUrl}
          width={50}
          style={{ marginRight: "8px" }}
          alt={country.name}
        />
        <div>{country.name}</div>
      </button>
    );
  };

  return (
    <div className="countries-list">
      {countries.map((country) => (
        <Item country={country} key={country.id} />
      ))}
    </div>
  );
};
