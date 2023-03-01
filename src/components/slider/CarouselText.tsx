import styled from 'styled-components';
import { motion } from 'framer-motion';
import { textDataType } from './CarouselComponent';
import Left from 'components/icons/Left';
import Right from 'components/icons/Right';

interface CarouselTextProps {
  textData: textDataType;
}

const CarouselText = ({ textData }: CarouselTextProps) => {
  const { mainTitle, subTitle, pointTitle } = textData;
  return (
    <Wrapper>
      <Left />
      <TextWrapper>
        <SubText>
          <Point>{pointTitle ? pointTitle[1] : ''}</Point>
          {subTitle}
          <Point>{pointTitle ? pointTitle[2] : ''}</Point>
        </SubText>

        <MainText>
          <Point>{pointTitle ? pointTitle[0] : ''}</Point>
          {mainTitle}
        </MainText>
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

const Point = styled.span`
  color: ${({ theme }) => theme.pointColor};
`;

const TextWrapper = styled.div`
  margin-bottom: -5px;
`;

const SubText = styled.div`
  padding-bottom: 5px;
  font-size: 50px;
`;

const MainText = styled.div`
  font-size: 80px;
`;
