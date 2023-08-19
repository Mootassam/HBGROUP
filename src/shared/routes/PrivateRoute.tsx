import React from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "../Layout/Footer";
function PrivateRoute({ component: Component, user, ...reset }) {
  return (
    <Route
      render={(props) => {
        if (user === null) {
          return <Redirect to={"/auth/signup"} />;
        }
        return (
          <div>
            <Component {...props} />
            <Footer />
          </div>
        );
      }}
    />
  );
}

export default PrivateRoute;
