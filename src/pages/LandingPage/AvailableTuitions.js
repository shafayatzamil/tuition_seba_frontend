import React from "react";
import TuitionCard from "./TuitionCard";
import { Form, Button, Row, Col } from "react-bootstrap";

const AvailableTuitions = () => {
  return (
    <div>
      <div>
        <h2 className="text-primary text-center fw-bold mt-5">
          Available Tuitions
        </h2>
        <div className="p-3 bg-light rounded shadow-sm d-flex justify-content-center align-items-center">
          <Row className="g-3 align-items-center">
            {/* Gender Filter */}
            <Col md="3">
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Filter by Gender
                </Form.Label>
                <Form.Select>
                  <option>All</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Search by Tuition Code */}
            <Col md="3">
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Search by Tuition Code
                </Form.Label>
                <Form.Control type="text" placeholder="Enter tuition code" />
              </Form.Group>
            </Col>

            {/* Search by Location */}
            <Col md="3">
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Search by Location
                </Form.Label>
                <Form.Control type="text" placeholder="Enter location" />
              </Form.Group>
            </Col>

            {/* Reset Button */}
            <Col md="3" className="d-flex align-items-end">
              <Button variant="primary" className="w-100">
                Reset Filters
              </Button>
            </Col>
          </Row>
          {/*  */}
        </div>

        {/* tuition card */}
        <div className=" d-flex justify-content-center align-items-center vh-100 bg-ligh gap-4 ">
          <TuitionCard />
          <TuitionCard />
          <TuitionCard />
        </div>
      </div>
    </div>
  );
};

export default AvailableTuitions;
