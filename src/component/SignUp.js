import React, { Component, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useUserAuth } from '../context/UserAuthContext';

const SignUp = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")
  const navigate = useNavigate();

  const { signup } = useUserAuth();
  const handleChangeemail = (e) => {
    setemail(e.target.value)
  }
  const handleChangepassword = (e) => {
    setpassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await signup(email, password);
      navigate('/')
    } catch (error) {
      seterror(error.message);
    }
  }

  return (
    <div>
      <Card className='col-5 mx-auto card-center'>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChangeemail} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleChangepassword} required />
            </Form.Group>
            {/* <Form.Group id="confirm_password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm_password" onChange={this.handleChange} required/>
          </Form.Group> */}
            <Button className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            Already have an account ?<Link to="/signin"> Sign in</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignUp