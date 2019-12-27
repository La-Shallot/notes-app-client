import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound"

export default function Routes(){
  return(
    <Switch>
      <Route path = "/" exact component = {Home}/>

      //last one. 404 Not FOund
      <Route component = {NotFound}/>
    </Switch>


  );
}
