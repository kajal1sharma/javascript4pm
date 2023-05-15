import React, { useEffect, useState } from 'react'
import axios  from "axios";
const Restaurant = () => {
    const [ dataRestaurant, setDataRestaurant] =useState([])
    useEffect(()=>{

        axios.get("https://the-mexican-food-db.p.rapidapi.com/",{
            headers: {
                'X-RapidAPI-Key': '372e1be677mshb27e20e9a8d6ffbp116237jsn3d8a3869bb79',
                'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
              }
        })
        .then(response=>setDataRestaurant(response.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div>
      <h1>This is chinease Restaurant</h1>
      {dataRestaurant.map(ele=>{
        return <div>
                <img width="200px" height="200px" src={ele.image} alt=""/>
            </div>
      })}
    </div>
  )
}

export default Restaurant
