import React, { useState } from 'react'
import axios from 'axios'
import style from "./home.module.css"


const Signup = () => {

    let [name,setName]=useState(" ")
    let [phone,setPhone]=useState(" ")
    let [email,setEmail]=useState(" ")
    let [password,setPassword]=useState(" ")

    let handleSubmit=(e)=>{
        e.preventDefault()
        let user={name,phone,email,password}
        axios.post(`http://localhost:8080/users`,user)
        .then((response)=>{
            alert("user saved sucessfully with id:"+response.data.data.id)
            console.log(response)
        })

    }
  return (
    <div >
      <form onSubmit={handleSubmit} id={style.Signupform}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your Name' /> <br />
        <input type="tel"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter Your Phone Number'/> <br />
        <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email Id'/> <br />
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Password'/> <br /><br></br>
        <button id={style.SignUp}>SignUp</button>
      </form>
    </div>
  )
}

export default Signup
