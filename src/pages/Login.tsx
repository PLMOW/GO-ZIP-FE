import styled from 'styled-components';
import InputBox from 'components/form/InputBox';

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <InputBox text="이메일" />
        <InputBox text="비밀번호" />
        <InputBox text="닉네임" />
      </Container>
    </Wrapper>
  );
};

export default Login;

const Container = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  position: fixed;
  margin-top: 70px;
  width: 100vw;
  height: 100vh;
`;
