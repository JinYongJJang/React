import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js'
import { useState } from 'react'

function App() {
    let [shoes] = useState(data);

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
                    {
                        shoes.map(function(d, i){
                            return(
                                <Item src={"shoes"+ (i+1) +".jpg"} title={d.title} price={d.price}></Item>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    );
}

function Item(props){
    return (
        <Col sm>
            <img width="80%" src={props.src}/ >
            <h4>{props.title}</h4>
            <p>{props.price}</p>
        </Col>
    )
}
export default App;
