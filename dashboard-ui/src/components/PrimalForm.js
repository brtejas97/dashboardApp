import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios'
import { withRouter } from "react-router-dom";
import swal from 'sweetalert'

const PrimalForm = (props) => {
    const { formType, props: rtrObj } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwdChk, setPwdChk] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const [loginError,setLoginError] = useState('')
    const [regError,setRegError] = useState('')
    const [pwdMsg,setPwdMsg] = useState('')

    // console.log(rtrObj)

    const errors = {}
    const runValidation = () => {
        if (!email.length) errors.email = 'email is missing'
        if (!password.length) errors.password = 'password is missing'
        else if(formType==='register'){
            if(password.length<8||password.length>128) errors.password = 'password must have more than 8 characters'
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoginError('')
        runValidation()
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
        } else {
            setFormErrors({})
            const formData = {
                email,
                password
            }
            if (formType === 'login') {
                axios.post('http://localhost:3050/api/users/login', formData)
                    .then(response => {
                        if (!response.data.errors) {
                            localStorage.setItem('nhance', response.data.token)
                            rtrObj.history.push('/home')
                            window.location.reload()
                        }
                        else {
                            setLoginError(response.data.errors)
                            // alert(response.data.errors)
                        }
                    })
                    .catch(err => {
                        alert(err.message)
                    })
            }
            else if (formType === 'register') {
                axios.post('http://localhost:3050/api/users/register', formData)
                    .then(response => {
                        console.log(response)
                        if (response.data.errors) {
                            setLoginError(response.data.errors)
                        } else {
                            if(response.data.code===11000){ 
                                setRegError('email already registered')
                                setTimeout(()=>window.location.reload(),100000)
                            }
                            else{
                                swal({
                                    title: "Account successfully created!",
                                    text: "redirecting you to Login page",
                                    icon: "success",
                                    button: "okay",
                                })
                                .then(() => {
                                      rtrObj.history.push('/login')
                                  })
                            }
                        }
                    })
                    .catch(err => {
                        alert(err.message)
                    })
            }
        }
    }

    const handleSignup = (e) => {
        e.preventDefault()
        rtrObj.history.push('/register')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        rtrObj.history.push('/login')
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div className="card" style={{ padding: '35px', width:'25rem', backgroundColor: "rgb(2,50,113)", boxShadow: "5px 5px 5px lightblue" }}>
                <h2 style={{color:'white'}}>{ formType==='login' ? 'Login ' : 'Register ' }
                &nbsp;&nbsp;
                <span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}> {loginError}</span>
                <span style={{fontWeight:'bold',color:'red',fontSize:'12px'}}> {regError}</span>
                </h2>
                <form onSubmit={handleSubmit}>
                    <label style={{color:'white'}}>Email: </label> &nbsp;
                    <input style={{ width: '100%' }} type='email' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <b style={{ color: 'red', fontSize: '12px' }}>{formErrors.email && formErrors.email}</b>
                    <br />
                    <br />
                    <label style={{color:'white'}}>Password: </label> &nbsp; <span style={{color:'#a3c2c2',fontSize:'11.5px'}}>{pwdMsg}</span>
                    <input style={{ width: '100%' }} type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={()=>setPwdMsg('password must have minimum 8 characters')} onBlur={()=>setPwdMsg('')} />
                    <b style={{ color: 'red', fontSize: '12px' }}>{formErrors.password && formErrors.password}</b>
                    <br />
                    <br />
                    {
                        formType === 'register' && (
                            <div>
                            <label style={{color:'white'}}>Re-enter password: </label> &nbsp;
                            <input style={{ width: '100%',backgroundColor:(password===pwdChk&&pwdChk.length) && 'rgb(153, 255, 201'}}  type='password' placeholder="password" value={pwdChk} onChange={(e) => setPwdChk(e.target.value)} />
                            <br />
                            <br />
                            </div>
                        )
                    }
                    {
                        formType === 'login' && <Button variant="success" type="submit">Login</Button>
                    }
                    {
                        formType === 'register' && <Button disabled={!(password===pwdChk&&pwdChk.length)} variant="success" type="submit">Sign-up</Button>
                    }
                    <br/>
                    <br/>
                    {
                        formType === 'login' &&  <span style={{color:'white'}}>Don't have an account? <a href="" onClick={handleSignup}>SignUp here</a></span>
                    }
                    {
                        formType === 'register' &&  <span style={{color:'white'}}>Have an account already? <a href="" onClick={handleLogin}>Login</a></span>
                    }

                </form>
            </div>

        </div>
    )
}

export default withRouter(PrimalForm)