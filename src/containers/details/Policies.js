import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Poliies = () => {
  return (
    <Fragment>
      <Container>
        <Row className="py-md-5 py-3">
          <Col md="12">
            <h3 className="font-weight-bolder py-4">
              Confidentiality | Non-Disclosure Agreements
            </h3>
            <p>
              There is no formal non-disclosure agreement in place for the CMU
              VC. Participant's executive summaries and business plans will only
              be seen by the CMU VC planning committee and the judging panel.
              Neither of those documents will be distributed by the
              Undergraduate Entrepreneurship Association unless explicit
              permission is received from the team.
            </p>
            <p>
              Teams should be aware that the competition is an open event, and
              we are not able to require audience members to sign non-disclosure
              agreements. Confidentiality has never presented a problem in the
              past, and we don't expect any issues to arise from it in the
              future. Feel free to contact us if you have any further questions.
            </p>
          </Col>
        </Row>
        {/* <Row className="py-md-5 py-3">
          <Col md="8">
            <h3 className="font-weight-bolder mb-0">
              Travel Reimbursements Policy{" "}
              <span className="text-danger">(N/A)</span>
            </h3>
            <small>
              * Failure to follow these rules may result in a delayed transfer,
              a limited award, or no reimbursement award at all.
            </small>
            <p className="pt-3">
              For Non-Pittsburgh teams that apply, get accepted, and decide to
              attend the main event in Pittsburgh, travel reimbursements are
              available at the CMU VC committee's discretion. Travel
              reimbursements will be awarded up to a maximum of $700. However,
              for example, if your team asks for $700 in reimbursements, you may
              receive less than you ask from us. Reimbursements are awarded on a
              case-by-case basis based on the current years' budget,
              reimbursements asked, and legitimacy of request.
            </p>
          </Col>
          <Col md="4">
            <p className="font-weight-bold">REQUIREMENTS</p>
            <p>
              <IoIosCheckmarkCircle /> Attend Main Event
            </p>
            <p>
              <IoIosCheckmarkCircle /> Receipts of Expenses
            </p>
            <p>
              <IoIosCheckmarkCircle /> One Individual Responsible for Processing
            </p>
            <p>
              <IoIosCheckmarkCircle /> Request must be submitted within 24 hours
              of event
            </p>
            <p>
              <IoIosCheckmarkCircle /> Payment transfers are not available with
              Venmo, Paypal, WePay, etc.
            </p>
          </Col>
        </Row> */}
        <Row className="py-md-5 py-3">
          <Col>
            <h3 className="font-weight-bolder">Photography / Video Policy</h3>
            <p>
              We love to take photos during our events and feature awesome
              startups on our website, affiliated websites, social media
              platforms, email communications, and other affiliated
              organizations with the CMU Venture Challenge. If you would like
              you or your team to NOT be photographed or videod during the
              event, please let us know. Please note that no notice may result
              in photos and / or videos taken during the course of the event
              that may be repurposed and shared on our various platforms.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Poliies;
