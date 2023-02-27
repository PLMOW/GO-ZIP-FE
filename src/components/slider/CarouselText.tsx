import styled from 'styled-components';
import { motion } from 'framer-motion';
import { textDataType } from './CarouselComponent';
import Left from 'components/icons/Left';
import Right from 'components/icons/Right';

interface CarouselTextProps {
  textData: textDataType;
}

const CarouselText = ({ textData }: CarouselTextProps) => {
  const { mainTitle, subTitle } = textData;
  return (
    <Wrapper>
      <Left />
      <TextWrapper>
        <MainText>{mainTitle}</MainText>
        <SubText>{subTitle}</SubText>
      </TextWrapper>
      <Right />
    </Wrapper>
  );
};

export default CarouselText;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 10%;
  left: 5%;
  gap: 10px;
  color: white;
`;

const TextWrapper = styled.div`
  margin-bottom: -5px;
`;

const MainText = styled.div`
  padding-bottom: 5px;
  font-size: 70px;
`;

const SubText = styled.div`
  font-size: 120px;
`;
