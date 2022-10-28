import React, {useState} from "react";
import GgChart from "./GgChart";
import ChartReact from "./ChartReact";

const BtmRightComp = () => {
    const [c11,setc11] = useState('grey')
    const [c12,setc12] = useState('grey')
    const [c13,setc13] = useState('grey')
    const [c14,setc14] = useState('grey')

    return (
        
        <div className='col-md-6 p-1 g-0 align-self-center ' style={{ borderRadius: '5px' }} >
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-md-12'>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 p-1 align-self-center'>
                                    <div className='card p-1' onMouseEnter={()=>setc11('black')} onMouseLeave={()=>setc11('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c11}`}}>
                                        <ChartReact chartType={'bar'} color={['black','orange','grey']} data={[80,90,70]} labels={['E','S','G']} details={'environmental social governance'} />
                                    </div>
                                </div>
                                <div className='col-md-6 p-0 align-self-center'>
                                    <div className='card p-1' onMouseEnter={()=>setc12('black')} onMouseLeave={()=>setc12('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c12}`, height:'8rem'}}>
                                        <div className="card-body p-0" >
                                            <b style={{ fontSize: '13px', color: 'maroon', padding:'9px' }}>Fault reports</b>
                                            <ul style={{ listStyle: 'none', padding: '6px' }}>
                                                <li><b style={{ fontSize: '11px', padding:'5px' }}><i style={{ color: 'grey' }} class="bi bi-p-square-fill"> </i>
                                                    Parking slots - FULL</b></li>
                                                <li><b style={{ fontSize: '11px', padding:'5px' }}>
                                                    <i style={{ color: 'grey' }} class="bi bi-power"> </i>
                                                    Energy consumption +20%
                                                </b></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center' >
                    <div className='col-md-12'>
                        <div className='container-fluid'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 p-1 align-self-center'>
                                    <div className='card p-1' onMouseEnter={()=>setc13('black')} onMouseLeave={()=>setc13('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c13}`}}>
                                        <GgChart />
                                    </div>
                                </div>
                                <div className='col-md-6 p-1'>
                                    <div className="card p-1" onMouseEnter={()=>setc14('black')} onMouseLeave={()=>setc14('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c14}`, textAlign:'center'}}>
                                        <div className="card-body">
                                        <p style={{ fontWeight: 'bold' }}>Feedback</p>
                                        <i class="bi bi-star-fill"/><i class="bi bi-star-fill"/><i class="bi bi-star-fill"/><i class="bi bi-star-fill"/><i class="bi bi-star-half"/><br />
                                        <b style={{ fontWeight: 'normal' }}>4.6 </b>
                                        <b style={{ fontWeight: 'normal' }}>Average rating</b>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtmRightComp