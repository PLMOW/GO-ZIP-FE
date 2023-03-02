import Carousel from 'components/slider/Carousel';
import styled from 'styled-components';
import FloatNav from 'components/partials/FloatNav/FloatNav';
import Content1 from 'pages/Content/Content_1';
import Content2 from 'pages/Content/Content2';

const Home = () => {
  return (
    <>
      <FloatNav />
      <Wrapper>
        <Container>
          <Carousel />
        </Container>
        <Content1 />
        <Content2 />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  background: #2b2b2b;
`;

const Content = styled.div<{ isEven: boolean }>`
  border-bottom: 2px black solid;
  height: 100vh;
  background: ${(props) => {
    const {
      isEven,
      theme: { transparentColor, transparentBackground },
    } = props;

    return isEven ? transparentColor : transparentBackground;
  }};
`;
