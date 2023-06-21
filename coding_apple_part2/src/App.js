import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">홈</Link>
                    <Link to="/detail">상세페이지</Link>
                </Nav>
            </Container>
            </Navbar>



            <Routes>
                <Route path="/" element={
                    <Container>
                        <div>
                            <img style={{height:"300px", "background-size":"cover"}} src="./bg.png"/ >
                        </div>
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
                } />
                <Route path="/detail" element={ <Detail></Detail> } />
            </Routes>
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

function Detail(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}
export default App;
