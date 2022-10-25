import React from "react";
import GaugeChart from 'react-gauge-chart'

const GgChart = () => {

    return (
        <div style={{ backgroundColor: 'black' }}>
            <h5 style={{ color: 'white' }}>AQI  Delhi- 350</h5>
            <GaugeChart id="gauge-chart6"
                animate={true}
                nrOfLevels={15}
                percent={0.66}
                needleColor="#789456"
            />
            <hr style={{color:'white'}} />
            <h5 style={{ color: 'white' }}>AQI  Dehradun- 125 </h5>
            <GaugeChart id="gauge-chart6"
                animate={true}
                // nrOfLevels={15}
                percent={0.25}
                needleColor="#789456"
            />
        </div>
    )
}

export default GgChart