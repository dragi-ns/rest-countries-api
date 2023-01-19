import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import { StyledMain } from './styles/StyledMain';
import useThemeSwitcher from './hooks/useThemeSwitcher';

export default function App() {
  const [theme, colorScheme, toggleColorScheme] = useThemeSwitcher('dark');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
      <StyledMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:code" element={<Details />} />
        </Routes>
      </StyledMain>
      <Footer />
    </ThemeProvider>
  );
}
