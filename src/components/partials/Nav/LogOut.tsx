import { useDispatch } from 'react-redux';
import { logout } from 'redux/modules/login';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const router = useLocation();
  const [_, __, removeCookie] = useCookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    removeCookie('ACCESS_TOKEN');
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <Wrapper route={router.pathname} onClick={logoutHandler}>
      LogOut
    </Wrapper>
  );
};

export default LogOut;

const Wrapper = styled.div<{ route: string }>`
  color: ${(props) => {
    return props.route === '/' ? '#F5F6F7' : 'rgba(122, 122, 122, 1)';
  }};
  font-weight: 600;
  transition: ease-in-out 0.1s;
  box-sizing: border-box;
  height: 30px;
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.pointColor};
  }
`;
