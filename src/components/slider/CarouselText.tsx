import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { textDataType } from './CarouselComponent';

interface CarouselTextProps {
  textData: textDataType;
}

const CarouselText = ({ textData }: CarouselTextProps) => {
  const { mainTitle, subTitle } = textData;
  return (
    <Wrapper>
      <div>{mainTitle}</div>
      <div>{subTitle}</div>
    </Wrapper>
  );
};

export default CarouselText;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  left: 5%;
  font-size: 70px;
  gap: 10px;
  color: white;
  :last-child :last-child {
    font-size: 120px;
    //-webkit-text-stroke: 3px ${({ theme }) => theme.color};
  }
`;
