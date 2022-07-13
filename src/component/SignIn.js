import React, { Component } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { BrowserRouter, Router ,Route , Link} from 'react-router-dom';


export class SignIn extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:''
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
      <div>
        <Card className='col-5 mx-auto card-center'>
      <Card.Body>
        <h2 className="text-center mb-4">Sign In</h2>
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
          <Button  className="w-100 mt-4" type="submit">
            Sign In
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          {/* <Link to="/forgot-password">Forgot Password?</Link> */}
        </div>
        <div className="w-100 text-center mt-3">
          Already have an Account<Link to="/signup"> Sign Up</Link>
        </div>
      </Card.Body>
    </Card>
      </div>
    )
  }
}

export default SignIn

