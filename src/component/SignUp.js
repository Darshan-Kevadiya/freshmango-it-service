import React, { Component } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import {Link} from 'react-router-dom';
export class SignUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
       confirm_password:''
    }
  }
  handleChange= (e) =>{
    this.setState(prevstate => ({...prevstate , [e.target.name]: e.target.value}))
  }
  handleSubmit= (e) =>{
// console.log(e)
e.preventDefault();
console.log(this.state);
}

  render() {
    return (
      <>
      <Card className='col-5 mx-auto card-center'>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleChange} required/>
          </Form.Group>
          <Form.Group id="confirm_password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm_password" onChange={this.handleChange} required/>
          </Form.Group>
          <Button  className="w-100 mt-4" type="submit">
            Sign Up
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          <Link to="/signin"> Sign in</Link>
        </div>
      </Card.Body>
    </Card>
      </>
    )
  }
}

export default SignUp