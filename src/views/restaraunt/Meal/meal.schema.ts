import * as yup from "yup"

export const mealSchema = yup.object().shape({
  name: yup.string().optional(),
  description: yup.string().optional(),
  price: yup.number().optional(),
  section: yup.string().optional(),
  tags: yup.string().optional(),  
  // tags: yup.array().of(yup.string()).optional(),
})
