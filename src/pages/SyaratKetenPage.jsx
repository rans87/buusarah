import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <div>
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
                <p className="text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, consequatur, temporibus qui maiores in vel officiis
                  alias nam sequi et aperiam deleniti quam eligendi iusto? Ullam
                  odio doloribus soluta illum.
                </p>
              </Col>
            </Row>
            <Row className="pt-5">
              <Col>
                <p>
                  "Rangga dan Mata Air Ajaib" Rangga, pemuda desa yang mencintai
                  alam, berpetualang mencari mata air tersembunyi saat desanya
                  dilanda kekeringan. Dengan kecerdikannya membaca petunjuk
                  alam, ia menemukannya di tengah hutan. Air itu menyelamatkan
                  desanya, dan Rangga dikenang sebagai pahlawan yang membawa
                  kehidupan kembali.
                </p>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <h4 className="fw-bold">1. lorem</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem inventore totam corporis dolor veniam adipisci
                  architecto optio nulla vero obcaecati tenetur unde enim rerum
                  doloremque nostrum, itaque blanditiis perferendis provident?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor cum dicta provident, voluptatibus, explicabo quos
                  incidunt quis culpa nemo, recusandae expedita eveniet qui
                  ipsum eligendi accusantium. Sit quia voluptas numquam.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                  culpa iure nihil omnis nisi veniam, provident dolorum quia
                  modi maiores quod inventore repellendus libero eos delectus
                  laboriosam. Sequi, officiis quidem?
                </p>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <h4 className="fw-bold">2. lorem</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nam natus est autem nostrum fuga minus optio deserunt ipsam
                  repellat nisi porro velit, quam, minima eius officiis et
                  recusandae dicta!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis vel magni excepturi ipsam iure distinctio nulla
                  sit voluptate aut expedita qui iste reiciendis, nesciunt
                  obcaecati explicabo rerum aliquam adipisci repellat?
                </p>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                <h4 className="fw-bold">3. lorem</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nam natus est autem nostrum fuga minus optio deserunt ipsam
                  repellat nisi porro velit, quam, minima eius officiis et
                  recusandae dicta!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis vel magni excepturi ipsam iure distinctio nulla
                  sit voluptate aut expedita qui iste reiciendis, nesciunt
                  obcaecati explicabo rerum aliquam adipisci repellat?
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <FaqComponent/>
    </div>
  );
}

export default SyaratKetenPage
