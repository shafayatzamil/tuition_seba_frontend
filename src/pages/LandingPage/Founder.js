import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const Founder = () => {
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(to right, rgb(57, 134, 248), rgba(13, 110, 253, 0.5))",
          color: "white",
        }}
        className=" text-white py-5"
      >
        <Container>
          <Row>
            <Col>
              <div className="text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
                  alt="Founder"
                  className="rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h2 className="mt-3">Md Mahedi Hasan</h2>
                <h4 className="text-white fs-5">Founder & CEO</h4>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHq-vaUK8MlOy8sPlCE5cHlSF9w7jUJ6YDQ&s"
                    alt="Founder"
                    className="rounded-circle img-fluid border"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                    alt="Founder"
                    className="rounded border-white"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col>
              <h2 className="text-white">About Tuition Seba</h2>
              <h4 className="fs-6">
                Tuition Seba একটি সুপ্রতিষ্ঠিত এবং চট্টগ্রাম শহরের অন্যতম একটি
                টিউশন মিডিয়া। আমাদের রয়েছে নিজস্ব অফিস ও দীর্ঘ কয়েক বছরের টিউশন
                ও গৃহশিক্ষক ও শিক্ষিকা দেয়ার অভিজ্ঞতা। আস্থা ও বিশ্বস্ততায় আমরা
                একধাপ এগিয়ে।
              </h4>

              <div className="d-flex">
                <div>
                  <h2 className="fs-3 fw-bold">Our Location</h2>
                  <h4 className="fs-6">
                    25 number shop <br />
                    Sholoshohor Super Market,
                    <br />2 no gate
                  </h4>
                  <h2 className="fs-3 fw-bold">Contact:</h2>
                  <h4 className="fs-6">01540376020</h4>
                </div>

                {/* Embedded Google Map */}
                <div
                  style={{ width: "300px", height: "300px", marginTop: "10px" }}
                >
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, borderRadius: "10px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6562124914373!2d91.78444817607755!3d22.40714197961753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8b2b15cf4c3%3A0x6a4c1f9e6b2fd1e3!2sSholoshohor%20Super%20Market!5e0!3m2!1sen!2sbd!4v1708334123456"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Founder;
