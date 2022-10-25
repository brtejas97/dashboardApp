import React from "react";
import FirstUp from "./FirstUp";
import Dashboard from "./Dashboard";

const Primal = () => {
    return(
        localStorage.getItem('nhance') ? <Dashboard/> : <FirstUp/>
    )
}

export default Primal