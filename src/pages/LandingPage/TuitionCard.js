import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  FaUserGraduate,
  FaUsers,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarDay,
  FaClock,
  FaMoneyBill,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const TuitionCard = () => {
  return (
    <div>
      <Card className="shadow border-0" style={{ width: "300px" }}>
        <Card.Header
          className="bg-primary text-white p-3
      text-center fw-bold d-flex align-items-center justify-content-center"
        >
          <FaUserGraduate className="me-2 text-primary bg-white p-1 rounded-circle" />
          Tuition Code: <span className="ms-1">5662</span>
        </Card.Header>
        <Card.Body>
          {[
            {
              icon: <FaChalkboardTeacher className="text-primary" />,
              label: "Wanted Teacher",
              value: "Female (CU)",
            },
            {
              icon: <FaUsers className="text-primary" />,
              label: "Number of Students",
              value: "1",
            },
            {
              icon: <PiStudentFill className="text-primary" />,
              label: "Class",
              value: "8",
            }, // Changed here
            {
              icon: <FaBook className="text-primary" />,
              label: "Medium",
              value: "Bangla",
            }, // Changed here
            {
              icon: <FaBook className="text-primary" />,
              label: "Subject",
              value: "All",
            }, // Changed here
            {
              icon: <FaCalendarDay className="text-primary" />,
              label: "Day",
              value: "4",
            },
            {
              icon: <FaClock className="text-primary" />,
              label: "Time",
              value: "7 PM",
            },
            {
              icon: <FaMoneyBill className="text-primary" />,
              label: "Salary",
              value: "4000 Taka",
              valueClass: "text-success",
            },
            {
              icon: <FaMapMarkerAlt className="text-primary" />,
              label: "Location",
              value: "Khusumbag Abasik, GEC",
            },
            {
              icon: <FaClock className="text-primary" />,
              label: "Joining",
              value: "As soon as",
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                {item.icon}
                <span className="text-primary fw-semibold flex-grow-1">
                  {item.label}
                </span>
                <span className={`fw-bold ${item.valueClass || ""}`}>
                  {item.value}
                </span>
              </div>
              {index < 9 && <hr />}
            </div>
          ))}
          <Button variant="primary" className="w-100">
            Apply Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TuitionCard;
