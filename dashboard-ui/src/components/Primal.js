import React from "react";
import FirstUp from "./FirstUp";
import Dashboard from "./Dashboard";
import CollageUi from "./CollageUi";

const Primal = () => {
    return(
        <div>
            {
                    localStorage.getItem('nhance') ? <CollageUi/> : <FirstUp/>
            }
        </div>
        
    )
}

export default Primal