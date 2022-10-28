import React from 'react';
// import V1 from './Dashboard';
import './App.css';
// import Primal from './Primal';
import india from './imgs/india.jpg'
import ChartComp from './ChartComp'
import ChartReact from './ChartReact'
import { HorBar } from './HorzChart';
import GgChart from './GgChart'

function App() {
// console.log(new Date().getDate())

  const date = new Date().getDate()
  const month = new Date().getMonth()+1
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()
  

  return (

    <div className='container-fluid'>
      <nav className='row p-1' style={{ backgroundColor: 'white' }}>
        <div className='col-md'>
          <span style={{ paddingLeft: '15px', paddingTop: '2px', fontFamily: 'Verdana', color: 'orange', fontSize: '25px' }}>dashBoard</span>
        </div>
        <div className='col-md'>
          <span style={{ paddingTop: '5px', paddingRight: '15px', float: 'right', color: 'black' }}>{date}/{month} | {hours}:{minutes}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a style={{ color: 'black' }} href=''><i class="bi bi-door-closed-fill"></i> Logout</a></span>
        </div>
      </nav>
      <div className='row'>
        <div className='col-md-2 p-1' style={{ backgroundColor: 'aliceblue' }}>
          sidebar
        </div>
        <div className='col-md-10 p-1' style={{ backgroundColor: 'white' }}>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-md-6' style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                <img className='img-fluid' src={india} />
              </div>
              <div className='col-md-3 align-self-center' style={{ backgroundColor: '' }} >
                <div className='container-fluid'>
                  <div className='row align-items-center'>
                    <div className='col-md-5 align-self-center' style={{ padding: '1px' }}>
                      <div className='card p-2' style={{ height: '27vh' }} >
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
                      <div className='card p-2' style={{ height: '27vh' }} >
                        <p style={{ fontWeight: 'bold', fontSize: '12px' }}> Energy Sources
                          <ChartReact chartType={'pie'} />
                        </p>
                      </div>
                    </div>
                    <div className='container'>
                      <div className='row justify-content-center'>
                        <div className='col-md-12 g-0 align-self-center' style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                          <div className='card p-0'>
                            <ChartReact chartType={'line'} details={'energy consumption'} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3 g-0' style={{ backgroundColor: 'white' }}>
                <div className='card'>
                  <div className='card-body' style={{ height: '47vh' }}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-2 p-1' style={{ backgroundColor: 'aliceblue' }}>
        </div>
        <div className='col-md-10 p-1 g-0' >
          <div className='container-fluid'>
            <div className='row' >
              <div className='col-md-6 p-1 g-0 align-self-center ' style={{ backgroundColor: '', borderRadius: '5px' }} >
                <div className='container-fluid' style={{ backgroundColor: '' }}>
                  <div className='row align-items-center'>
                    <div className='col-md-12'>
                      <div className='container'>
                        <div className='row align-items-center'>
                          <div className='col-md-6 p-1 align-self-center' style={{ backgroundColor: '' }}>
                            <div className='card p-1'>
                              <ChartReact chartType={'line'} fill={true} color={'#6cc7f6'} details={'Total Occupancy'} data={[5, 6, 7, 3, 1, 9, 22, 19, 35, 45, 9, 18]} labels={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />
                            </div>
                          </div>
                          <div className='col-md-6 p-1 align-self-center' style={{ backgroundColor: '' }}>
                            <div className='card p-1'>
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
                          <div className='col-md-6 p-1' style={{ backgroundColor: '' }}>
                            <div className='card p-1'>
                              <ChartReact chartType={'line'} details={"Booked meeting rooms"} />
                            </div>
                          </div>
                          <div className='col-md-6 p-0'>
                            <div className='container-fluid'>
                              <div className='row'>
                                <div className='col-md-4 p-0'>
                                  <div className='card p-0' style={{ borderColor: 'white' }} >
                                    <div className='card-header' style={{ backgroundColor: 'white', textAlign: 'center', height: '4rem' }} >
                                      <h6 style={{ color: 'red' }}>910</h6>
                                      <p style={{ fontSize: '10px' }}>air pressure</p>
                                    </div>
                                    <div className='card-footer' style={{ backgroundColor: 'white', height: '4rem', textAlign: 'center' }}>
                                      <h6 style={{ color: 'orange' }}>13</h6>
                                      <p style={{ fontSize: '10px' }}>lumens</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-md-4 p-0'>
                                  <div className='card p-0' style={{ borderColor: 'white' }} >
                                    <div className='card-header' style={{ backgroundColor: 'white', textAlign: 'center', height: '4rem' }} >
                                      <h6 style={{ color: 'green' }}>24</h6>
                                      <p style={{ fontSize: '10px' }}>temperture</p>
                                    </div>
                                    <div className='card-footer' style={{ backgroundColor: 'white', height: '4rem', textAlign: 'center' }}>
                                      <h6 style={{ color: 'green' }}>949</h6>
                                      <p style={{ fontSize: '10px' }}>CO2</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-md-4 p-0'>
                                  <div className='card p-0' style={{ borderColor: 'white' }} >
                                    <div className='card-header' style={{ backgroundColor: 'white', textAlign: 'center', height: '4rem' }} >
                                      <h6 style={{ color: 'green' }}>49</h6>
                                      <p style={{ fontSize: '10px' }}>humidity</p>
                                    </div>
                                    <div className='card-footer' style={{ backgroundColor: 'white', height: '4rem', textAlign: 'center' }}>
                                      <h6 style={{ color: 'orange' }}>48</h6>
                                      <p style={{ fontSize: '10px' }}>TVOC</p>
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
              <div className='col-md-6 p-1 g-0 align-self-center ' style={{ backgroundColor: '', borderRadius: '5px' }} >
                <div className='container-fluid' style={{ backgroundColor: '' }}>
                  <div className='row align-items-center'>
                    <div className='col-md-12'>
                      <div className='container'>
                        <div className='row align-items-center'>
                          <div className='col-md-6 p-1 ' style={{ width: '16rem' }}>
                            <div className='card p-0'>
                              <ChartReact chartType={'line'} details={'environmental social governance'} />
                            </div>
                          </div>
                          <div className='col-md-6 p-1' style={{ backgroundColor: '' }}>
                            <div className='card p-2' style={{ height: '8rem', width: '17rem' }}>
                              <div className='card-body p-0' >
                                <p style={{ fontWeight: 'bold' }}>Fault reports</p>
                                <span style={{ fontSize: '13px' }}>
                                  <i style={{ color: 'grey' }} class="bi bi-p-square-fill"> </i>
                                  Parking slots - FULL
                                </span> <br />
                                <span style={{ fontSize: '13px' }}>
                                  <i style={{ color: 'grey' }} class="bi bi-power"> </i>
                                  Energy consumption +20%
                                </span> <br />
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
                          <div className='col-md-6 p-1' >
                            <div className='container-fluid' style={{ backgroundColor: '' }}>
                              <div className='row'>
                                <div className='col-md-6 p-1 g-0' >
                                  <div style={{ borderRadius: '5px', width: '15rem' }}>
                                    <GgChart />
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className='col-md-6 p-1'>
                            <div className='card p-1' style={{ height: '8rem', width: '17rem' }}>
                              <div className='card-body' style={{ textAlign: 'center' }}>
                                <p style={{ fontWeight: 'bold' }}>Feedback</p>
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><br />
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

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default App;
