import './App.css';
// import { Mahmoud, Raslen } from './Components/Raslen';
import Raslen from './Components/Raslen';
// import Mamino from './Components/Raslen';
import zizou from "./2.jpg"
import { Navbar,Container,Nav,Form,Button } from 'react-bootstrap';
function App() {
  return (
    <>
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



      <Raslen/>
      <h1 className='intro'>Intro React</h1>
      <h2 style={{textDecoration : "underline",color:"green"}}>Workshop</h2>
      <img src='/1.jpg' alt='Not Found'/>
      <img src={zizou} alt='Not Found'/>
      {/* <Mamino/> */}
      
      {/* <Mahmoud/>
      <Raslen/> */}
   </>
  );
}

export default App;
