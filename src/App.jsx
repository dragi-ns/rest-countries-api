import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';
import useThemeSwitcher from './hooks/useThemeSwitcher';

export default function App() {
  const [theme, colorScheme, toggleColorScheme] = useThemeSwitcher('dark');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}
