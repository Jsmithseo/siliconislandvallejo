import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';

const MainStyle = {
  overflowX: 'hidden',
  color: '#333',
  minHeight: '100vh',
  padding: '50px 0',
  backgroundColor: '#f8f9fa',
};

const headlineStyle = {
  fontSize: '48px',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '40px',
  color: '#343a40',
  fontFamily: 'Avenir, sans-serif',
};

const bioContentStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  marginBottom: '20px',
  fontFamily: 'Avenir, sans-serif',
};

const headings = {
  fontSize: '28px',
  fontWeight: '600',
  color: '#007bff',
  marginTop: '20px',
  marginBottom: '10px',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#555',
};

export default function About() {
  return (
    <BaseLayout>
      <div style={MainStyle}>
        <Container>
          <Row>
            <Col md="12">
              <div style={headlineStyle}>Our Story</div>
            </Col>
            <Col md={{ size: 10, offset: 1 }}>
              <div style={bioContentStyle}>
                <div>
                  <b style={headings}>Vision and Mission</b>
                  <p style={paragraph}>
                    At Onyx Creative Labs, we combine cutting-edge technology
                    solutions with hands-on mentorship to help small businesses
                    thrive and develop future tech talent. Our websites and web
                    apps are built by developers in our apprenticeship program,
                    ensuring that our clients receive high-quality digital
                    products while our students gain invaluable real-world
                    experience.
                  </p>
                </div>
                <div>
                  <b style={headings}>What We Offer</b>
                  <p style={paragraph}>
                    For our clients, this means access to top-tier websites and
                    web apps at a fraction of the usual cost. Each project is
                    meticulously reviewed by a mentor to ensure the highest
                    quality results, benefiting both our clients and our
                    students. Our students gain hands-on experience working with
                    companies in the marketplace, making them well-prepared for
                    future careers in technology.
                  </p>
                </div>
                <div>
                  <b style={headings}>Our Founder’s Journey</b>
                  <p style={paragraph}>
                    After nearly 15 years in the market as a web developer and
                    marketer, I’ve had the privilege of working with some of the
                    best companies in the world. Through my efforts in
                    optimizing websites and web apps for conversion and user
                    experience, I’ve helped companies achieve growth of up to
                    3-4 times. However, I’ve always had a passion for working
                    with small businesses and non-profits, offering them the
                    same leading-edge expertise that industry giants use to
                    scale their operations.
                  </p>
                </div>
                <div>
                  <b style={headings}>The Birth of Onyx Creative Labs</b>
                  <p style={paragraph}>
                    I founded Onyx Creative Labs with the belief that if
                    advanced strategies and technologies can work for industry
                    leaders, they can also empower the “little guys.” Our
                    mission is to help small businesses grow and scale through
                    services like the development of progressive web apps and
                    A/B testing. By leveraging our expertise, we enable our
                    clients to become big fish in a small pond.
                  </p>
                </div>
                <div>
                  <b style={headings}>Commitment to Excellence</b>
                  <p style={paragraph}>
                    At Onyx Creative Labs, we are dedicated to delivering
                    exceptional results for our clients while fostering the next
                    generation of tech talent. Our apprenticeship program not
                    only equips students with practical skills and experience
                    but also ensures that our clients receive the best possible
                    digital solutions. Together, we are building a future where
                    small businesses can thrive and where new tech talent can
                    flourish.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
