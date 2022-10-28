import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import TimeComp from "./TimeComp";

const NavComp = (props) => {
    const [ttlClr,setTtlClr] = useState('orange')
    const date = new Date().getDate()
    const month = new Date().getMonth() + 1
    const hours = new Date().getHours()<10 ? '0'+new Date().getHours() : new Date().getHours()
    const minutes = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes()

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('nhance')
        props.history.push('/')
        window.location.reload()
    }

    return(
        <nav className='row p-1' style={{ backgroundColor: 'white' }}>
                <div className='col-md'>
                    <span style={{ paddingLeft: '15px', paddingTop: '2px', fontFamily: 'Verdana', color: ttlClr, fontSize: '25px' }}><a style={{textDecoration:'none',color:ttlClr}} onMouseEnter={()=>setTtlClr('black')} onMouseLeave={()=>setTtlClr('orange')}  href="">dashBoard</a></span>
                </div>
                <div className='col-md'>
                    <span style={{ paddingTop: '5px', paddingRight: '15px', float: 'right', color: 'black' }}>{date}/{month} | <span style={{color:'orange'}}><TimeComp/></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={handleLogout} style={{ color: 'black' }} href=''><i class="bi bi-door-closed-fill"></i> Logout</a></span>
                </div>
        </nav>
    )
}

export default withRouter(NavComp)