import axios from 'axios'
import React, { useState } from 'react'

const EditProduct = () => {
    let p=JSON.parse(localStorage.getItem("product"))
    let [name,setName]=useState(p.name)
    let [brand,setBrand]=useState(p.brand)
    let [category,setCategory]=useState(p.category)
    let [description,setDescription]=useState(p.description)
    let [cost,setCost]=useState(p.cost)
    let [image,setImage]=useState(p.image)
    let [id,setId]=useState(p.id)

    let add=(e)=>{
        let user=JSON.parse(localStorage.getItem("product"))
        e.preventDefault()
        let product={id,name,brand,category,description,image,cost}
        axios.put(`http://localhost:8080/products/${user.id}`,product).then((response)=>{
            alert("product updated with id :"+response.data.data.id)
        }).catch(()=>{
            alert("something went wrong")
        })
    }
  return (
    <div>
      <form onSubmit={add}>
        <label htmlFor="">Name</label>
        <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='enter the name'/> <br />
        <label htmlFor="">Brand</label>
        <input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}} placeholder='enter the brand'/> <br />
        <label htmlFor="">Category</label>
        <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='enter the category' /> <br />
        <label htmlFor="">Description</label>
        <input type="text"  value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='enter the description'/> <br />
        <label htmlFor="">Cost</label>
        <input type="text" value={cost} onChange={(e)=>{setCost(e.target.value)}} placeholder='enter the cost'/> <br />
        <label htmlFor="">Image</label>
        <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}}  placeholder='enter the image url'/> <br />
        <button>Edit Product</button>
      </form>
    </div>
  )
}

export default EditProduct
