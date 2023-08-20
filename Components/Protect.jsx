import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'

const Protect = ({Child}) => {
    let navigate=useNavigate()

    let verify=()=>{
        let user=localStorage.getItem("user")
        if(user==null){
            return false
        }
        else{
            return true
        }
    }
  return (
    <>
     {
         verify()?<Child/>:(<SignIn/>)
     }
    </>
  )
}

export default Protect
