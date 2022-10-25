import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PrimalImg from "./PrimalImg";
import Login from "./Login";
import Register from "./Register";

const FirstUp = () => {
    return(
        <div style={{padding:'10px'}}>
            <h3>Hello user!</h3>
            <h4>Login to access dashboard. Create an account if you don't have one</h4>
            <h4></h4>
            <hr/>
            
            <Button variant="primary" href="/login" >Login</Button>

            &nbsp;&nbsp;&nbsp;

            <Button variant="warning" href="/register" >Register</Button>

            <Route path='/login' component={Login} exact={true} />
            <Route path='/register' component={Register} exact={true} />
            <Route path='/' component={PrimalImg} exact={true} />
            {/* <Route path='/home' component={App} exact={true} /> */}
        </div>
    )
}

export default withRouter(FirstUp)