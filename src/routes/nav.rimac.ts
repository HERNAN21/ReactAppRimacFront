import {USER_HOME_PATH} from "./home/containers/Home"

// import { LOGOUT_PATH } from "./public/containers/Logout";

const nav = {
  items: [
    {
      name: "Home",
      icon: "fa fa-credit-card",
      // path: `/Home`,
      path: USER_HOME_PATH,
      direct_link: true
    },
    {
      name: "Cotizacion",
      icon: "fa fa-credit-card",
      path: `/Cotizacion`,
      direct_link: true
    },

    // {
    //   name: "Salir",
    //   path: LOGOUT_PATH,
    //   icon: "fa fa-sign-out-alt",
    //   is_logout: true
    // }
  ]
};

export default nav;
