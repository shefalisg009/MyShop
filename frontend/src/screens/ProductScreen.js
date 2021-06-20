import React, {useState,useEffect} from 'react'
import { Button, Col, ListGroup, Row, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from '../Component/Rating'
import axios from 'axios'

const ProductScreen = ( {match}) => {
   const [product, setProduct] =  useState({})

   useEffect(() => {
    const fetchProducts = async () => {
       const {data} = await axios.get(`/api/products/${match.params.id}`)
       
       setProduct(data)
    }

    fetchProducts()

 }, [match])
    return(
      <>
      <Link className = 'btn btn-light my-3' to = '/'>Go Back</Link>
      <Row>
        <Col md = {5}>
          <Image src = {product.image} alt = {product.name}></Image>
        </Col>
        <Col md = {3}>
          <ListGroup varient = 'flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup Item>
              <Rating value = {product.rating} 
              text = {`${product.numReviews} reviews`}/>
            </ListGroup>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md = {3}>
          <ListGroup varient = 'flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                <strong>${product.price}</strong></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <center><Button className = 'btn-dark' type='button' disabled={product.countInStock === 0}>
              Add To Cart
              </Button></center>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
    )
    
}

export default ProductScreen
