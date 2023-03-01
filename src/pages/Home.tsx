import Carousel from 'components/slider/Carousel';
import styled from 'styled-components';
import FloatNav from 'components/partials/FloatNav/FloatNav';
import { HASH_ROUTE } from 'libs/client/constants/hashRoute';

const Home = () => {
  return (
    <>
      <FloatNav />
      <Wrapper>
        <Carousel />
        {HASH_ROUTE.map((v, i) => {
          const id = v.hash.replaceAll('#', '');
          if (!id.includes('content')) return;

          return <Content key={`${id}_Content`} isEven={!!(i % 2)} id={id} />;
        })}
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
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
