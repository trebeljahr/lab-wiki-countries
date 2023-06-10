import { Link } from 'react-router-dom';

export function CountriesList({ countries }) {
  const generateFlagUrl = (countryCode) =>
    `https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`.toLowerCase();

  return (
    <div>
      {countries.map((country) => {
        return (
          <Link
            to={country.alpha2Code}
            key={country.alpha2Code}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              border: '1px solid black',
            }}
          >
            <p style={{ margin: 0, marginRight: 20 }}>{country.name.common}</p>
            <img src={generateFlagUrl(country.alpha2Code)} />
          </Link>
        );
      })}
    </div>
  );
}
