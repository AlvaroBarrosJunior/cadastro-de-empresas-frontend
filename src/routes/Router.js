import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CompanyDetailsScreen from "../screens/CompanyDetailsScreen/CompanyDetailsScreen";
import CompanyRegisterScreen from "../screens/CompanyRegisterScreen/CompanyRegisterScreen";
import CompanyUpdateScreen from "../screens/CompanyUpdateScreen/CompanyUpdateScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomeScreen />
        </Route>
        <Route exact path={"/cadastro"}>
          <CompanyRegisterScreen />
        </Route>
        <Route exact path={"/empresa/:id"}>
          <CompanyUpdateScreen />
        </Route>
        <Route exact path={"/detalhes/:id"}>
          <CompanyDetailsScreen />
        </Route>

        <Route>
          <div>Erro 404 - Página não encontrada :(</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
