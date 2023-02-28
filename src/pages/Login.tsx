import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import loginPost from 'libs/client/api/loginPost';
import { motion } from 'framer-motion';
import { FormState } from 'libs/client/types/formType';
import ReactHookInput from 'components/form/ReactHookInput';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from 'components/BackgroundImage';
import imgSrc from 'assets/img/i4.webp';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const { mutate, data, isLoading } = useMutation(loginPost, {
    onSuccess: (res) => {
      const myToken = res.headers['authorization'];
      setCookie('ACCESS_TOKEN', myToken);
      console.log('Login Query Fulfilled!');

      return navigate('/');
    },
    onError: (err) => {
      console.log('Login Query Rejected');
    },
  });

  const onValid = async (data: FormState) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <>
      <BackgroundImage src={imgSrc} />
      <Container>
        <TopWrapper>
          <Title>Log in</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <ReactHookInput
              type="Email"
              register={register}
              errorMessage={errors.email?.message}
            />
            <ReactHookInput
              type="Password"
              register={register}
              errorMessage={errors.password?.message}
            />
            <Submit>Login</Submit>
          </Form>
        </TopWrapper>
        <BottomWrapper>
          <SocialText>LogIn with Social</SocialText>
          <a href="/login">login</a>
        </BottomWrapper>
      </Container>
    </>
  );
};

export default Login;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 5px;
  gap: 5px;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const SocialText = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  opacity: 0.7;
`;

const TopWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 700px;
  border-radius: 5px;
  left: calc(50% - 250px);
  top: calc(50% - 400px);
  color: ${({ theme }) => theme.color};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.transparentColor};
  backdrop-filter: blur(3px);
  background: ${({ theme }) => theme.transparentBackground};
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ${({ theme }) => theme.transitionOption};
`;

const Title = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Submit = styled.button`
  margin: 30px 0 30px 0;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  font-size: 20px;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;
