import gsap from 'gsap';
import styled from 'styled-components';
import Left from 'components/icons/Left';
import Right from 'components/icons/Right';

interface CarouselComponentProps {
  imgSrc: string;
}

const CarouselComponent = ({ imgSrc }: CarouselComponentProps) => {
  return (
    <Wrapper>
      <Left />
      <Right />
      <Image imgSrc={imgSrc} />
    </Wrapper>
  );
};

export default CarouselComponent;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const Image = styled.div<{ imgSrc: string }>`
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
