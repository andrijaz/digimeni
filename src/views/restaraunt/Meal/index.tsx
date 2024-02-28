import withPageLayout from "views/generalPagelayout"
import MealForm from "./form"

function AddMeal() {
  const initialValuesForUpdate = {
    name: "Existing Meal",
    price: 15.99,
    description: "A delicious meal",
    tags: ["Vegetarian", "Gluten-Free"],
    section: "Starter",
  }

  const handleUpdateMeal = (values: any) => {
    // Handle the update logic here
    console.log("Updated meal:", values)
  }

  return (
    <div>
      <h1> Update Meal</h1>
      <MealForm
        initialValues={initialValuesForUpdate}
        onSubmit={handleUpdateMeal}
      />
    </div>
  )
}

const AddMealPage = withPageLayout(AddMeal)
export default AddMealPage
