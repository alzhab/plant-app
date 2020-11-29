export interface FormProps {
  submit: (values: FormValues) => void
}

export interface FormValues {
  email: string,
  password: string,
}

export interface State {
  checkEmail: boolean;
}

