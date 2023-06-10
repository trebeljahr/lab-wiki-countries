import { Link, useParams } from 'react-router-dom';

export function CountryDetails({ countries }) {
  let { countryCode } = useParams();

  const country = countries.find(
    (country) => country.alpha2Code === countryCode
  );

  if (!country) return null;

  return (
    <div>
      <h2>Country Details for {country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area} km2</p>
      <p>Borders:</p>

      <ul>
        {country.borders.map((borderAlpha3Code) => {
          const borderCountry = countries.find(
            (country) => country.alpha3Code === borderAlpha3Code
          );
          return (
            <li key={borderAlpha3Code}>
              <Link to={`/${borderCountry.alpha2Code}`}>
                {borderCountry.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
