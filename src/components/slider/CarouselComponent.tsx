import gsap from 'gsap';
import img1 from 'assets/img/i1.webp';
import styled from 'styled-components';

interface CarouselComponentProps {
  imgSrc: string;
}

const CarouselComponent = ({ imgSrc }: CarouselComponentProps) => {
  return (
    <Wrapper>
      <Image imgSrc={imgSrc} />
    </Wrapper>
  );
};

export default CarouselComponent;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Image = styled.div<{ imgSrc: string }>`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-image: linear-gradient(
      210deg,
      rgba(222, 222, 222, 0.2),
      rgba(0, 0, 0, 0.8)
    ),
    url(${({ imgSrc }) => imgSrc});
`;
