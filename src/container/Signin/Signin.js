import React from 'react'
import '../css/style.css'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'


const Signin = (props) => {
  return (
    <Container className='InputForm'>
      <Row>
        <Col md={{span: 4, offset:4}}>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Col  md={{span :6, offset: 4}}>
            <Button className='subbmitButton' variant="primary" size="lg" active>
              Sign In
            </Button>{' '}
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default Signin