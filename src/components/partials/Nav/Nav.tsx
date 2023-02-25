import styled from 'styled-components';
import NavLink from './NavLink';
import ToggleBtn from './ThemeToggle';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LeftContainer>
        <Title onClick={() => navigate('/')}>GO-ZIP</Title>
        <ToggleBtn />
      </LeftContainer>
      <RightContainer>
        <NavLink value={'Home'} href={'/'} />
        <NavLink value={'LogIn'} href={'/login'} />
        <NavLink value={'SignIn'} href={'/signin'} />
      </RightContainer>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  position: fixed;
  padding: 20px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  gap: 17px;
  margin-right: 25px;
`;
