import React from 'react';
import NotFound from '../Assets/notfound2.svg';
import {  Col, Image } from 'react-bootstrap';
import   './ErrorPage.css';

export default function ErrorPage() {
    return (
        <div>
            <div className="Container">
            <p className="NotFoundMessage">
            The page you are looking for doesn’ t exist!
          </p>
          <Col className="ImgColumn">
            <Image
              className="NotFoundImage" 
              src={NotFound}
              alt="Page Not Found" 
            />
          </Col>
        </div>
        </div>
    )
}

/*
import React from 'react';
import NotFound from '../Assets/notfound2.svg';
import { Jumbotron, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import   './ErrorPage.css';

const PageNotFound = () => {
  return (
    <div >
      <Jumbotron className="Jumbotron">
        <div className="Container">
          <Col className="ImgColumn">
            <Image
              className="NotFoundImage" 
              src={NotFound}
              alt="Page Not Found" 
            />
          </Col>
          <p className="NotFoundMessage">
            The page you are looking for doesn’ t exist!
          </p>
          <p className="NotFoundMessage">
            You may have mistyped the address or page maybe removed.
          </p>
          <div className="NotFoundButtonDiv">
            <Link className="NotFoundButtonLin" to="/">
            <button variant="contained">Take me home</button>
              
            </Link>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default PageNotFound;
*/