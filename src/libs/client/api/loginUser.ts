import axios from 'axios';

interface LoginUserProps {
  email: string;
  password: string;
}

const loginUser = async ({ email, password }: LoginUserProps) => {
  const route = `${process.env.REACT_APP_API_BASE_ROUTE}/api/login`;

  await axios({
    method: 'post',
    url: route,
    data: {
      email,
      password,
    },
  });
};

export default loginUser;
