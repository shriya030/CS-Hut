import React from "react";
import NotFound from "../Assets/notfound2.svg";
import { Col, Image } from "react-bootstrap";
import "./ErrorPage.css";

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
  );
}
