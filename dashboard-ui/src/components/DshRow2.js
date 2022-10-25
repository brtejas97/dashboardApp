import React, { useState } from "react";
import ChartReact from "./ChartReact";
import GgChart from "./GgChart";

const DshRow2 = () => {
    const [c5,setc5] = useState('')
    const [c6,setc6] = useState('')
    const [c7,setc7] = useState('')
    const [c8,setc8] = useState('')
    const [c9,setc9] = useState('')

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexFlow: 'wrap' }} >
            <div className="flex" style={{ justifyContent: 'space-evenly', flexFlow: 'wrap' }}>
                <div onMouseEnter={()=>setc5('grey')} onMouseLeave={()=>setc5('')} className="card" style={{ backgroundColor: '#edf0ee', width: '14rem', height: '9rem', borderColor: '#edf0ee', boxShadow: `5px 5px 5px ${c5||'lightblue'}` }} >
                    <div className="card-header">
                        <h4>
                            Inflation
                        </h4>
                    </div>
                    <div className="card-body">
                        <h6>
                            Inflation has substantially risen by 2.19% in last 4 years
                        </h6>
                    </div>
                </div>
                <br />
                <div onMouseEnter={()=>setc6('grey')} onMouseLeave={()=>setc6('')} className="card" style={{ backgroundColor: '#edf0ee', width: '14rem', height: '9rem', borderColor: '#edf0ee', boxShadow: `5px 5px 5px ${c6||'lightblue'}` }}>
                    <div className="card-header">
                        <h4>INR vs USD</h4>
                    </div>
                    <div className="card-body">
                        <h6>
                            In 1947 $1 was ₹4.16, over time, stats have taken exponential path
                        </h6>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div onMouseEnter={()=>setc5('grey')} onMouseLeave={()=>setc5('')} className="card" style={{ backgroundColor: '#edf0ee', width: '14rem', height: '9rem', borderColor: '#edf0ee', boxShadow: `5px 5px 5px ${c5||'lightblue'}` }} >
                    <div className="card-body">
                        <h6>Inflation from 2018</h6>
                        <ChartReact chartType={'bar'} labels={[2018, 2019, 2020, 2021]} data={[3.94, 3.73, 6.62, 5.13]} details={'in percentage'} />
                    </div>
                </div>
                <br />
                <div onMouseEnter={()=>setc6('grey')} onMouseLeave={()=>setc6('')} className="card" style={{ backgroundColor: '#edf0ee', width: '14rem', height: '9rem', borderColor: '#edf0ee', boxShadow: `5px 5px 5px ${c6||'lightblue'}` }}>
                    <div className="card-body">
                        <h6>$ vs ₹ (1947 to 2022)</h6>
                        <ChartReact details={'usd to inr'} chartType={'line'} labels={[1947, 1980, 2000, 2022]} data={[4.16, 7.86, 44.94, 82]} />
                    </div>
                </div>
            </div>


            <div onMouseEnter={()=>setc7('grey')} onMouseLeave={()=>setc7('')} className="card" style={{ width: "16rem", height: '18rem', borderColor: 'white', boxShadow: `5px 5px 5px ${c7||'lightblue'}` }}>
                <div className="card-header">
                    <h6>Revenue (2018)- ₹ 1130460 cr</h6>
                </div>
                <div className="card-header">
                    <h6>Revenue (2019)- ₹ 1214845 cr</h6>
                </div>
                <div className="card-header">
                    <h6>Revenue (2020)- ₹ 1339940 cr</h6>
                </div>
                <div className="card-footer">
                    <h6>Revenue stats</h6>
                    <ChartReact chartType={'line'} labels={[2018, 2019, 2020]} data={[1130460, 1214845, 1339940]} />
                </div>
            </div>

            <div onMouseEnter={()=>setc8('grey')} onMouseLeave={()=>setc8('')} className="card" style={{ width: "16rem", height: '19rem', borderColor: 'white', boxShadow: `5px 5px 5px ${c8||'lightblue'}` }}>
                <div className="card-header">
                    <h6>Annual Data</h6>
                    <ChartReact details={'data'} labels={[2018, 2019, 2020, 2021]} chartType={'line'} />
                </div>
                <div className="card-footer">
                    <h6>Quaterly statistics</h6>
                    <ChartReact details={'stats'} chartType={'bar'} />
                </div>
            </div>

            <div onMouseEnter={()=>setc9('grey')} onMouseLeave={()=>setc9('')} className="card" style={{ backgroundColor: 'black', width: "14.5rem", height: '18.5rem', borderColor: 'white', boxShadow: `5px 5px 5px ${c9||'lightblue'}` }}>
                <div className="card-body" >
                    <GgChart />
                </div>
            </div>
        </div>
    )
}

export default DshRow2