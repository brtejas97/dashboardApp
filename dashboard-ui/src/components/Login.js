import React from "react";
import PrimalForm from "./PrimalForm";

const Login = (props) => {
    
    const formType = 'login'

    return(
        <div>
            <br/>
            <PrimalForm props={props} formType={formType}/>
        </div>
    )
}

export default Login