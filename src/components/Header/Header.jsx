import { Container, Header } from "./Header.styled";
import heroImage from "../../assets/images/header/hero_image.png";
const Hat = () => {
  return (
    <>
      <Container>
        <picture>
          <source src={`${heroImage}`} srcSet={`${heroImage}`} />
        </picture>
      </Container>
    </>
  );
};

export default Hat;
