import styled from 'styled-components';
import imgSrc from 'assets/img/c2.webp';

const Content1 = () => {
  return (
    <Container>
      <Wrapper src={imgSrc} id="content_2"></Wrapper>
    </Container>
  );
};

export default Content1;

const Container = styled.div`
  display: flex;
  background: #111;
`;

const Wrapper = styled.div<{ src: string }>`
  height: 100vh;
  background: bisque;
  height: 100vh;
  width: 70vw;
  background-size: cover;
  background-image: linear-gradient(
      210deg,
      rgba(222, 222, 222, 0),
      rgba(222, 222, 222, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url(${({ src }) => src});
`;
