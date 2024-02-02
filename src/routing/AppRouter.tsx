import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom'
import CustomerHome from 'views/customer/Home'
import RestarauntHome from 'views/restaraunt/Home/Home'
import RestarauntAdminLogin from 'views/restaraunt/Login'
import NotFound from 'views/NotFound'
import { RoutePaths } from './RoutePaths'
const routes: RouteObject[] = [
  { path: '/', element: <CustomerHome /> },
  { path: RoutePaths.login, element: <RestarauntAdminLogin /> },
  { path: RoutePaths.resHomeAdmin, element: <RestarauntHome /> },
  { path: '*', element: <NotFound /> },
]

const router = createBrowserRouter(routes)

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  )
}
