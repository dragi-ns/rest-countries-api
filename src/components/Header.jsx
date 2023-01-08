import {
  StyledHeader,
  StyledHeaderContainer,
} from '../styles/StyledHeader.styled';
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as Sun } from '../assets/sun.svg';

export default function Header({ colorScheme, toggleColorScheme }) {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <h1>Where in the world?</h1>
        <button onClick={() => toggleColorScheme()}>
          {colorScheme === 'light' ? (
            <>
              <Moon />
              Dark Mode
            </>
          ) : (
            <>
              <Sun />
              Light Mode
            </>
          )}
        </button>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
