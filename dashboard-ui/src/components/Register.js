import React from "react";
import { withRouter } from "react-router-dom";
import PrimalForm from "./PrimalForm";

const Register = (props) => {
    const formType = 'register'

    return(
        <div>
            <br/>
            <PrimalForm props={props} formType={formType}/>
        </div>
    )
}

export default withRouter(Register)