import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = () => {};

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input type="text" {...register('signinId')} />
      <input type="email" {...register('signinEmail')} />
      <input type="password" {...register('signinPw')} />
    </Form>
  );
};

export default Signin;

const Form = styled.form``;
