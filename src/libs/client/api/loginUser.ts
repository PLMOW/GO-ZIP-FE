import api from './axiosIstance';

interface LoginUserProps {
  email: string;
  password: string;
}

const loginUser = async ({ email, password }: LoginUserProps) => {
  const ENDPOINT = '/api/login';

  await api({
    method: 'post',
    url: ENDPOINT,
    data: {
      email,
      password,
    },
    withCredentials: true,
  });
};

export default loginUser;
