export enum RoutePaths {
  // When somebody visits site directly to check it
  home = '/',
  about = '/about',
  login = '/login',

  // when customer checks restaraunt
  resHome = '/r/:slug',

  // Admin/Owner panel for restraunt
  resHomeAdmin = '/r/:slug/admin',
}

export const buildResHomeUrl = (resSlug: string = '') =>
  RoutePaths.resHome.replace(':slug', resSlug)

export const buildResAdminUrl = (resSlug: string = '') =>
  RoutePaths.resHome.replace(':slug', resSlug)
