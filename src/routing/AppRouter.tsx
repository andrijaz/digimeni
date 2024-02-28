import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom"
import CustomerHome from "views/customer/Home"
import RestarauntHome from "views/restaraunt/Home/Home"
import RestarauntAdminLogin from "views/restaraunt/Login"
import NotFound from "views/NotFound"
import { RoutePaths } from "./RoutePaths"
import AddMealPage from "views/restaraunt/Meal"
import SectionPage from "views/restaraunt/Section"
import MenuEditorPage from "views/restaraunt/Menu"
import EditFoodPage from "views/restaraunt/Food/EditFood"

const routes: RouteObject[] = [
  { path: RoutePaths.home, element: <CustomerHome /> },
  { path: RoutePaths.login, element: <RestarauntAdminLogin /> },
  { path: RoutePaths.resHomeAdmin, element: <RestarauntHome /> },
  { path: RoutePaths.resAddMeal, element: <AddMealPage /> },
  { path: RoutePaths.resEditMeal, element: <AddMealPage /> },
  { path: RoutePaths.resEditMenu, element: <MenuEditorPage /> },
  { path: RoutePaths.resEditSection, element: <SectionPage /> },
  { path: RoutePaths.resAddSection, element: <SectionPage /> },
  { path: RoutePaths.resEditFood, element: <EditFoodPage /> },

  { path: "*", element: <NotFound /> },
]

const router = createBrowserRouter(routes)

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  )
}
