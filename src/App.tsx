import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



// Import Containers

import Home from './routes/home/containers/Home'
import Cotizacion from './routes/cotizacion/containers/Cotizacion'
// import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    });
  };

  render() {
    return (
      
      <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              // name="Home"
              component={Home}
            />
            <Route
              exact
              path="/Home"
              // name="Home"
              component={Home}
            />
            <Route
              exact
              path="/cotizacion"
              // name="Home"
              component={Cotizacion}
            />
          </Switch>
      </BrowserRouter>
    );
   
  }
}

export default App;

