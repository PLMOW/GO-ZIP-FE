import axios from 'axios';

interface createUserProps {
  email: string;
  password: string;
  nickname: string;
}

const createUser = async ({ email, password, nickname }: createUserProps) => {
  const route = `${process.env.REACT_APP_API_BASE_ROUTE}/api/signin`;

  await axios({
    method: 'post',
    url: route,
    data: {
      email,
      password,
      nickname,
    },
    withCredentials: true,
  });
};

export default createUser;
