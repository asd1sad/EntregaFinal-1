import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useAuthContext } from '../Context/AuthContext';

export const Login = () => {
    
    const {login/* ,error */} = useAuthContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }
    
  return (
    

   <Container className="justify-content-center">
                <Row className="text-center">
                    <Col lg={12} className='bg-secondary mt-5 text-white'> 
                        <Form onSubmit={handleSubmit}>
                                <Form.Group className="mt-5 p-2" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                     onChange={handleInputChange}
                                     />
                                </Form.Group>

                                <Form.Group className="p-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" 
                                    onChange={handleInputChange}
                                    />
                                </Form.Group>
                        
                                <Button className="mt-5" variant="tertiary" type="submit">
                                    Submit
                                </Button>
                        </Form>
                    </Col>
                </Row> 
        </Container>
    // !
    // <div className="login-screen">
    //         <div className="login-container">
    //             <h2>Login</h2>
    //             <hr/>

    //             <form onSubmit={handleSubmit}>
    //                 <input
    //                     type={"email"} 
    //                     name="email"
    //                     value={values.email}
    //                     onChange={handleInputChange}
    //                     className="form-control my-4"
    //                     placeholder='Email de usuario'
    //                 />
    //                 {error.email && <small className='text-danger'>{error.email}</small>}

    //                 <input
    //                     type={"password"} 
    //                     name="password"
    //                     value={values.password}
    //                     onChange={handleInputChange}
    //                     className="form-control my-4"
    //                     placeholder='Contraseña'
    //                 />
    //                 {error.password && <small className='text-danger'>{error.password}</small>}

    //                 <br/>
    //                 <button type='submit' className='btn btn-primary'>Enviar</button>
    //             </form>

    //         </div>

    //     </div>
  );
}
      