import React from "react";
import { Button } from "react-bootstrap";
const HeaderSection = () => {
  return (
    <div>
      <div
        className="bg-primary   text-center p-5 text-light"
        style={{ "--bs-bg-opacity": 0.7 }}
      >
        <h1 className="fs-1 fs-md-3 fs-lg-1 fw-bold text-wrap">
          Find the Perfect Tutor or Tuition
          <br />
          Service
        </h1>
        <h4 className="fs-5  fs-md-3 fs-lg-5 fw-normal mt-3 text-wrap">
          Connect with Expert tutors tailored to educational needs
        </h4>
        <div className="d-flex  justify-content-center align-items-center gap-3 mt-4">
          <Button
            variant="light"
            size="md"
            className="rounded-pill fw-semibold"
          >
            Available Tuition
          </Button>
          {/* <Button variant="light" size="lg" active>Light</Button> */}
          <Button
            variant="outline-light"
            size="md"
            className="rounded-pill fw-semibold"
          >
            Find Tutor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
