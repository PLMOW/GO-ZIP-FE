import api from './axiosIstance';

interface createUserProps {
  email: string;
  password: string;
  nickname: string;
}

const createUser = async ({ email, password, nickname }: createUserProps) => {
  const ENDPOINT = '/api/signup' as const;

  await api.post(
    ENDPOINT,
    {
      email,
      password,
      nickname,
    },
    { withCredentials: true }
  );
};

export default createUser;
