import Carousel from 'components/slider/Carousel';
import styled from 'styled-components';
import Search from './Search';
import FloatNav from 'components/partials/FloatNav/FloatNav';

const Home = () => {
  return (
    <>
      <FloatNav />
      <Wrapper>
        <Carousel />
        <Content1>1</Content1>
        <Content2>2</Content2>
        <Content3>3</Content3>
        <Content4>4</Content4>
        <Search />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Content1 = styled.div.attrs({ id: 'content_1' })`
  height: 100vh;
  background: tomato;
`;

const Content2 = styled.div.attrs({ id: 'content_2' })`
  height: 100vh;
  background: rgba(113, 32, 12);
`;

const Content3 = styled.div.attrs({ id: 'content_3' })`
  height: 100vh;
  background: rgb(58, 25, 202);
`;

const Content4 = styled.div.attrs({ id: 'content_4' })`
  height: 100vh;
  background: wheat;
`;
