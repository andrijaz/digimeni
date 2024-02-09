import { useForm } from "hooks/use-form"
import { MealFormData, MealFormProps } from "./types"
import { mealSchema } from "./meal.schema"
import TextField from "components/base/TextField"
import Button from "components/base/Button"
import Typography from "components/base/typography/Text"

const MealForm: React.FC<MealFormProps> = ({ initialValues }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<MealFormData>({
    schema: mealSchema,
    defaultValues: initialValues,
  })

  function updateMeal(values: MealFormData) {
    console.log(values)
  }

  return (
    <>
      <Typography variant="body1">Ime</Typography>
      <TextField id="name" {...register("name")} />

      <Typography variant="body1">Opis</Typography>
      <TextField id="description" {...register("description")} />

      <Typography variant="body1">Cena</Typography>
      <TextField id="price" type="number" {...register("price")} />

      <Typography variant="body1">Sekcija u meniju</Typography>
      <TextField id="section" {...register("section")} />

      <Typography variant="body1">Oznake jela</Typography>
      <TextField id="tags" {...register("tags")} />

      <Button type="submit" onClick={handleSubmit(updateMeal)}>
        <Typography>Sacuvaj</Typography>
      </Button>
    </>
  )
}

export default MealForm
