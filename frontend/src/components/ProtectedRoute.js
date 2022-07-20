import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

export default function ProtectedRoute({
  children,
  loggedIn,
  path,
  redirectPath,
}) {
  return (
    <Route path="/">{loggedIn ? children : <Redirect to="/signup" />}</Route>
  );
}
