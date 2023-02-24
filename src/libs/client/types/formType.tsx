import { UseFormRegister, FieldValues } from 'react-hook-form';

/* Input Types */
type InputTypes =
  | 'Email'
  | 'Nickname'
  | 'Password'
  | '이메일'
  | '닉네임'
  | '비밀번호';

/* Input */
export interface InputProps {
  type: InputTypes;
  register: UseFormRegister<FieldValues & FormState>;
  errorMessage: string | undefined;
}

/* SignIn */
export interface FormState {
  email: string;
  password: string;
  nickname: string;
}

/* Label */
export interface LabelProps {
  value: InputTypes;
  errorMessage: string | undefined;
}
