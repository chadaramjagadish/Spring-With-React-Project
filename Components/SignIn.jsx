import axios from 'axios'
import React, { useState ,} from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const SignIn = () => {
    let [email,setEmail]=useState(" ")
    let [password,setPassword]=useState(" ")
    let navigate=useNavigate()

    let onClick=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/users/verifyByemail?email=${email}&password=${password}`)
        .then((response)=>{
          localStorage.setItem("user",JSON.stringify(response.data.data))
            console.log(response.data.message);
            alert(response.data.message)
            navigate("/userhome")
        }).catch(()=>{
          alert("Invalid Email Id or Password")
          navigate("/")
        })
    }
  return (
    <div id={style.Myform}>
        <article>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your Email Id' />
        <br />
       <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your Password'/>
        <br />
        <button onClick={onClick}>SignIn</button>
        <br />
        <Link to="/signup"><button id={style.SignUp}>SignUp</button></Link>
        </article>
    </div>
  )
}

export default SignIn
