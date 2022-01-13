import React from 'react'
import { EnvelopeSimple, Eye, EyeSlash, Key, LockSimple, User } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormSchema } from '../../../utils/validations'
import { CustomFormControl } from '../../Forms/CustomFormControl'
import { CustomFormLabel, CustomRequiredIndicator } from '../../Forms/CustomFormLabel'
import { CustomInputGroup } from '../../Forms/CustomInputGroup'
import { CustomInputLeftElement, CustomInputRightElement } from '../../Forms/CustomInputElement'
import { CustomInput } from '../../Forms/CustomInput'
import { CustomFormErrorMessage } from '../../Forms/CustomFormErrorMessage'
import { Button } from '../../Button'

interface RegisterFormProps {
  onOpenPasswordLogin: () => void
}

export const Register: React.FC<RegisterFormProps> = ({ onOpenPasswordLogin }) => {
  const [loading, setLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const handleToggleShowPassword = () => setShowPassword(!showPassword)
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(RegisterFormSchema),
  })
  const watchPassword = watch('password')
  const onSubmit = async (data: any) => {
    setLoading(true)
    setTimeout(() => {
      alert(JSON.stringify(data))
      setLoading(false)
    }, 500)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 mb-6 mt-6">
          <CustomFormControl invalid={Boolean(errors.username)}>
            <CustomFormLabel>
              Имя или ник
              <CustomRequiredIndicator />
            </CustomFormLabel>
            <CustomInputGroup size="lg">
              <CustomInput size="lg" {...register('username')} placeholder="Ваше имя или ник" />
            </CustomInputGroup>
            {errors.username && (
              <CustomFormErrorMessage>{errors.username.message}</CustomFormErrorMessage>
            )}
          </CustomFormControl>

          <CustomFormControl invalid={Boolean(errors.email)}>
            <CustomFormLabel>
              Адрес электронной почты
              <CustomRequiredIndicator />
            </CustomFormLabel>
            <CustomInputGroup size="lg">
              <CustomInput
                size="lg"
                {...register('email')}
                placeholder="Ваш адрес электронной почты"
              />
            </CustomInputGroup>
            {errors.email && (
              <CustomFormErrorMessage>{errors.email.message}</CustomFormErrorMessage>
            )}
          </CustomFormControl>

          <CustomFormControl invalid={Boolean(errors.password)}>
            <CustomFormLabel>
              Пароль
              <CustomRequiredIndicator />
            </CustomFormLabel>
            <CustomInputGroup size="lg">
              <CustomInput
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Ваш пароль"
              />
              {watchPassword && (
                <CustomInputRightElement
                  className="w-12 cursor-pointer"
                  onClick={handleToggleShowPassword}>
                  {showPassword ? <EyeSlash className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                </CustomInputRightElement>
              )}
            </CustomInputGroup>
            {errors.password && (
              <CustomFormErrorMessage>{errors.password.message}</CustomFormErrorMessage>
            )}
          </CustomFormControl>
        </div>

        <Button
          variant="solid"
          color="primary"
          size="lg"
          className="inline-flex w-full"
          loading={loading}>
          Зарегистрироваться
        </Button>
      </form>
    </>
  )
}
