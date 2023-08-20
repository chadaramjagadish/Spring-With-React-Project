import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./home.module.css"

const Userhome = () => {
  let navigate=useNavigate()
  let logout=()=>{
    localStorage.removeItem("user")
    navigate("/")
  }
  return (
    <div id={style.UserH}>
    <article>
    <Link to={"/viewuser"}><h2 id={style.Home}>View Profile</h2></Link>
    <Link to={"/updateuser"}><h2>Edit Profile</h2></Link>
    <Link to={"/deleteuser"}><h2>Delete Profile</h2></Link>
    <Link to={"/addproduct"}><h2>Add Product</h2></Link>
    <Link to={"/viewproducts"}> <h2>View Products</h2> </Link>
    <button onClick={logout} id={style.Logout}>Logout</button>
    </article>
    </div>
  )
}

export default Userhome
