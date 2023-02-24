import styled from 'styled-components';
type InputBoxProps = {
  text: '이메일' | '비밀번호' | '닉네임';
};

const InputBox = ({ text }: InputBoxProps) => {
  return (
    <div>
      <Title>{text}</Title>
      <DivBox type="input">
        <Input></Input>
      </DivBox>
      <P>123123123</P>
    </div>
  );
};

export default InputBox;

type DivBoxProps = { type?: 'btn' | 'input' };

const DivBox = styled.div<DivBoxProps>`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  height: 100%;
  outline: none;
  border: none;
  background-color: white;
  border: 1px solid #dadada;
`;
const Title = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  font-weight: 500;
`;
const P = styled.p`
  width: 100%;
  font-size: 0.8rem;
  margin-top: 10px;
  color: #ff0000;
`;
