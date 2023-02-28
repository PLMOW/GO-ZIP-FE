import { useDispatch } from 'react-redux';
import { logout } from 'redux/modules/isLogin';
import { useCookies } from 'react-cookie';

const LogOut = () => {
  const [_, __, removeCookie] = useCookies();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    removeCookie('ACCESS_TOKEN');
  };

  return <div onClick={logoutHandler}>LogOut</div>;
};

export default LogOut;
