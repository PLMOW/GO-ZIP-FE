import styled from 'styled-components';
import { ReactNode } from 'react';

interface BackgroundImageProps {
  src: string;
  children: ReactNode;
}

const BackgroundImage = ({ src, children }: BackgroundImageProps) => {
  return <Wrapper src={src}>{children}</Wrapper>;
};

export default BackgroundImage;

const Wrapper = styled.div<{ src: string }>`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-image: linear-gradient(
      210deg,
      rgba(222, 222, 222, 0),
      rgba(222, 222, 222, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url(${({ src }) => src});
`;
