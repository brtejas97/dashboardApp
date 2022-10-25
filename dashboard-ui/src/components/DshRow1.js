import React, {useState} from "react";
import india from './imgs/india.jpg'
import ChartReact from "./ChartReact";

const DshRow1 = () => {
    const [c1,setc1] = useState('')
    const [c2,setc2] = useState('')
    const [c3,setc3] = useState('')
    const [c4,setc4] = useState('')

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexFlow: 'wrap' }} >

            <div  onMouseEnter={()=>setc1('grey')} onMouseLeave={()=>setc1('')} className="card" style={{ width: "27.5rem", height: "16.5rem", backgroundColor: 'white', borderColor: 'white', boxShadow: `5px 5px 5px ${c1||'lightblue'}` }}>
                <div className="card-body">
                    <img src={india} style={{ width: '25.5rem', height: '14.5rem' }} />
                </div>
            </div>

            <div onMouseEnter={()=>setc2('grey')} onMouseLeave={()=>setc2('')} className="card" style={{ width: "16rem", height: "17rem", borderColor: 'white', boxShadow: `5px 5px 5px ${c2||'lightblue'}` }}>
                <div className="card-body">
                    <h6>SARS-CoV-2-cases INDIA</h6>
                    <ChartReact chartType={'line'} labels={['DL', 'KA', 'MP', 'UK']} data={[2.00, 4.06, 1.05, 0.4]} />
                    <ChartReact chartType={'line'} labels={['KL', 'PB', 'MH', 'WB']} data={[6.8, 0.78, 8.1, 2.1]} />
                </div>
            </div>

            <div onMouseEnter={()=>setc3('grey')} onMouseLeave={()=>setc3('')} className="card" style={{ width: "16rem", height: "17.2rem", borderColor: 'white', boxShadow: `5px 5px 5px ${c3||'lightblue'}` }}>
                <div className="card-body">
                    <h6>CoV-2 recoveries (million)</h6>
                    <ChartReact chartType={'pie'} labels={['MH', 'OD', 'KA', 'BH']} data={[7.9, 1.3, 4.02, 0.83]} />
                </div>
            </div>

            <div onMouseEnter={()=>setc4('grey')} onMouseLeave={()=>setc4('')} className="card" style={{ width: "16rem", height: "17rem", borderColor: 'white', boxShadow: `5px 5px 5px ${c4||'lightblue'}` }}>
                <div className="card-header">
                    <h4><i class="bi bi-card-list"></i> To-do List</h4>
                </div>
                <div className="card-body">
                    <span><i class="bi bi-arrow-right-square-fill"></i> 100millions yet to be given second vaccine dose</span>
                </div>
                <div className="card-header">
                    <h4><i class="bi bi-list-check"></i> Accomplished</h4>
                </div>
                <div className="card-body">
                    <span><i class="bi bi-check2-square"></i> 219cr+ vaccination doses</span>
                    <br />
                    <span><i class="bi bi-check2-square"></i> 90cr+ samples tested</span>
                </div>

            </div>
        </div>
    )
}

export default DshRow1