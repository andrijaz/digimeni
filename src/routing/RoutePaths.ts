import { localStorageName } from "context/GlobalContext"

export enum RoutePaths {
  // When somebody visits site directly to check it
  home = "/",
  about = "/about",
  login = "/r/login",

  // when customer checks restaraunt
  resHome = "/r/:slug",
  resMealView = "/r/:slug/m/view/:id",

  // Admin/Owner panel for restraunt
  // Account related urls
  resHomeAdmin = "/r/:slug/admin",
  resAdminAccount = "/r/:slug/admin/account",
  // Food related urls
  resAddMeal = "/r/:slug/admin/m/new",
  resEditMeal = "/r/:slug/admin/m/:id/edit",
  resAddSection = "/r/:slug/admin/s/new",
  resEditSection = "/r/:slug/admin/s/:id/edit",
  resEditMenu = "/r/:slug/admin/menu",
  resEditFood = "/r/:slug/admin/editFood",
}


const restarauntSlug = localStorage.getItem(localStorageName.name) || "unknown"

export const replaceResSlug = (path: RoutePaths) =>
  path.replace(":slug", restarauntSlug)

export const buildResHomeUrl = (resSlug: string = "") =>
  RoutePaths.resHome.replace(":slug", restarauntSlug)

export const buildResAdminUrl = () =>
  RoutePaths.resHomeAdmin.replace(":slug", restarauntSlug)

export const buildAddMealUrl = () =>
  RoutePaths.resAddMeal.replace(":slug", restarauntSlug)

export const buildEditMealUrl = (mealId: string) =>
  RoutePaths.resEditMeal.replace(":slug", restarauntSlug).replace(":id", mealId)

export const buildEditSectionlUrl = (sectionId: string) =>
  RoutePaths.resEditSection.replace(":slug", restarauntSlug).replace(":id", sectionId)

export const buildEditFoodUrl = () =>
  RoutePaths.resEditFood.replace(":slug", restarauntSlug)

export const buildAccPageUrl = () =>
  RoutePaths.resAdminAccount.replace(":slug", restarauntSlug)