import React from 'react'
import style from "./home.module.css"
import { json } from 'react-router-dom'

const ViewUser = () => {
    let user=JSON.parse(localStorage.getItem("user"))
  return (
    <div id={style.ViewU}>
     <article id={style.ViewUser}>
      <h2>Id:{user.id}</h2>
      <h2>Name:{user.name}</h2>
      <h2>Phone:{user.phone}</h2>
      <h2>Email:{user.email}</h2>
     </article>
    </div>
  )
}

export default ViewUser
