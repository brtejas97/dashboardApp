import {Chart as ChartJS} from "chart.js/auto"
import {Bar, Doughnut, Line, Pie} from "react-chartjs-2"
import React from "react"

const ChartReact = (props) => {
    // console.log(props)
    const {chartType,data,labels,details} = props
    const chartData = {
        labels: labels || ['Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
        {
            id: 1,
            label: details || 'cases in million',
            data: data || [8.5, -6.6, 3.74, 6.45],
            backgroundColor:['#00ff00','#0066ff','#ffff1a','#d2a679','#cc33ff','red'],
            borderColor:"grey",
            hoverBackgroundColor: "rgba(232,105,90,0.8)",
            borderWidth:0.5
        }
        ]
    }

    return (
        <div style={{ justifyContent:'space-evenly' }}>  
            {
                chartType==='bar' && <Bar data={chartData}/>
            }          
            {
                chartType==='line' && <Line data={chartData}/>
            }          
            {
                chartType==='pie' && <Pie data={chartData}/>
            }          
            {
                chartType==='doughnut' && <Doughnut data={chartData}/>
            }          
            
        </div>
    )
}

export default ChartReact