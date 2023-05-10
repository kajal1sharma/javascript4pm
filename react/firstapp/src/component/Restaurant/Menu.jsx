import React, { useEffect, useState } from 'react'
import  Menu1 from "../../delici/menu-image-1.d324a4214e89d2a16259.jpg";
import Menu2 from "../../delici/menu-image-10.cedb6922e903ab4051f1.png";
import Menu3 from "../../delici/menu-image-11.7be629d8a04827b964cc.jpg";
import Menu4 from "../../delici/menu-image-12.d21e54a8cc34de459bc8.jpg";
import Dish from './Dish';
import axios from 'axios';
const Menu = () => {

  const [product, setProduct] =useState([]);
  
  useEffect(()=>{
    axios.get('https://the-mexican-food-db.p.rapidapi.com/',{
      headers: {
        'X-RapidAPI-Key': '372e1be677mshb27e20e9a8d6ffbp116237jsn3d8a3869bb79',
        'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
      }
     })
     .then(response=>{
      console.log(response.data)
      setProduct(response.data);
     })
     .catch(err=>{
    
      console.log(err);
     })
        
  },[])
 

  return (
    <div style={{display:'flex',gap:'200px',width:"100vw"}}> 
     {
      product.map(ele=>{
        return <Dish imageUrl={ele.image} title={ele.title}/>
      })
     }
       {/* <div style={{marginLeft:"100px"}}>
        <Dish imageUrl={Menu1} title="Greek Salad"/>
        <Dish imageUrl={Menu2} title="Lasagne"/>
        <Dish imageUrl={Menu3} title="oppu fish"/>
        <Dish imageUrl={Menu4} title="Butter "/>
       </div>
       <div>
       <Dish imageUrl={Menu1} title="Greek Salad"/>
        <Dish imageUrl={Menu2} title="Lasagne"/>
        <Dish imageUrl={Menu3} title="oppu fish"/>
        <Dish imageUrl={Menu4} title="Butter "/>
       </div> */}
        
   </div>
  )
}

export default Menu
