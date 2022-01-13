import React from 'react'
import { EnvelopeSimple, Eye, EyeSlash, Key } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordLoginFormSchema } from '../../../utils/validations'
import { CustomFormControl } from '../../Forms/CustomFormControl'
import { CustomFormErrorMessage } from '../../Forms/CustomFormErrorMessage'
import { CustomFormLabel, CustomRequiredIndicator } from '../../Forms/CustomFormLabel'
import { CustomInput } from '../../Forms/CustomInput'
import { CustomInputGroup } from '../../Forms/CustomInputGroup'
import { CustomInputLeftElement, CustomInputRightElement } from '../../Forms/CustomInputElement'
import { Button } from '../../Button'
import { Tooltip } from '../../Tooltip'

interface PasswordLoginFormProps {
  onOpenMagic: () => void
  onOpenRegister: () => void
}

export const PasswordLogin: React.FC<PasswordLoginFormProps> = ({
  onOpenMagic,
  onOpenRegister,
}) => {
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
    resolver: yupResolver(PasswordLoginFormSchema),
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
        <div className="space-y-6 mb-5 mt-6">
          <CustomFormControl invalid={Boolean(errors.email)}>
            <CustomFormLabel>
              Адрес электронной почты <CustomRequiredIndicator />
            </CustomFormLabel>
            <CustomInput
              size="lg"
              {...register('email')}
              placeholder="Ваш адрес электронной почты"
            />
            {errors.email && (
              <CustomFormErrorMessage>{errors.email.message}</CustomFormErrorMessage>
            )}
          </CustomFormControl>
          <CustomFormControl invalid={Boolean(errors.password)}>
            <CustomFormLabel>
              Пароль <CustomRequiredIndicator />
            </CustomFormLabel>
            <CustomInputGroup size="lg">
              <CustomInput {...register('password')} placeholder="Ваш пароль" />
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
          Войти
        </Button>

        <div className="mt-3 flex justify-center">
          <Button type="button" variant="link" className="underline">
            Не можете войти?
          </Button>
        </div>
      </form>
    </>
  )
}
