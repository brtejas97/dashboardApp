import React, {useState} from "react";
import india from './imgs/india.jpg'
import office from './imgs/office.jpg'
import ChartComp from './ChartComp'
import ChartReact from './ChartReact'
import SideComp from "./SideComp";

const TopComp = () => {
    const [c1,setc1] = useState('grey')
    const [c2,setc2] = useState('grey')
    const [c3,setc3] = useState('grey')
    const [c4,setc4] = useState('grey')

    return(
    <div className='row' style={{ backgroundColor: 'grey' }}>
                <div className='col-md-2 p-1' style={{ backgroundColor: 'aliceblue' }}>
                    <SideComp/>
                </div>
                <div className='col-md-10 p-1' style={{ backgroundColor: '#eeeeee' }}>
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-md-6 p-1' onMouseEnter={()=>setc1('black')} onMouseLeave={()=>setc1('grey')} style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c1}` }}>
                                <img className='img-fluid' src={office} style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                            </div>
                            <div className='col-md-3 align-self-center' style={{ backgroundColor: '' }} >
                                <div className='container-fluid'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-5 align-self-center' style={{ padding: '1px' }}>
                                            <div className='card p-2' style={{ height: '27vh', backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c2}`  }} onMouseEnter={()=>setc2('black')} onMouseLeave={()=>setc2('grey')} >
                                                <p style={{ fontWeight: 'bold', fontSize: '12px' }}>Energy consumption</p>
                                                <div className='card-body p-1'>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <h4>
                                                            95.7
                                                        </h4>
                                                        <h6>
                                                            kW
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-7 g-0 align-self-center' style={{ padding: '1px' }}>
                                            <div className='card p-2' onMouseEnter={()=>setc3('black')} onMouseLeave={()=>setc3('grey')}  style={{ height: '27vh', backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c3}` }} >
                                                <p style={{ fontWeight: 'bold', fontSize: '12px' }}> Energy Sources
                                                    <ChartReact chartType={'pie'} />
                                                </p>
                                            </div>
                                        </div>
                                        <div className='container'>
                                            <div className='row justify-content-center'>
                                                <div className='col-md-12 g-0 align-self-center' style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                                                    <div className='card p-0' onMouseEnter={()=>setc3('black')} onMouseLeave={()=>setc3('grey')} style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c3}` }} >
                                                        <ChartReact data={[95,101,88,110,79,25,81,96,73]} color={'#8fef90'} labels={[1,2,3,4,5,6,7,8,9]} chartType={'line'} details={'energy consumption(kW)'} fill={true} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 g-0' >
                                <div className='card' onMouseEnter={()=>setc4('black')} onMouseLeave={()=>setc4('grey')} style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c4}` }}>
                                    <div className='card-body' style={{ height: '43vh' }}>
                                        <h6>Alerts</h6>
                                        <hr />
                                        <i style={{ color: 'red' }} class="bi bi-exclamation-triangle"> </i>
                                        <span style={{ fontSize: '14px' }}>Air pressure High - <b>909</b></span>
                                        <span style={{ float: 'right' }} >
                                            <i style={{ color: 'grey' }} class="bi bi-telephone-fill"> </i>
                                            <i style={{ color: 'grey' }} class="bi bi-person-check-fill"></i>
                                        </span>
                                        <br />
                                        <i style={{ color: 'orange' }} class="bi bi-exclamation-triangle"> </i>
                                        <span style={{ fontSize: '14px' }}>Lumens - <b>13</b></span>
                                        <span style={{ float: 'right' }} >
                                            <i style={{ color: 'grey' }} class="bi bi-telephone-fill"> </i>
                                            <i style={{ color: 'grey' }} class="bi bi-person-check-fill"></i>
                                        </span>
                                        <br />
                                        <i style={{ color: 'orange' }} class="bi bi-exclamation-triangle"> </i>
                                        <span style={{ fontSize: '14px' }}>CO-2 - <b>774</b></span>
                                        <span style={{ float: 'right' }} >
                                            <i style={{ color: 'grey' }} class="bi bi-telephone-fill"> </i>
                                            <i style={{ color: 'grey' }} class="bi bi-person-check-fill"></i>
                                        </span>
                                        <br />
                                        <i style={{ color: 'orange' }} class="bi bi-exclamation-triangle"> </i>
                                        <span style={{ fontSize: '14px' }}>TVOC - <b>37</b></span>
                                        <span style={{ float: 'right' }} >
                                            <i style={{ color: 'grey' }} class="bi bi-telephone-fill"> </i>
                                            <i style={{ color: 'grey' }} class="bi bi-person-check-fill"></i>
                                        </span>
                                    </div>
                                        <span style={{fontSize:'10px', textAlign:'center', paddingBottom:'10px'}} ><a href="#">show all</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TopComp