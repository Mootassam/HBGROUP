import React from "react";
import { Route, Redirect  } from "react-router-dom";
function PublicRoute({ component: Component, user ,...reset }) {
 
  return (
    <Route
      {...reset}
      render={(props) => {
       if(user !== null) {
        return <Redirect  to="/"  />
        }
       
        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;
