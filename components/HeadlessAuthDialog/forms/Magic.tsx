import React from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  RequiredIndicator,
} from '@vechaiui/react'
import { EnvelopeSimple, PaperPlaneRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MagicFormSchema } from '../../../utils/validations'

interface MagicProps {
  onOpenPasswordLogin: () => void
}

export const Magic: React.FC<MagicProps> = ({ onOpenPasswordLogin }) => {
  const [loading, setLoading] = React.useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(MagicFormSchema),
  })
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
        <div className="space-y-5 mb-5 mt-5">
          <FormControl invalid={Boolean(errors.email)}>
            <FormLabel className="mb-3 font-normal">
              Адрес электронной почты
              <RequiredIndicator />
            </FormLabel>
            <Input.Group size="lg">
              <Input.LeftElement className="pointer-events-none text-black">
                <EnvelopeSimple weight="light" size={26} className="text-gray-500" />
              </Input.LeftElement>
              <Input
                size="lg"
                {...register('email', { required: true })}
                placeholder="Ваш адрес электронной почты"
              />
            </Input.Group>
            {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormControl>
        </div>

        <Button
          variant="solid"
          color="primary"
          size="lg"
          className="inline-flex w-full"
          loading={loading}
          leftIcon={<Icon as={PaperPlaneRight} label="LockSimple" className="w-6 h-6 mr-2" />}>
          Отправить Magic ссылку
        </Button>
        <Button
          type="button"
          variant="link"
          className="text-blue-600 text-sm font-medium underline mt-5"
          onClick={onOpenPasswordLogin}>
          Войти с помощью пароля
        </Button>
      </form>
    </>
  )
}
