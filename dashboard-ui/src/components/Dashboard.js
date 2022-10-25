import './Dashboard.css'
import { NavLink } from 'react-bootstrap';
import CollageUi from './CollageUi';
import { withRouter } from 'react-router-dom'
import React,{useState} from 'react';

function Dashboard(props) {
  const [homeClr,setHomeClr] = useState('')
  const [sttClr,setSttClr] = useState('')
  const [accClr,setAccClr] = useState('')
  const [supClr,setSupClr] = useState('')
  const [lnkClr,setLnkClr] = useState('')

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('nhance')
    props.history.push('/')
    window.location.reload()
  }

  return (
    <div className='container'>
      <nav style={{ padding: '10px', margin:'2px', backgroundColor:'#000066', boxShadow:'2px 2px 2px lightblue' }}>
        <span style={{ paddingLeft: '15px', paddingTop:'2px', fontFamily:'courier', color: 'white' , fontSize:'25px', textShadow: '1px 1px 3px blue' }}>S A M P L E   website</span>
        <span style={{ paddingTop:'5px' ,paddingRight: '15px', float: 'right', color:'black' }}><a style={{color:'white'}} onClick={handleLogout} href=''><i class="bi bi-door-closed-fill"></i> Logout</a></span>
      </nav>

      <main style={{ paddingTop:'5px',boxShadow:'2px 2px 2px white'  }}>
          <CollageUi/>
      </main>
      
      <div id='side' style={{ backgroundColor:'#e6e6ff' ,fontFamily: 'monospace' ,paddingLeft: '25px', paddingRight: '25px', paddingTop: '25px', fontSize: '18px', boxShadow:'2px 2px 2px #e6e6ff'  }}>
        <NavLink href='/home'><b onMouseEnter={()=>setHomeClr('black')} onMouseLeave={()=>setHomeClr('')} style={{color:homeClr}} ><i style={{color:'black'}} class="bi-house-fill"></i> Home</b></NavLink>
        <hr/>
        <NavLink href='/settings'><b onMouseEnter={()=>setSttClr('black')} onMouseLeave={()=>setSttClr('')} style={{color:sttClr}} ><i style={{color:'black'}} class="bi bi-gear-fill"></i> Settings</b></NavLink>
        <hr/>
        <NavLink><b onMouseEnter={()=>setAccClr('black')} onMouseLeave={()=>setAccClr('')} style={{color:accClr}} ><i style={{color:'black'}} class="bi bi-person-fill"></i> Account</b></NavLink>
        <hr/>
        <NavLink><b onMouseEnter={()=>setSupClr('black')} onMouseLeave={()=>setSupClr('')} style={{color:supClr}} ><i style={{color:'black'}} class="bi bi-headset"></i> Support</b></NavLink>
        <hr/>
        <NavLink><b onMouseEnter={()=>setLnkClr('black')} onMouseLeave={()=>setLnkClr('')} style={{color:lnkClr}} ><i style={{color:'black'}} class="bi bi-signpost-2-fill"></i> Links</b></NavLink>
      </div>
    </div>
  )
}

export default withRouter(Dashboard)
