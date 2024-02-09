export enum RoutePaths {
  // When somebody visits site directly to check it
  home = "/",
  about = "/about",
  login = "/login",

  // when customer checks restaraunt
  resHome = "/r/:slug",
  resMealView = "/r/:slug/m/view/:id",

  // Admin/Owner panel for restraunt
  resHomeAdmin = "/r/:slug/admin",
  resAddMeal = "/r/:slug/admin/m/new",
  resEditMeal = "/r/:slug/admin/m/:id/edit",
  resAddSection = "/r/:slug/admin/s/new",
  resEditSection = "/r/:slug/admin/s/:id/edit",
  resEditMenu = "/r/:slug/admin/menu",
}
export const replaceResSlug = (path: RoutePaths, slug: string) =>
  path.replace(":slug", slug)

export const buildResHomeUrl = (resSlug: string = "") =>
  RoutePaths.resHome.replace(":slug", resSlug)

export const buildResAdminUrl = (resSlug: string = "") =>
  RoutePaths.resHomeAdmin.replace(":slug", resSlug)

export const buildEditMealUrl = (resSlug: string, id: string) =>
  RoutePaths.resEditMeal.replace(":slug", resSlug).replace(":id", id)
