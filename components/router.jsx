import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home.jsx";

const AppRouter = (props) => {
    let url = "/";
    let context = {};
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default AppRouter;