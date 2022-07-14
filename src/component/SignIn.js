import React, {useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const SignIn = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")
  const navigate = useNavigate();

  const { signin } = useUserAuth();
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
      await signin(email, password);
      navigate('/dashboard')
    } catch (error) {
      seterror(error.message);
    }
  }


    return (
      <div>
        <Card className='col-5 mx-auto card-center'>
      <Card.Body>
        <h2 className="text-center mb-4">Sign In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChangeemail} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handleChangepassword} required/>
          </Form.Group>
          <Button  className="w-100 mt-4" type="submit">
            Sign In
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
          Already have an Account?<Link to="/signup"> Sign Up</Link>
        </div>
      </Card.Body>
    </Card>
      </div>
    )
  }


export default SignIn

