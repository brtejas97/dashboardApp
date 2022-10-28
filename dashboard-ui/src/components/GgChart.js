import React from "react";
import GaugeChart from 'react-gauge-chart'

const GgChart = () => {

    return (
        <div style={{ backgroundColor: '#2f4f4f', borderRadius:'5px'  }}>
            <h6 style={{ color: 'white',paddingLeft:'7px',paddingTop:'5px'}}>Washroom AQI</h6>
            <GaugeChart id="gauge-chart6"
                animate={true}
                nrOfLevels={15}
                percent={0.34}
                needleColor="black"
            />
        </div>
    )
}

export default GgChart