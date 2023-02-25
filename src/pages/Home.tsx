import Carousel from 'components/slider/Carousel';
import styled from 'styled-components';
const Home = () => {
  return (
    <Wrapper>
      <Carousel />
      <Cont />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;

const Cont = styled.div`
  height: 100vh;
`;
