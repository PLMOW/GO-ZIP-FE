import styled from 'styled-components';
import CarouselComponent from './CarouselComponent';
import Left from 'components/icons/Left';
import Right from 'components/icons/Right';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { AnimatePresence } from 'framer-motion';

const Carousel = () => {
  const { index, imgs } = useSelector((state: RootState) => state.carousel);
  return (
    <Wrapper>
      <Left />
      <Right />
      <AnimatePresence>
        {imgs.map((v, i) => {
          const { src, ...textData } = v;

          return i === index ? (
            <CarouselComponent
              key={`${src}=index`}
              imgSrc={src}
              textData={textData}
            />
          ) : null;
        })}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  position: relative;
  width: auto;
  height: 100vh;
`;
