import { yupResolver } from "@hookform/resolvers/yup"
import {
  FieldValues,
  useForm as useFormOriginal,
  UseFormProps as UseFormPropsOriginal,
  UseFormReturn,
} from "react-hook-form"
import * as Yup from "yup"

interface UseFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends Record<string, unknown> = Record<string, unknown>,
> extends UseFormPropsOriginal<TFieldValues, TContext> {
  schema: Yup.AnyObjectSchema
}

export function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends Record<string, unknown> = Record<string, unknown>,
>(
  props: UseFormProps<TFieldValues, TContext>,
): UseFormReturn<TFieldValues, TContext> {
  const { schema, ...rest } = props
  return useFormOriginal({
    mode: "onSubmit",
    reValidateMode: "onChange",
    criteriaMode: "all",
    //@ts-ignore
    resolver: schema && yupResolver(schema),
    ...rest,
  })
}
