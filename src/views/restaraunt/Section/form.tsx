import { useForm } from "hooks/use-form"

import TextField from "components/base/TextField"
import Button from "components/base/Button"
import Typography from "components/base/typography/Text"
import { SectionFormData, SectionFormProps } from "./types"
import { sectionSchema } from "./section.schema"

const SectionForm: React.FC<SectionFormProps> = ({ initialValues }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SectionFormData>({
    schema: sectionSchema,
    defaultValues: initialValues,
  })

  function updateSection(values: SectionFormData) {
    console.log(values)
  }
  return (
    <>
      <Typography variant="body1">Ime</Typography>
      <TextField id="name" {...register("name")} />

      <Typography variant="body1">Opisa</Typography>
      <TextField id="description" {...register("description")} />

      <Typography variant="body1">Trazi jela i dodaj u sekciju</Typography>
      <TextField id="search-meail" />

      <Typography variant="body1">Trazi ikonice za sekciju</Typography>
      <TextField id="search-icon" />

      <Button type="submit" onClick={handleSubmit(updateSection)}>
        <Typography>Sacuvaj</Typography>
      </Button>
    </>
  )
}

export default SectionForm
