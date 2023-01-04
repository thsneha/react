import React from 'react'
import {Card} from 'react-bootstrap'
import{Link} from 'react-router-dom'
function RestaurantCard({data}) {
  // ``--link to $data.id is dynamic and inside the tactic symbol `` before the dollar is static 
  //tactic symbol --->``
  return (
    <div>
    
    <Link to={`restaurant/${data.name}/${data.id}`}>
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
    </Link>
    </div>
  )
}

export default RestaurantCard