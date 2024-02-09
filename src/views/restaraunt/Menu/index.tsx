// @ts-ignore
import withPageLayout from "views/generalPagelayout"
import fake_payload from "./payload"
import { MenuDrag } from "./Drag"

function MenuEditor() {
  const payload = fake_payload
  return (
    <div>
      <h1>Menu preview</h1>
      {/* @ts-ignore */}
      {payload.menu.map((menu, menuIndex) => (
        <div key={menuIndex}>
          <strong>Menu {menuIndex + 1}:</strong> {menu.name} -{" "}
          {menu.description}
          {menu.sections && (
            <ul>
              {/* @ts-ignore */}

              {menu.sections.map((section, sectionIndex) => (
                <li key={sectionIndex}>
                  <strong>Section {sectionIndex + 1}:</strong> {section.name} -{" "}
                  {section.description}
                  {section.meals && (
                    <ul>
                      {/* @ts-ignore */}

                      {section.meals.map((meal, mealIndex) => (
                        <li key={mealIndex}>
                          <strong>Meal {mealIndex + 1}:</strong> {meal.name} -
                          Price: ${meal.price} - Prep Time:{" "}
                          {meal.preparation_time} - Recommended Pair:{" "}
                          {meal.recommended_pair}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <MenuDrag />
    </div>
  )
}

const MenuEditorPage = withPageLayout(MenuEditor)
export default MenuEditorPage
