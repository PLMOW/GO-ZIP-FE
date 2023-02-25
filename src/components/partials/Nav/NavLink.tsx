import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface navLinkProps {
  value: string;
  href: string;
}

const NavLink = ({ href, value }: navLinkProps) => {
  const [isHover, setIsHover] = useState(false);
  const router = useLocation();

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={href}>
        <Btn>{value}</Btn>
      </Link>
      <AnimatePresence>
        {router.pathname === href ? (
          <Dot
            layoutId="dot"
            variants={hoverVariants}
            initial="from"
            animate="to"
            exit="exit"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default NavLink;

const Wrapper = styled.div`
  position: relative;
`;

const Btn = styled.div`
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  transition: ease-in-out 0.1s;
  box-sizing: border-box;
  height: 30px;
`;

const Dot = styled(motion.div)`
  position: absolute;
  bottom: 3px;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: ${({ theme }) => theme.pointColor};
`;

const Dash = styled(motion.div)`
  position: absolute;
  bottom: 2px;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: ${({ theme }) => theme.color};
`;

const hoverVariants = {
  from: { opacity: 1 },
  to: { opacity: 1, transition: { duration: 0.01 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
