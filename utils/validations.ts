import * as yup from 'yup'

export const MagicFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('Пожалуйста, введите адрес электронной почты')
    .email('Неверный адрес электронной почты'),
})

export const PasswordLoginFormSchema = yup
  .object()
  .shape({
    password: yup
      .string()
      .required('Пожалуйста, введите пароль')
      .min(6, 'Пароль должен быть не менее 6 символов'),
  })
  .concat(MagicFormSchema)

export const RegisterFormSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required('Пожалуйста, введите имя или ник')
      .min(4, 'Имя или ник должен быть не менее 4 символов'),
  })
  .concat(PasswordLoginFormSchema)
