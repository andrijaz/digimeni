import withPageLayout from "views/generalPagelayout"
import SectionForm from "./form"
import Button from "components/base/Button"

function AddSection() {
  const initialValuesForUpdate = {
    name: "Starters",
    description: "Selection of easy food to get you going",
  }
  return (
    <div>
      <h1>izmeni Sekciju</h1>
      <SectionForm initialValues={initialValuesForUpdate} />

      <Button onClick={() => console.log("asd")}>adasdasd</Button>
    </div>
  )
}

const SectionPage = withPageLayout(AddSection)
export default SectionPage
