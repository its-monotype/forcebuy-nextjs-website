import React from 'react'
import { EnvelopeSimple, PaperPlaneRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MagicFormSchema } from '../../../utils/validations'
import { Button } from '../../Button'
import { CustomFormControl } from '../../Forms/CustomFormControl'
import { CustomFormLabel, CustomRequiredIndicator } from '../../Forms/CustomFormLabel'
import { CustomInputGroup } from '../../Forms/CustomInputGroup'
import { CustomInputLeftElement } from '../../Forms/CustomInputElement'
import { CustomInput } from '../../Forms/CustomInput'
import { CustomFormErrorMessage } from '../../Forms/CustomFormErrorMessage'

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
          <CustomFormControl invalid={Boolean(errors.email)}>
            <CustomFormLabel className="mb-3 font-normal">
              Адрес электронной почты
              <CustomRequiredIndicator />
            </CustomFormLabel>
            <CustomInputGroup size="lg">
              <CustomInputLeftElement>
                <EnvelopeSimple weight="light" size={26} className="text-gray-500" />
              </CustomInputLeftElement>
              <CustomInput
                size="lg"
                {...register('email', { required: true })}
                placeholder="Ваш адрес электронной почты"
              />
            </CustomInputGroup>
            {errors.email && (
              <CustomFormErrorMessage>{errors.email.message}</CustomFormErrorMessage>
            )}
          </CustomFormControl>
        </div>

        <Button
          variant="solid"
          color="primary"
          size="lg"
          className="inline-flex w-full"
          loading={loading}
          leftIcon={<PaperPlaneRight className="w-6 h-6 mr-2" />}>
          Отправить Magic ссылку
        </Button>
        <Button
          type="button"
          variant="link"
          color="secondary"
          className="mt-5 underline"
          onClick={onOpenPasswordLogin}>
          Войти с помощью пароля
        </Button>
      </form>
    </>
  )
}
