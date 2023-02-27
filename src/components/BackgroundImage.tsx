import styled from 'styled-components';
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundImageProps {
  src: string;
}

const BackgroundImage = ({ src }: BackgroundImageProps) => {
  return (
    <Wrapper
      variants={backgroundVariants}
      src={src}
      initial="from"
      animate="to"
      exit="exit"
    ></Wrapper>
  );
};

export default BackgroundImage;

const Wrapper = styled(motion.div)<{ src: string }>`
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

const backgroundVariants = {
  from: { opacity: 0.8, transition: { duration: 0.15 } },
  to: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0.8, transition: { duration: 0.15 } },
};
