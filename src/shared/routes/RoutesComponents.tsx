import React, { useEffect, useState } from "react";
import PublicRoute from "./PublicRoute";
import routes from "src/routes";
import { Switch } from "react-router-dom";
import LazyComponent from "../LazyComponent";
import PrivateRoute from "./PrivateRoute";
function RoutesComponents() {
  const [user] = useState("123");
  useEffect(() => {}, []);
  return (
    <Switch>
      {routes.publicRoutes.map((route, index) => (
        <PublicRoute
          user={user}
          key={index}
          path={route.path}
          component={LazyComponent({
            loader: route.loader,
          })}
        />
      ))}

      {routes.privateRoutes.map((route, index) => (
        <PrivateRoute
          key={index}
          user={user}
          path={route.path}
          component={LazyComponent({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponents;
