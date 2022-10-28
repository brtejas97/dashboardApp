import React, {useState} from "react";
import ChartReact from "./ChartReact";

const BtmLeftComp = () => {
    const [c5,setc5] = useState('grey')
    const [c6,setc6] = useState('grey')
    const [c7,setc7] = useState('grey')
    const [c8,setc8] = useState('grey')

    return (
        <div className='col-md-6 p-1 g-0 align-self-center ' style={{ borderRadius: '5px' }} >
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-md-12'>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 p-1 align-self-center' >
                                    <div className='card p-1' onMouseEnter={()=>setc5('black')} onMouseLeave={()=>setc5('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c5}`}}>
                                        <ChartReact chartType={'line'} fill={true} color={'#bef1fb'} details={'Total Occupancy'} data={[5, 6, 7, 3, 1, 9, 22, 19, 35, 45, 9, 18]} labels={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}/>
                                    </div>
                                </div>
                                <div className='col-md-6 p-1 align-self-center'>
                                    <div className='card p-1' onMouseEnter={()=>setc6('black')} onMouseLeave={()=>setc6('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c6}`}}>
                                        <ChartReact chartType={'bar'} labels={[2, 3, 4, 5, 6, 7]} data={[10, 8, 12, 15, 9, 15, 13, 12]} details={"Booked Desks"} />
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
                                    <div className='card p-1' onMouseEnter={()=>setc7('black')} onMouseLeave={()=>setc7('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c7}`}}>
                                        <ChartReact data={[5,1,3,9,2,4,0,7,9,3]} labels={[1,2,3,4,5,6,7,8,9]} chartType={'line'} details={"Booked meeting rooms"} />
                                    </div>
                                </div>
                                <div className='col-md-6 p-1'>
                                    <div className='container-fluid'>
                                        <div className='row' onMouseEnter={()=>setc8('black')} onMouseLeave={()=>setc8('grey')} style={{backgroundColor: 'white', borderRadius: '5px', boxShadow:`2px 2px 2px ${c8}`}}>
                                            <div className='col-md-4 p-0'>
                                                <div className='card p-0' style={{ borderColor: 'white' }} >
                                                    <div className='card-header' style={{ backgroundColor: 'white', textAlign: 'center', height: '4rem' }} >
                                                        <h6 style={{ color: 'red' }}>910</h6>
                                                        <p style={{ fontSize: '9px', fontWeight:'bold' }}>air pressure</p>
                                                    </div>
                                                    <div className='card-footer' style={{ backgroundColor: 'white', height: '4rem', textAlign: 'center' }}>
                                                        <h6 style={{ color: 'orange' }}>13</h6>
                                                        <p style={{ fontSize: '9px', fontWeight:'bold' }}>lumens</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 p-0'>
                                                <div className='card p-0' style={{ borderColor: 'white' }} >
                                                    <div className='card-header' style={{ backgroundColor: 'white', textAlign: 'center', height: '4rem' }} >
                                                        <h6 style={{ color: 'green' }}>24</h6>
                                                        <p style={{ fontSize: '9px', fontWeight:'bold' }}>temperture</p>
                                                    </div>
                                                    <div className='card-footer' style={{ backgroundColor: 'white', height: '4rem', textAlign: 'center' }}>
                                                        <h6 style={{ color: 'green' }}>949</h6>
                                                        <p style={{ fontSize: '9px', fontWeight:'bold' }}>CO2</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 p-0'>
                                                <div className='card p-0' style={{ borderColor: 'white' }} >
                                                    <div className='card-header' style={{ backgroundColor: 'white', textAlign: 'center', height: '4rem' }} >
                                                        <h6 style={{ color: 'green' }}>49</h6>
                                                        <p style={{ fontSize: '9px', fontWeight:'bold' }}>humidity</p>
                                                    </div>
                                                    <div className='card-footer' style={{ backgroundColor: 'white', height: '4rem', textAlign: 'center' }}>
                                                        <h6 style={{ color: 'orange' }}>48</h6>
                                                        <p style={{ fontSize: '9px', fontWeight:'bold' }}>TVOC</p>
                                                    </div>
                                                </div>
                                            </div>
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

export default BtmLeftComp