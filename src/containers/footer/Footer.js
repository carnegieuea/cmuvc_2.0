import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer className="page-footer text-dark py-md-5 py-2 bg-light">
        <Container>
          <Row>
            <Col md="7">
              <Link to="/" className="text-decoration-none text-dark">
                <h4 className="font-weight-bold">CMU Venture Challenge</h4>
              </Link>
              <p>
                Annual international startup pitch competition to win seed
                funding, legal services, and mentorship.
              </p>
            </Col>
            <Col md="5">
              <ul className="list-unstyled">
                <li className="py-1">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/details"
                  >
                    Details
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/sponsor"
                  >
                    Sponsor
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/apply"
                  >
                    Apply
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/faq"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer
        className="page-footer text-white py-2"
        style={{ backgroundColor: "rgb(0, 35, 139)" }}
      >
        <Container>
          <small>
            Copyright &copy; {year && <span>{year}</span>} Carnegie Mellon
            University |{" "}
            <a
              href="https://www.ueacmu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light"
            >
              CMU Undergraduate Entrepreneurship Association.{" "}
            </a>
            All rights reserved.
            <Link
              to="/privacy"
              className="mx-2 ml-md-5 text-decoration-none text-light font-weight-bold"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="mx-2 text-decoration-none text-light font-weight-bold"
            >
              Terms of Service
            </Link>
          </small>
        </Container>
      </footer>
    </div>
  );
}
