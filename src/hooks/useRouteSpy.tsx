import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const AUTH_ROUTE = Object.freeze(['product', 'user'] as const);

/**
 * @param route string;
 * @param redirectRoute : string;
 * @returns
 */
const useRouteSpy = (route: string, redirectRoute: string) => {
  const navigate = useNavigate();
  const loginData = useSelector((state: RootState) => state.login);
  const { isLogin } = loginData;

  const routeSpy = () => {
    for (let i of AUTH_ROUTE) {
      const pathRegex = new RegExp(`[${i}]`, 'g');
      if (!!route.match(pathRegex) && !isLogin) navigate(redirectRoute);
    }
  };

  return routeSpy;
};

export default useRouteSpy;
