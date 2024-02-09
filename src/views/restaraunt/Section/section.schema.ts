import * as yup from "yup"

export const sectionSchema = yup.object().shape({
  name: yup.string().optional(),
  description: yup.string().optional(),
})
