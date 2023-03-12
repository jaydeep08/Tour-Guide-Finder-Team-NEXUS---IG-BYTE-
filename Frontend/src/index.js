/*

=========================================================
* Now UI Kit React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";



import ProfilePage from "views/examples/ProfilePage.js";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-1uicfxxwddywyi8b.us.auth0.com"
    clientId="fHqVEJ4bN4sNcOFdX6HcCCOpoHZwQITd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
   
    <Switch>
      <Switch>
        <Route path="/" render={(props) => <Index {...props} />} />
       
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        
        <Redirect to="/" />
        <Redirect from="/" to="/" />
      </Switch>
    </Switch>
    
  </BrowserRouter>
  </Auth0Provider>
);
