import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function ChartComp(props) {
  const { chartType } = props

  const options = {
    title: {
      text: 'Data Stats'
    },
    series: [{
      type: chartType,
      data: [6, 2, 3, 15, 8]
    }],
    credits: {
      enabled: false
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }

  return (
    // style={{ width:'100%', height:'100%', objectFit:'fill' }}
    // <figure style={{ justifyContent:'space-around', justifyItems:'center', resize:'both' }}>
    //   </figure>
    // <div style={{ justifyContent:'space-evenly', height:'15rem' }}>

    // </div>

    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
}

export default ChartComp;
