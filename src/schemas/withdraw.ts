import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object({
  amount: yup.number().required("Обязательно введите более 0").min(1, "Обязательно введите более 0").default(0),
  destination: yup.string().default(""),
  confirm: yup.bool().default(false),
})

export type TSchemaWithdraw = yup.InferType<typeof schema>
export const resolverSchemaWithdraw = yupResolver(schema)
