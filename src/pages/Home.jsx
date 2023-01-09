import Container from '../styles/Container.styled';
import CountryCards from '../components/CountryCards';

export default function Home({ countries }) {
  return (
    <Container>
      <CountryCards countries={countries} />
    </Container>
  );
}
