import React, { useEffect } from 'react'
import {useState} from 'react'
//useparams-extracting the dynamic content from route.
import {useParams} from 'react-router-dom'
import {Row,Col,Image,ListGroup, ListGroupItem,Card} from 'react-bootstrap'
import Rating from './Rating'
function RestaurantDetails() {
    const[datas,setDatas]=useState([])
    const params=useParams()

    const fetchData= async()=>{
        await fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((val)=>setDatas(val.restaurants))
    }
    useEffect(
        ()=>{
            // mounting
            fetchData()
        },[]
        // []--updating in component
    )
    const details=datas.find((i)=>i.id==params.id)

    console.log("details-----",details)
  return (
    <div>
        {
            //ternary operator(instead of if else) ?statement:statement
        details ? (
            <Row className='my-3'>
                <Col md={3}>
                    <Image className='img' src={details.photograph} fluid/>
                </Col>
                <Col md={4}>
                    <ListGroup>
                    <ListGroup.Item>
                        <h2>{details.name}</h2>
                        <p>{details.neighborhood}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>{details.cuisine_type}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{details.address}</p>
                        </ListGroup.Item>
                    </ListGroup>
                        
                </Col>
                <Col>
                <ListGroup>
                    <ListGroupItem>
                        <h4>Operating hours</h4>
                        <p>Monday:{details.operating_hours.Monday}</p>
                        <p>Monday:{details.operating_hours.Tuesday}</p>
                        <p>Monday:{details.operating_hours.Wednesday}</p>
                        <p>Monday:{details.operating_hours.Thursday}</p>
                        <p>Monday:{details.operating_hours.Friday}</p>
                        <p>Monday:{details.operating_hours.Saturday}</p>
                        <p>Monday:{details.operating_hours.Sunday}</p>

                    </ListGroupItem>
                </ListGroup>
                </Col>
               <Row>
                <ListGroup>
                    <Card className='my-3 mx-3 p-3 rounded-card'>
                        <Rating data={details.reviews}/>
                    </Card>

                </ListGroup>
                </Row> 
            </Row>
        ) :'null'//ternary operator instead of if else
        
        }
    </div>
  )
}

export default RestaurantDetails