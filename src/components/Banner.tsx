import styled from "styled-components";
import bg1 from "../assets/bg-1.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background-image: ${`url(${bg1})`};
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: white;
  padding: 16px;
`;

const Banner = () => {
  return (
    <Container>
      <Title>Well Come to DevTown</Title>
    </Container>
  );
};

export default Banner;
