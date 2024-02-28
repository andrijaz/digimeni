export interface MealFormProps {
  initialValues: {
    name: string
    price: number
    description: string
    section: string
    tags: string
  }
  onSubmit: (values: any) => void
}
export type MealFormData = MealFormProps["initialValues"]

export const tagsOptions = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Low-Carb",
  "Spicy",
]
