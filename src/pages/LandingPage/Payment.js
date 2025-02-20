import React from "react";
import { Button, Card, Image } from "react-bootstrap";
const Payment = () => {
  const paymentSystems = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s",
      title: "বিকাশ সেন্ড মানি",
      Number: "01633920928",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s",
      title: "বিকাশ পেমেন্ট অপশন",
      Number: "01714045039",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwzdqgNUFDY-6BGMOeuWGKIjKMGL_AWQCXw&s",
      title: "নগদ সেন্ড মানি",
      Number: " 01633920928",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Rocket_mobile_banking_logo.svg/250px-Rocket_mobile_banking_logo.svg.png",
      title: "রকেট সেন্ড মানি",
      Number: "016339209284",
    },
  ];
  return (
    <div>
      <div className="py-4 ">
        <h2 className="fs-2 fw-bold text-primary  text-center mb-4">
          We Accept
        </h2>
        <div className="container text-center row justify-content-center gap-3 mx-auto">
          {paymentSystems.map((paymentSystem) => (
            <Card
              style={{ width: "12rem", height: "16rem" }}
              key={paymentSystem.image}
            >
              <Image
                src={paymentSystem.image}
                style={{ width: "200 px ", height: "150px", objectFit: "fill" }}
              />
              <Card.Title className="mt-3 fw-bold">
                {paymentSystem.title}
              </Card.Title>
              <Card.Text className="fw-bold">
                {" "}
                {paymentSystem.Number}{" "}
              </Card.Text>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
