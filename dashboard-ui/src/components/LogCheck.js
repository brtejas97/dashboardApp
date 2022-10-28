import React from "react";
import CollageUi from "./CollageUi";
import FirstUp from "./FirstUp";

const LogCheck = () => {

    return(
        <div>
            {
                localStorage.getItem('nhance') ? <CollageUi/> : <FirstUp/>
            }
        </div>
    )
}

export default LogCheck