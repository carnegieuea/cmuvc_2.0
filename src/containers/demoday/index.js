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
                    <div className="py-4">
                        <h6 className="font-weight-bold">SCHEDULE OF EVENTS (EST)</h6>
                        <ul className="list-unstyled font-weight-bold text-info">
                            <li className="py-1">12pm : Introductions + Keynote with Michael Seibel</li>
                            <li className="py-1">12:30pm : Startup Pitches (Part I)</li>
                            <li className="py-1">2:00pm : Lunch Break</li>
                            <li className="py-1">2:30pm : Startup Pitches (Part II)</li>
                            <li className="py-1">4:00pm : Networking Session and Judges Deliberation</li>
                            <li className="py-1">4:30pm : Awards</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DemoDay