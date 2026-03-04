"use client"

import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { resolverSchemaWithdraw, TSchemaWithdraw } from "@/schemas/withdraw"

import Button from "@/components/button"
import InputForm from "@/components/input"
import TextArea from "@/components/textarea"

function FormWithdraw() {
  const [loading, setLoading] = useState(false)

  const { handleSubmit, control } = useForm<TSchemaWithdraw>({
    defaultValues: {
      amount: 0,
      destination: "",
      confirm: false,
    },
    resolver: resolverSchemaWithdraw,
  })

  const onSubmit = handleSubmit(async (values) => {
    if (loading) return
    setLoading(true)
  })

  return (
    <form className="w-full flex flex-col gap-4 px-2 md:px-4 lg:px-6 max-w-160" onSubmit={onSubmit}>
      <h3 className="text-3xl font-semibold mb-6">Форма для отправки вывода средст со счёта</h3>
      <Controller
        name="amount"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputForm
            type="number"
            inputMode="numeric"
            label="Сумма для получения средств"
            placeholder="Сумма..."
            {...field}
            onChange={(e) => field.onChange(Number(e.target.value))}
            error={error?.message}
          />
        )}
      />
      <Controller
        name="destination"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextArea
            label="Введите дополнительную информацию"
            placeholder="Дополнительная информация..."
            {...field}
            error={error?.message}
          />
        )}
      />
      <Button type="submit" label="Отправить" loading={loading} disabled={loading} />
    </form>
  )
}

export default FormWithdraw
