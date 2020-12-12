import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Zoom = () => {
  return (
    <Container className="py-md-5 py-3 text-dark">
      <Row className="py-2">
        <Col md="8">
          <h1 className="font-weight-bold pb-md-3">Join us Virtually!</h1>
          <p className="lead font-weight-normal">
            The CMU VC 2021 will take place virtually. More details to follow
            soon. All are welcomed and encouraged to attend the event online.
          </p>
        </Col>
        <Col md="4">
          <a
            href="https://m.youtube.com/watch?v=J195GeYPf3g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              outline
              color="info"
              style={{ borderRadius: "25px" }}
            >
              View Last Year's Pitches
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

// const Map = () => {
//   return (
//     <Container className="py-md-5 py-3 text-dark">
//       <Row className="py-2">
//         <Col md="8">
//           <h1 className="font-weight-bold pb-md-3">
//             Getting Here <span className="text-danger">(N/A)</span>
//           </h1>
//           <p className="lead font-weight-normal">
//             The CMU VC takes place in the Swartz Center for Entrepreneurship
//             located on the 3rd floor of the Tepper School of Business @ Carnegie
//             Mellon Unversity in Pittsburgh, PA. All are welcomed and encouraged
//             to attend the event.
//           </p>
//         </Col>
//         <Col md="4">
//           <p className="lead font-weight-bold mb-0">
//             Tepper School of Business
//           </p>
//           <p className="lead font-weight-normal">
//             4765 Forbes Ave, <br />
//             Pittsburgh, PA 15213, USA
//           </p>
//           <a
//             href="https://goo.gl/maps/RfbpbjdFVJtsxzHV9"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button
//               size="lg"
//               outline
//               color="info"
//               style={{ borderRadius: "25px" }}
//             >
//               Get Directions
//             </Button>
//           </a>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

export default Zoom;
