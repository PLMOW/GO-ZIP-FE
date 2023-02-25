import img1 from 'assets/img/i1.webp';
import styled from 'styled-components';
import CarouselComponent from './CarouselComponent';

const Carousel = () => {
  return (
    <Wrapper>
      <CarouselComponent imgSrc={img1} />
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  width: auto;
  height: 100vh;
`;
