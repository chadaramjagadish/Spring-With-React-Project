import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ViewProducts = () => {

    let [products,setProducts]=useState([])
    let user=JSON.parse(localStorage.getItem("user"))
    let navigate=useNavigate()
    let editProduct=(id)=>{
      axios.get(`http://localhost:8080/products/${id}`).then((response)=>{
        localStorage.setItem("product",JSON.stringify(response.data.data))
        navigate("/editproduct")
      }).catch(()=>{
        alert("something went wrong")
      })
    }

    let deleteProduct=(id)=>{
      axios.delete(`http://localhost:8080/products/${id}`).then((response)=>{
        alert("product deleted sucesfully")
      }).catch(()=>{
        alert("cannot delete product")
      })
    }
    useEffect(()=>{
        let fetchData=()=>{
            axios.get(`http://localhost:8080/products/byuser-id/${user.id}`).then((response)=>{
                setProducts(response.data.data)
            }).catch(()=>{
                alert("Not a Good Request")
            })
        }
        fetchData()
    },[])
  return (
    <div>
      <table border={2}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Image Url</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        {
            products.map((p)=>{
              return(
                <tr>
                  <td>{p.id}</td>
                  <td>{p.brand}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.description}</td>
                  <td>{p.cost}</td>
                  <td>{p.image}</td>
                  <td><button onClick={()=>{editProduct(p.id)}}>edit</button></td>
                  <td><button onClick={()=>{deleteProduct(p.id)}}>Delete</button></td>
                  
                </tr>
              )
            })
        }
      </table>
    </div>
  )
}

export default ViewProducts
