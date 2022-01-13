import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import {
  Button,
  Checkbox,
  cx,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  RequiredIndicator,
} from '@vechaiui/react'
import { EnvelopeSimple, Eye, EyeSlash, Key, LockSimple } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordLoginFormSchema } from '../../../utils/validations'
import { CustomFormControl } from '../../Forms/CustomFormControl'
import { CustomFormErrorMessage } from '../../Forms/CustomFormErrorMessage'
import { CustomFormLabel, CustomRequiredIndicator } from '../../Forms/CustomFormLabel'
import { CustomInput } from '../../Forms/CustomInput'
import { CustomInputGroup } from '../../Forms/CustomInputGroup'
import { CustomInputLeftElement } from '../../Forms/CustomInputElement'

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
        <div className="space-y-5 mb-6 mt-6">
          <CustomFormControl invalid={Boolean(errors.email)}>
            <CustomFormLabel>
              Адрес электронной почты <CustomRequiredIndicator />
            </CustomFormLabel>
            <CustomInputGroup>
              <CustomInputLeftElement disabledPointerEvents>
                <EnvelopeSimple weight="light" size={26} className="text-gray-500" />
              </CustomInputLeftElement>
              <CustomInput {...register('email')} placeholder="Ваш адрес электронной почты" />
            </CustomInputGroup>
            {errors.email && (
              <CustomFormErrorMessage>{errors.email.message}</CustomFormErrorMessage>
            )}
          </CustomFormControl>
          <FormControl invalid={Boolean(errors.email)}>
            <FormLabel className="mb-2 font-normal">
              Адрес электронной почты
              <RequiredIndicator />
            </FormLabel>
            <Input.Group>
              <Input.LeftElement className="pointer-events-none text-black">
                <EnvelopeSimple weight="light" size={26} className="text-gray-500" />
              </Input.LeftElement>
              <Input
                className="text-base"
                {...register('email')}
                placeholder="Ваш адрес электронной почты"
              />
            </Input.Group>
            {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormControl>

          <FormControl invalid={Boolean(errors.password)}>
            <FormLabel className="mb-2 font-normal">
              Пароль
              <RequiredIndicator />
            </FormLabel>
            <Input.Group size="lg">
              <Input.LeftElement className="pointer-events-none text-black">
                <Key weight="light" size={26} className="text-gray-500" />
              </Input.LeftElement>
              <Input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Ваш пароль"
              />
              {watchPassword && (
                <Input.RightElement
                  className="w-12 cursor-pointer"
                  onClick={handleToggleShowPassword}>
                  {showPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
                </Input.RightElement>
              )}
            </Input.Group>
            {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
          </FormControl>
        </div>
        <div className="flex justify-between items-center mb-6">
          <Checkbox>
            <span className="font-medium">Запомнить меня</span>
          </Checkbox>

          <Button
            type="button"
            variant="link"
            className="text-blue-600 text-sm font-medium underline">
            Забыли пароль?
          </Button>
        </div>

        <Button
          variant="solid"
          color="primary"
          size="lg"
          className="inline-flex w-full"
          loading={loading}
          leftIcon={<Icon as={LockSimple} label="LockSimple" className="w-6 h-6 mr-2" />}>
          Войти
        </Button>
        <div className="space-y-3 mt-7 flex flex-col justify-center">
          <Tooltip.Root delayDuration={500}>
            <Tooltip.Trigger asChild>
              <Button
                type="button"
                variant="link"
                className="text-blue-600 text-sm font-medium underline text-center"
                onClick={onOpenMagic}>
                Войти с помощью Magic ссылки
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content
              sideOffset={5}
              className={cx(
                'px-3 py-1.5 text-sm leading-4 font-normal shadow-sm rounded-md pointer-events-none break-words text-center',
                'border bg-gray-700 border-gray-600 text-gray-100',
              )}>
              Быстрая аутификация без пароля при помощи <br /> электронной почты
            </Tooltip.Content>
          </Tooltip.Root>
          <Button
            type="button"
            variant="link"
            className="text-blue-600 text-sm font-medium underline text-center"
            onClick={onOpenRegister}>
            Нету аккаунта? Регистрация
          </Button>
        </div>
      </form>
    </>
  )
}
