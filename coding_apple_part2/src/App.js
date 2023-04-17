import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
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

      <div>
        <img style={{height:"300px", "background-size":"cover"}} src="./bg.png"/ >
      </div>

      <Container>
        <Row>
          <Col sm>
            <img width="80%" src="shoes1.jpg"/ >
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col sm>
            <img width="80%" src="shoes2.jpg"/ >
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
          <Col sm>
            <img width="80%" src="https://codingapple1.github.io/shop/shoes3.jpg"/ >
            <h4>상품명</h4>
            <p>상품정보</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
