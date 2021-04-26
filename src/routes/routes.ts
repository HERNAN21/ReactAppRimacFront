import Loadable from 'react-loadable';
import Loading from "../components/Loading";


import {
  USER_HOME_PATH,
  USER_HOME_TITLE
} from "./home/containers/Home";

import {
  USER_COTIZACION_PATH,
  USER_COTIZACION_TITLE
} from "./cotizacion/containers/Cotizacion";


const HomeView = Loadable({
  loader: () => import("./home/containers/Home"),
  loading: Loading,
});

const HomeDatosView = Loadable({
  loader: () => import("./cotizacion/containers/Cotizacion"),
  loading: Loading,
});

const routes = [
  {
    path: USER_HOME_PATH,
    name: USER_HOME_TITLE,
    component: HomeView,
    // component: './home/containers/Home',
    exact: true
  },
  {
    path: USER_COTIZACION_PATH,
    name: USER_COTIZACION_TITLE,
    component: HomeDatosView,
    // component: './cotizacion/containers/Cotizacion',
    exact: true
  },
];

export const DEFAULT_REDIRECT = USER_HOME_PATH;

export default routes;
