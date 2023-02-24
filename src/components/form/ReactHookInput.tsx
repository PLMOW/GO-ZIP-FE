import styled from 'styled-components';
import Label from 'components/form/Label';
import { InputProps } from 'libs/client/types/formType';

const EmailInput = ({ type, register, errorMessage }: InputProps) => {
  console.log(type, errorMessage);
  return (
    <Wrapper>
      <Label value={type} errorMessage={errorMessage} />
      {type === 'Email' ? (
        <Input
          errorId={!!errorMessage}
          {...register('signInEmail', {
            required: 'is required',
            validate: {
              hasAlpha: (value) => {
                const hasAlpha = !!value.match(/[a-zA-Z]/g);

                return hasAlpha ? true : 'must be include alpha';
              },
              isEmail: (value) => {
                const isEmail = !!value.match(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                );

                return isEmail ? true : 'Is not Email Form';
              },
            },
          })}
          type="text"
          placeholder="Email"
        />
      ) : type === 'Nickname' ? (
        <Input
          errorId={!!errorMessage}
          {...register('signInNickname', {
            required: 'is required',
            minLength: {
              value: 4,
              message: 'longer more than 4',
            },
            validate: (value) => {
              const hasAlpha = !!value.match(/[a-zA-Z]/g);

              return hasAlpha ? true : 'must be include alpha';
            },
          })}
          type="text"
          placeholder="Nickname"
        />
      ) : (
        <Input
          errorId={!!errorMessage}
          {...register('signInPassword', {
            required: 'is required',
            minLength: {
              value: 4,
              message: 'longer more than 4',
            },
          })}
          type="password"
          placeholder="Password"
        />
      )}
    </Wrapper>
  );
};

export default EmailInput;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  background: none;
  font-weight: 600;
  border-bottom: solid 2px
    ${(props) => (props.errorId ? props.theme.pointColor : props.theme.color)};
  transition: ${({ theme }) => theme.transitionOption};
  border-radius: 10px 10px 0 0;
  color: ${({ theme }) => theme.color};
  :focus {
    outline: none;
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.color};
  }
`;
