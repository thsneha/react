import React from 'react'
import {Card} from 'react-bootstrap'
function RestaurantCard({data}) {
  
  return (
    <>
    <Card>
        <Card.Img src={data.photograph} className="p-3" variant="top"/>
        <Card.Body>
          <Card.Title >{data.name}</Card.Title>
          <Card.Text>
            <p>Cusine:{data.cuisine_type}</p>
          </Card.Text>
          <Card.Text>{data.neighborhood}</Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default RestaurantCard