// Atmosphere and NPM
import React from "react";
import ReactDOM, { render } from "react-dom";
import { Meteor } from "meteor/meteor";

// App + Router
// import AppContainer from "../imports/ui/components/app/app.jsx";
import { App } from "../imports/ui/components/app/app.jsx";
// import { default as AppTest } from "../imports/ui/components/app/app.jsx";
// import { AppContainer } from "../imports/ui/components/app/app_container.jsx";
// import { renderRoutes } from "../imports/startup/client/router.js";

// Accounts
import "../imports/startup/client/accounts-config.js";

// Main
import "./main.html";

Meteor.startup(() => {
  // render to the root div
  ReactDOM.render(App(), document.getElementById("root"), (error, result) => {
    if (error) console.log("Error is: " + error.reason);
    if (result) console.log("Result is " + result);
  });
});

/*
imports/
  startup/
    client/
      index.js                 # import client startup through a single index entry point
      routes.js                # set up all routes in the app
      useraccounts-configuration.js # configure login templates
    server/
      fixtures.js              # fill the DB with example data on startup
      index.js                 # import server startup through a single index entry point
  api/
    lists/                     # a unit of domain logic
      server/
        publications.js        # all list-related publications
        publications.tests.js  # tests for the list publications
      lists.js                 # definition of the Lists collection
      lists.tests.js           # tests for the behavior of that collection
      methods.js               # methods related to lists
      methods.tests.js         # tests for those methods
  ui/
    components/                # all reusable components in the application
                               # can be split by domain if there are many
    layouts/                   # wrapper components for behaviour and visuals
    pages/                     # entry points for rendering used by the router
client/
  main.jsx                      # client entry point, imports all client code
server/
  main.js                      # server entry point, imports all server code
*/
