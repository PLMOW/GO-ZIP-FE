import styled from "styled-components";
type InputBoxProps = {
    text: "이메일" | "비밀번호" | "닉네임";
}

/* 
Typescript : text는 아래와 같은 값만 받을 수 있습니다.
1. 이메일
2. 비밀번호
3. 닉네임
*/

const InputBox = ({ text }: InputBoxProps) => {

    return (
        <div>
            <StP>{text}</StP>
            <DivBox type="input">
                <Input></Input>
            </DivBox>
            <P>123123123</P>
        </div>
    )
}

export default InputBox

type DivBoxProps = { type?: "btn" | "input" };
const DivBox = styled.div<DivBoxProps>`
    width: ${(props) => {
        const { type } = props;
        if (type === 'btn') return '100px';
        if (type === 'input') return '500px';

        return '300px'
    }};
  
    /* width: 360px; */
    /* min-width: 100px; */
    height: 30px;
    border: 1px solid #DADADA;
    display: flex;
    align-items: center;
    justify-content: center;
  
    :hover {
      background: ${(props) => props.theme.color};
    }
  `
const Input = styled.input`
  
  width: 93%;
  outline: none;
  border: none;
  background-color: #F6F6F6;
  `
const StP = styled.p`
  margin: 10px 0;
  font-size: .9rem;
  font-weight: 500;
  `
const P = styled.p`
width: 100%;
    font-size: .8rem;
    margin-top: 10px;
    color: #FF0000;
  `