import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"

const UpdateUser = () => {
    let user=JSON.parse(localStorage.getItem("user"))
    let [name,setName]=useState(user.name)
    let [phone,setPhone]=useState(user.phone)
    let [email,setEmail]=useState(user.email)
    let [password,setPassword]=useState(user.password)
    let[id,setId]=useState(user.id)
    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let user={id,name,phone,email,password}
        axios.put(`http://localhost:8080/users`,user)
        .then((response)=>{
            alert("user updated sucessfully with id:"+response.data.data.id)
            localStorage.setItem("user",JSON.stringify(response.data.data))
            console.log(response)
            navigate("/viewuser")
        })

    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <article id={style.Update}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter your name' /> <br />
        <input type="tel"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter Your Phone Number'/> <br />
        <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email Id'/> <br />
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your Password'/> <br />
        <button>Update</button>
        </article>
      </form>
    </div>
  )
}

export default UpdateUser
