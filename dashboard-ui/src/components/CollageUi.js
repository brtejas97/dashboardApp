import React, { useState } from "react";
import DshRow1 from "./DshRow1";
import DshRow2 from "./DshRow2";
import india from './imgs/india.jpg'
import ChartComp from './ChartComp'
import ChartReact from './ChartReact'
import { HorBar } from './HorzChart';
import GgChart from './GgChart'
import { withRouter } from 'react-router-dom';
import NavComp from "./NavComp";
import TopComp from "./TopComp";
import BtmLeftComp from "./BtmLeftComp";
import BtmRightComp from "./BtmRightComp";

const CollageUi = (props) => {
    const date = new Date().getDate()
    const month = new Date().getMonth() + 1
    const hours = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()
    const minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('nhance')
        props.history.push('/')
        window.location.reload()
    }

    return (
        <div className='container-fluid' style={{ backgroundColor: '#eeeeee' }}>

            <NavComp />

            <TopComp />

            <div className='row'>
                <div className='col-md-2 p-1' style={{ backgroundColor: 'aliceblue' }}>
                </div>
                <div className='col-md-10 p-1 g-0' >
                    <div className='container-fluid'>
                        <div className='row' >

                            <BtmLeftComp />

                            <BtmRightComp />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CollageUi)