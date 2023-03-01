import styled from 'styled-components';
import CarouselComponent from './CarouselComponent';
import { RootState } from 'redux/store';
import { AnimatePresence } from 'framer-motion';
import { next } from 'redux/modules/carousel';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useInterval from 'hooks/useInterval';

const Carousel = () => {
  const dispatch = useDispatch();
  const { index, imgs, intervalRef } = useSelector(
    (state: RootState) => state.carousel
  );
  const carouselInterval = useInterval(
    () => dispatch(next()),
    7000,
    intervalRef
  );

  /* Handle Carousel Infinity Animate */
  useEffect(() => {
    carouselInterval();
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
