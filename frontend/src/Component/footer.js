import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function footer() {
    return (
      <footer>
       <Container>
           <Row>
               <Col ClassName = 'text-center py-3'>
                   Copyright &copy; MyShop
               </Col>
           </Row>
       </Container>
      </footer>
    )
}

export default footer
