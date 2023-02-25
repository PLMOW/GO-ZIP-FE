import api from './axiosIstance';
import { END_POINT, METHOD, AXIOS_CONFIG } from 'libs/client/constants/api';

interface LoginUserProps {
  email: string;
  password: string;
}

const loginUser = async ({ email, password }: LoginUserProps) => {
  await api({
    method: METHOD.POST,
    url: END_POINT.LOG_IN,
    data: {
      email,
      password,
    },
    //withCredentials: AXIOS_CONFIG.CREDENTIAL_TRUE,
  });
};

export default loginUser;
