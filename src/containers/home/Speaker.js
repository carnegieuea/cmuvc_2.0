import React from "react";
import { Container, Row, Col } from "reactstrap";
import michael from "../../assets/avatars/michael.png"

const Speaker = () => {
  return (
      <div className="bg-dark text-white">
        <Container className="py-md-5 py-3">
            <Row className="py-md-5 py-2">
                <Col lg="7">
                    <p className="lead text-uppercase">Keynote Speaker</p>
                    <h1 className="font-weight-bold">
                        Michael Seibel
                    </h1>
                    <p className="lead text-uppercase">CEO & Partner @ Y Combinator</p>
                    <p className="font-weight-normal">
                    Michael Seibel is a Partner at YC and CEO of YC's startup accelerator. He was the cofounder and CEO Justin.tv and Socialcam. Socialcam sold to Autodesk in 2012 and under the leadership of Emmett Shear, Justin.tv became Twitch.tv and sold to Amazon in 2014. Before getting into startups, he spent a year as the finance director for a US Senate campaign and in 2005, Michael graduated from Yale University with a BA in political science.
                    </p>
                </Col>
                <Col lg="5">
                    <img src={michael} alt="michael-seibel-yc" className="rounded-circle d-block w-75 mx-auto" />
                   
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Speaker;
