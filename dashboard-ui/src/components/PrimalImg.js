import React from "react";
import moneyDashboard from './imgs/moneyDashboard.png'

const PrimalImg = () => {

    return(
        <div style={{display:'flex',justifyContent: 'space-evenly'}}>
            <div className="card" style={{width:'45rem',borderColor:'white'}}>
            <img src={moneyDashboard} />
            </div>
        </div>
    )
}

export default PrimalImg