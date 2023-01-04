import React, { useEffect } from 'react'
import {useState} from 'react'

function RestaurantDetails() {
    const[datas,setDatas]=useState([])

    const fetchData= async()=>{
        await fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((val)=>setDatas(val.restaurants))
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
    console.log("values-----",datas)
  return (
    <div>
        RestaurantDetails
    </div>
  )
}

export default RestaurantDetails