import styled from 'styled-components';
import CarouselComponent from './CarouselComponent';
import { AnimatePresence } from 'framer-motion';
import { next } from 'redux/modules/carousel';
import { RootState } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Carousel = () => {
  const dispatch = useDispatch();
  const { index, imgs, intervalRef } = useSelector(
    (state: RootState) => state.carousel
  );

  /* Handle Carousel Infinity Animate */
  useEffect(() => {
    const intervalRef = setInterval(() => dispatch(next()), 7000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

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
