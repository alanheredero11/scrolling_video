/*
  Para cada ruta nueva que se quiera crear se tiene que añadir la ruta aqui para que el routing funcione correctament
*/

export const ROUTES_PATHS = {
  AUTH: {
    DEFAULT: `auth`,
    LOGIN: `login`,
    REGISTER: `sigup`,
  },
  PAGES: {
    HOME: `home`,
    ABOUT: {
      DEFAULT: `about`,
      RESULTS: `results`,
    },
  },
  SERVER: {
    ERROR_404: `404`,
    ERROR_400: `400`,
    ERROR_401: `401`,
    ERROR_403: `403`,
    ERROR_500: `500`,
  },
};

export const INTERNAL_PATHS = {
  /**
   * Auth
   */
  AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAULT}`,
  AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,
  AUTH_REGISTER: `${ROUTES_PATHS.AUTH.REGISTER}`,
  /**
   * PAGES
   */
  PAGES_HOME: `${ROUTES_PATHS.PAGES.HOME}`,
  /**
   * PAGES - ABOUT
   */
  PAGES_ABOUT_DEFAULT: `${ROUTES_PATHS.PAGES.ABOUT.DEFAULT}`,
  PAGES_ABOUT_RESULTS: `${ROUTES_PATHS.PAGES.ABOUT.RESULTS}`,

  /**
   * Server
   */
  SERVER_ERROR_404: `${ROUTES_PATHS.SERVER.ERROR_404}`,
  SERVER_ERROR_401: `${ROUTES_PATHS.SERVER.ERROR_401}`,
  SERVER_ERROR_400: `${ROUTES_PATHS.SERVER.ERROR_400}`,
  SERVER_ERROR_403: `${ROUTES_PATHS.SERVER.ERROR_403}`,
  SERVER_ERROR_500: `${ROUTES_PATHS.SERVER.ERROR_500}`,
};

export const INTERNAL_ROUTES = {
  /**
   * Auth
   */
  AUTH_LOGIN: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
  AUTH_REGISTER: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_REGISTER}`,
  /**
   * Server
   */
  SERVER_ERROR_404: `/${INTERNAL_PATHS.SERVER_ERROR_404}`,
  SERVER_ERROR_401: `/${INTERNAL_PATHS.SERVER_ERROR_401}`,
  SERVER_ERROR_400: `/${INTERNAL_PATHS.SERVER_ERROR_400}`,
  SERVER_ERROR_403: `/${INTERNAL_PATHS.SERVER_ERROR_403}`,
  SERVER_ERROR_500: `/${INTERNAL_PATHS.SERVER_ERROR_500}`,
};
