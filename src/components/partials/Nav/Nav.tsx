import styled from 'styled-components';
import NavLink from './NavLink';
import ToggleBtn from './ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LeftContainer>
        <IconsWrapper>
          <Svg
            width={50}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </Svg>
        </IconsWrapper>
        <Title onClick={() => navigate('/')}>
          <div>GO-</div>
          <div>ZIP</div>
        </Title>
      </LeftContainer>
      <RightContainer>
        <ToggleBtn />
        <NavLink value={'Home'} href={'/'} />
        <NavLink value={'LogIn'} href={'/login'} />
        <NavLink value={'SignIn'} href={'/signin'} />
        <NavLink value={'상품등록'} href={'/product/load'} />
      </RightContainer>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding: 15px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 30px);
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconsWrapper = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.pointColor};

  :hover {
    cursor: pointer;
  }
`;

const RightContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 10px 25px 0px 0px;
`;

const Svg = styled.svg`
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.background};
`;
