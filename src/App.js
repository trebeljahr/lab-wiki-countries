import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { CountryDetails } from './components/CountryDetails';
import { CountriesList } from './components/CountriesList';
import countries from './countries.json';

function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <CountriesList countries={countries} />
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={null} />
          <Route
            path="/:countryCode"
            element={<CountryDetails countries={countries} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
