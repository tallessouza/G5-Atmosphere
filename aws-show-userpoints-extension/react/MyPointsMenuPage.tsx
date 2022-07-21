import React, { Fragment } from "react";
import { Route } from "vtex.my-account-commons/Router";

import UserPoints from "./components/UserPoints";

/* Router */
const MyPointsPage = () => (
  <Fragment>
    <Route exact path="/points" component={UserPoints} />
  </Fragment>
);

export default MyPointsPage;
