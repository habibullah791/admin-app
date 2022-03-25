import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import '../css/style.css'
import Input from '../UI/Input/Input'


const Signup = (props) => {
  return (
    <Container className='InputForm'>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form >
            <Row>
              <Col md={6}>
                <Input 
                  type = "text"
                  placeholder = "First Name"
                  value = ""
                  label = "First Name"
                  controlId = "forFirstName"
                  onChange = {()=>{}}
                />
              </Col>
              <Col md={6}>
                <Input 
                  type = "text"
                  placeholder = "Last Name"
                  value = ""
                  label = "Last Name"
                  controlId ="forLastName"
                  onChange = {()=>{}}
                />
              </Col>
            </Row>
                <Input 
                  type = "email"
                  placeholder = "Email"
                  value = ""
                  label = "Email"
                  controlId ="forBasicEmail"
                  onChange = {()=>{}}
                />
                <Input 
                  type = "password"
                  placeholder = "Password"
                  value = ""
                  label = "Password"
                  controlId ="forBasicPassword"
                  onChange = {()=>{}}
                />
            <Col md={{ span: 6, offset: 4 }}>
              <Button className='subbmitButton' variant="primary" size="lg" active>
                Sign Up
              </Button>{' '}
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default Signup