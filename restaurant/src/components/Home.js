import React from 'react'
import { Row,Col } from 'react-bootstrap'
import {useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
//This page is doing between Navigation page and footer page
//synchronous fun is executing by line by line
//Asynchronous fun is not to wait for execution(parallel execution) 
//API's are asynchronous fns
//async and await keywords -Api's asynchronous
//aync fnts return promises
//promises has 3 stages
   //1.fullfill 
   //2.pending.
   //3.reject.
function Home() {
  const [items,setItems]=useState([])

  const fetchData=async()=>{
    await fetch('/restaurants.json')
    .then((res)=>res.json())
    //assigned the data into items in useState so setItems method is used
    .then((data)=>setItems(data.restaurants))
  }
//useEffect will automatically execute the home component is call from app.js
  useEffect(()=>{
       fetchData()
  },[])
  console.log("items---",items)

  return (
    <Row>
      {items.map((item)=>(
        <Col sm={12} md={8} lg={6} xl={3}>
        <RestaurantCard  data={item}/>
       </Col>

      )
      )}
      
    </Row>
  )
}

export default Home