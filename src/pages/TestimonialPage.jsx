import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "..//data/index";

import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold animate_animated animatefadeInUp animate_delay-1s">
                Semua testimonial
              </h1>
              <p className="text-center fw-bold animate_animated animatefadeInUp animate_delay-1s">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo dolore fugit commodi, optio reiciendis eos at odio
                quos assumenda, numquam quasi placeat eius maiores corrupti
                temporibus veniam debitis, dolores atque.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <p className="desc shadow-sm">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
