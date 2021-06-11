import React from 'react'
import { Button, Col, ListGroup, Row, Image, Card} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import Rating from '../Component/Rating'
import products from '../products'

const ProductScreen = ( ) => {
    const { id } = useParams();
    return( <div>
      <h3>{products[{id}].name}</h3>
    </div>
   )
}

export default ProductScreen
