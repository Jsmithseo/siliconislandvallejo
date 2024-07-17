import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';

const MainStyle = {
  overflowX: 'hidden',
  backgroundColor: '#000', // Make the entire page black
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
                After nearly 15 years of working in the market as a web
                developer and marketer, I have learned cutting-edge techniques
                and strategies by working with some of the best companies in the
                world. My efforts in optimizing websites and web apps for
                conversion and better user experience have helped the companies
                I worked for achieve growth of up to 3-4 times. I have always
                wanted to work with small companies and non-profits, offering
                them leading-edge expertise to scale their businesses. I figured
                that if these strategies could work with industry leaders, they
                could also help the “little guys.” That's why I formed Onyx
                Creative Labs, a digital marketing company aimed at helping
                small businesses grow and scale. By offering services like the
                development of progressive web apps and A/B testing, I have
                helped my clients become big fish in a small pond.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
