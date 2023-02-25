import api from './axiosIstance';
import { END_POINT, AXIOS_CONFIG } from 'libs/client/constants/api';

interface createUserProps {
  email: string;
  password: string;
  nickname: string;
}

const createUser = async ({ email, password, nickname }: createUserProps) => {
  await api.post(
    END_POINT.SIGN_UP,
    {
      email,
      password,
      nickname,
    },
    { withCredentials: AXIOS_CONFIG.CREDENTIAL_TRUE }
  );
};

export default createUser;
