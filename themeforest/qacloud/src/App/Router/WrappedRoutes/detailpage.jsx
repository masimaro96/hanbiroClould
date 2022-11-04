import React from "react";
import { Routes, Route, Switch } from 'react-router-dom';
import CloudServices from "../../../homepage/cloud-services/cloudservices";


export default () => (
    <Switch>
        <Route path="/compute-bare-metal" element={<CloudServices />}></Route>
    </Switch>

);