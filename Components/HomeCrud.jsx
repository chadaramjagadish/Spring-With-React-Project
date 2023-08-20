import React from 'react'
import { Link} from 'react-router-dom'
import style from "./home.module.css"
const HomeCrud = () => {
    
  return (
    <section id={style.nav}>
      <Link to="/signin">VerifyUser</Link>
      <Link to="/userhome">Users</Link>
    </section>
  )
}

export default HomeCrud
