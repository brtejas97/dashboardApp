import React, {useState} from "react";
import { NavLink } from "react-bootstrap";

const SideComp = () => {
    const [homeClr,setHomeClr] = useState('')
    const [sttClr,setSttClr] = useState('')
    const [accClr,setAccClr] = useState('')
    const [supClr,setSupClr] = useState('')
    const [lnkClr,setLnkClr] = useState('')

    return(
        <div id='side' style={{ backgroundColor:'aliceblue' ,fontFamily: 'monospace' ,paddingLeft: '25px', paddingRight: '25px', paddingTop: '25px', fontSize: '15px'}}>
        <NavLink href='/home'><b onMouseEnter={()=>setHomeClr('#4bbad6')} onMouseLeave={()=>setHomeClr('black')} style={{color:homeClr}} ><i style={{color:'black'}} class="bi-house-fill"></i> Home</b></NavLink>
        <hr/>
        <NavLink href='/settings'><b onMouseEnter={()=>setSttClr('#4bbad6')} onMouseLeave={()=>setSttClr('')} style={{color:sttClr}} ><i style={{color:'black'}} class="bi bi-gear-fill"></i> Settings</b></NavLink>
        <hr/>
        <NavLink><b onMouseEnter={()=>setAccClr('#4bbad6')} onMouseLeave={()=>setAccClr('')} style={{color:accClr}} ><i style={{color:'black'}} class="bi bi-person-fill"></i> Account</b></NavLink>
        <hr/>
        <NavLink><b onMouseEnter={()=>setSupClr('#4bbad6')} onMouseLeave={()=>setSupClr('')} style={{color:supClr}} ><i style={{color:'black'}} class="bi bi-headset"></i> Support</b></NavLink>
        <hr/>
        <NavLink><b onMouseEnter={()=>setLnkClr('#4bbad6')} onMouseLeave={()=>setLnkClr('')} style={{color:lnkClr}} ><i style={{color:'black'}} class="bi bi-signpost-2-fill"></i> Links</b></NavLink>
      </div>
    )
}

export default SideComp