import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';

const MainStyle = {
  overflowX: 'hidden',
  color: '#fff', // White text color for contrast
  minHeight: '100vh', // Ensure it takes the full viewport height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'Avenir, sans-serif',
  textAlign: 'center',
  marginBottom: '20px',
};

const headlineStyle = {
  fontSize: '32px',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '20px',
};

const bioContentStyle = {
  background: '#24252B',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center', // Center text
};

export default function About() {
  return (
    <BaseLayout>
      <div style={MainStyle}>
        <Container>
          <Row>
            <Col md="12">
              <div style={headlineStyle}>Contact Our Team.</div>
            </Col>
            <Col md="12">
              <div style={bioContentStyle}>
                At Onyx Creative Labs, we combine cutting-edge technology with
                the development of future tech talent. Our journey began with
                nearly 15 years of experience in web development and marketing,
                during which we honed our skills with some of the world’s
                leading companies. This experience taught us advanced techniques
                and strategies that led to significant growth—up to 3-4 times—by
                optimizing websites and web apps for conversion and user
                experience. With a passion for supporting small businesses and
                non-profits, we saw an opportunity to bring our expertise to
                those who need it most. We believe that if these strategies can
                propel industry leaders, they can also empower the "little guys"
                to achieve remarkable growth. That's why we founded Onyx
                Creative Labs. Our unique approach involves building
                high-quality websites and web apps through our apprenticeship
                program. Talented developers in our program work on these
                projects, and their code is meticulously reviewed by mentors to
                ensure top-notch results. This process not only delivers
                exceptional value to our clients but also provides students with
                invaluable real-world experience. For our clients, this means
                receiving expertly crafted websites and web apps at a fraction
                of the typical cost. For our students, it means gaining hands-on
                experience while contributing to meaningful projects. Through
                our work, we aim to help small businesses grow and thrive,
                making a significant impact in their respective fields.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
