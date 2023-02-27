import styled from 'styled-components';
import { motion } from 'framer-motion';
import CarouselText from './CarouselText';

export type textDataType = {
  mainTitle: string;
  subTitle: string;
};

interface CarouselComponentProps {
  imgSrc: string;
  textData: textDataType;
}

const CarouselComponent = ({ imgSrc, textData }: CarouselComponentProps) => {
  return (
    <Wrapper
      variants={carouselVariants}
      initial="from"
      animate="to"
      exit="exit"
      layoutId="ca"
    >
      <Image imgSrc={imgSrc} />
      <CarouselText textData={textData} />
    </Wrapper>
  );
};

export default CarouselComponent;

const carouselVariants = {
  from: { opacity: 0, transition: { duration: 0.15 } },
  to: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const Wrapper = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100%;
`;

const Image = styled.div<{ imgSrc: string }>`
  position: absolute;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-image: linear-gradient(
      210deg,
      rgba(222, 222, 222, 0),
      rgba(222, 222, 222, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url(${({ imgSrc }) => imgSrc});
`;
