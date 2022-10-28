import React, {useState,useEffect} from "react";

const TimeComp = () => {
    const [hh,sethh] = useState(new Date().getHours()<10 ? '0'+new Date().getHours() : new Date().getHours())
    const [mm,setmm] = useState(new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes())
    const [dd,setdd] = useState(new Date().getDate())
    const [mt,setmt] = useState(new Date().getMonth() + 1)
    // let hh = new Date().getHours()<10 ? '0'+new Date().getHours() : new Date().getHours()
    // let mm = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes()
    // let dd = new Date().getDate()
    // let mt = new Date().getMonth() + 1

    useEffect(()=>{
        setInterval(()=>{
            sethh(new Date().getHours()<10 ? '0'+new Date().getHours() : new Date().getHours())
            setmm(new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes())
            setdd(new Date().getDate())
            setmt(new Date().getMonth() + 1)
        },1000)
    },[])
    

    return(
        <span>
            {hh}:{mm}
        </span>
    )
}

export default TimeComp