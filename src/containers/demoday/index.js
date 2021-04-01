import React from "react"
import {
    Container,
    Row,
    Col  } from "reactstrap";

const DemoDay = () => {
    return (
        <Container className="py-5 text-center">
            <Row className="text-center">
                <Col className="pb-4">
                    <h1 className="display-5 font-weight-bolder text-black">
                    Demo Day 2021.
                    </h1>
                    <p className="lead">The link to view the CMU Venture Challenge 2021 Powered By Accel Demo Day will be released shortly.</p>

                    {/* <Button
                        tag="a"
                        disabled
                        href="https://www.pralent.com/challenges/cmuvc-2021"
                        color="warning"
                        size="md"
                        className="mx-1"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        View Demo Day
                    </Button> */}
                </Col>
            </Row>
        </Container>
    )
}

export default DemoDay