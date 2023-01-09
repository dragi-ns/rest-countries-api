import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import useThemeSwitcher from './hooks/useThemeSwitcher';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [theme, colorScheme, toggleColorScheme] = useThemeSwitcher('dark');

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home countries={countries} />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}
