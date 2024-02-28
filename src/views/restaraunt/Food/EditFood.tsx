import { MealList } from "components/base/List/Meal"
import { SectionList } from "components/base/List/Section"
import { TagsList } from "components/base/List/Tags"
import Typography from "components/base/typography/Text"
import withPageLayout from "views/generalPagelayout"

const EditFood: React.FC = () => {
  return (
    <div>
      <Typography variant="h5">
        Izmeni Jela, Oznake, Tagove i Sekcije
      </Typography>

      <Typography variant="h5">Sekcije</Typography>
      <SectionList />

      <Typography variant="h5">Jela</Typography>
      <MealList />

      <Typography variant="h5">Oznake</Typography>
      <TagsList/>
    </div>
  )
}

const EditFoodPage = withPageLayout(EditFood)
export default EditFoodPage
