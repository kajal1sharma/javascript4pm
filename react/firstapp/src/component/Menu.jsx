import React from 'react'
import  Menu1 from "../delici/menu-image-1.d324a4214e89d2a16259.jpg";
import Menu2 from "../delici/menu-image-10.cedb6922e903ab4051f1.png";
import Menu3 from "../delici/menu-image-11.7be629d8a04827b964cc.jpg";
import Menu4 from "../delici/menu-image-12.d21e54a8cc34de459bc8.jpg";
import Dish from './Dish';
const Menu = () => {
  return (
    <div style={{display:'flex',gap:'200px',width:"100vw"}}>
       <div style={{marginLeft:"100px"}}>
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
       </div>
        
   </div>
  )
}

export default Menu
