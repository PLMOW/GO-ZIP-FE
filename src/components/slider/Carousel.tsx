import styled from 'styled-components';
import CarouselComponent from './CarouselComponent';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const Carousel = () => {
  const { index, imgs } = useSelector((state: RootState) => state.carousel);

  return (
    <Wrapper>
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

const Wrapper = styled.div.attrs({ id: 'carousel' })`
  position: relative;
  height: 100vh;
`;
