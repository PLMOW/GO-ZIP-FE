import { UseFormRegister, FieldValues } from 'react-hook-form';

/* Input Types */
type InputTypes = 'Email' | 'Nickname' | 'Password';

/* Input */
export interface InputProps {
  type: InputTypes;
  register: UseFormRegister<FieldValues & FormState>;
  errorMessage: string | undefined;
}

/* SignIn */
export interface FormState {
  signInEmail: string;
  signInPassword: string;
  signInNickname: string;
}

/* Label */
export interface LabelProps {
  value: InputTypes;
  errorMessage: string | undefined;
}
