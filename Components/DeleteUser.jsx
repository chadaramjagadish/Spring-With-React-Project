import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"

const DeleteUser = () => {

    let navigate=useNavigate()
    let [password,setPassword]=useState("")
    let onClick=()=>{
        let user=JSON.parse(localStorage.getItem("user"))
        if(password===user.password)
        {
            axios.delete(`http://localhost:8080/users/${user.id}`).then(()=>{
                localStorage.removeItem("user")
                alert("user deleted sucessfully")
                navigate("/")
            }).catch(()=>{
                alert("something went worng")
            })
        }
        else{
            alert("Invalid password")
            navigate("/userhome")
        }
    }
  return (
    <div>
      <form id={style.Delete}>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter the password' /><br></br><br></br>
        <button onClick={onClick} id={style.DeleteButton}>Delete</button>
      </form>
    </div>
  )
}

export default DeleteUser
