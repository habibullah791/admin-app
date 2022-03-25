import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'


const Input = (props) => {
    return (
        <Form.Group className="mb-3" controlId="forFirstName">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder}/>
        </Form.Group>
    )

}

export default Input;