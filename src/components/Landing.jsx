import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../components/landing.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Row, Col, Container } from 'react-bootstrap';

const Landing = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          
            <Col className ="logoContainer">
            <img src={"https://i.imgur.com/IZxCXAF.png"} alt="variablehamburguesa" className="logo" />
            </Col>

            <Col className="buttonContainer">
          <Row>
            
            <Link className="btn btn-outline-light btn-lg" role="button" to="/tableorders"> {" "} Mesero </Link>
            </Row>
            <Row>
            <Link className="btn btn-outline-light btn-lg" role="button" to="/kitchenorders" > {""} Cocina </Link>
            </Row>
            </Col>

         </Row>   
      </Container>
    </Fragment>
  );
};

export default Landing; 


