import React from 'react'
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  RequiredIndicator,
} from '@vechaiui/react'
import { EnvelopeSimple, Eye, EyeSlash, Key, LockSimple, User } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormSchema } from '../../../utils/validations'

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
          <FormControl invalid={Boolean(errors.username)}>
            <FormLabel className="mb-2 font-normal">
              Имя или ник
              <RequiredIndicator />
            </FormLabel>
            <Input.Group size="lg">
              <Input.LeftElement className="pointer-events-none text-black">
                <User weight="light" size={26} className="text-gray-500" />
              </Input.LeftElement>
              <Input size="lg" {...register('username')} placeholder="Ваше имя или ник" />
            </Input.Group>
            {errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}
          </FormControl>

          <FormControl invalid={Boolean(errors.email)}>
            <FormLabel className="mb-2 font-normal">
              Адрес электронной почты
              <RequiredIndicator />
            </FormLabel>
            <Input.Group size="lg">
              <Input.LeftElement className="pointer-events-none text-black">
                <EnvelopeSimple weight="light" size={26} className="text-gray-500" />
              </Input.LeftElement>
              <Input size="lg" {...register('email')} placeholder="Ваш адрес электронной почты" />
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
        <div className="flex items-center mb-6">
          <Checkbox>
            <span className="font-medium">Запомнить меня</span>
          </Checkbox>
        </div>

        <Button
          variant="solid"
          color="primary"
          size="lg"
          className="inline-flex w-full"
          loading={loading}
          leftIcon={<Icon as={LockSimple} label="LockSimple" className="w-6 h-6 mr-2" />}>
          Зарегистрироваться
        </Button>
        <div className="space-y-3 mt-7 flex flex-col justify-center">
          <Button
            type="button"
            variant="link"
            className="text-blue-600 text-sm font-medium underline text-center"
            onClick={onOpenPasswordLogin}>
            Есть аккаунт? Вход
          </Button>
        </div>
      </form>
    </>
  )
}
