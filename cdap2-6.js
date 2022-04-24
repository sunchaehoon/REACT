/*  eslint-disable */   //eslint warning 무시하기

import React, { useState } from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import Data from './data.js';
import Detail from './assist/components/Detail.js';
import styled from "styled-components";

import {Link, Route, Switch} from 'react-router-dom';

function App() {

  let [shoes, chgShoes] = useState(Data);

  return (
    
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/" style={{textDecoration: 'none'}}>Home</Link> </Nav.Link>
              <Nav.Link> <Link to="/detail" style={{textDecoration: 'none'}}>Detail</Link> </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className='container'>
            <div className='row'>         
              {
                shoes.map((shoe, i) => {
                  return (
                    <Card transmitShoes={shoes[i]} transmitI={i} key={i} />
                  );
                })
              }
            </div>
          </div>
        </Route>

        <Route path="/detail" component={Detail} />
      </Switch>
      

    </div>
    
  );
}

function Card(props){
  return (
    <div className='col-md-4'>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.transmitI + 1) + ".jpg"} width="100%" />
      <h4>{props.transmitShoes.title}</h4>
      <p>{props.transmitShoes.content} & {props.transmitShoes.price}</p>
    </div>
  );
}

// className = col-md-4 --> 모바일 화면에서는 세로정렬, 일반 화면에서는 가로정렬
// className = row --> container 안에 있는 것을 가로로 3분할 하기
// 파일 내보내기 : export default 변수명
// 파일 가져오기 : import 변수명 from 경로
// [props 전송법] : <자식컴포넌트 보낼이름={전송할 state} />
// [map 반복문] : { 자료.map((a, i) => {}) } --> return (반복시킬 HTML)
// 자료.map((a, i)) 의 a = 자료의 데이터 하나하나, i = 0부터 하나씩 증가하는 변수 
// Route exact --> 경로가 정확히 일치할 때만 컴포넌트가 실행된다

export default App;
