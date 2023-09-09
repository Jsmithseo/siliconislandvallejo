import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image';
import Logo from '../public/logo.PNG';
import ContactUs from './components/ContactUsform';

export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const companyTitle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'avenir',
  };
  return (
    <div style={MainStyle}>
      <center>
        <Image src={Logo} alt="Description of Image" width={300} height={300} />
      </center>

      <h2 style={companyTitle}>
        Onyx Creative Labs: Where Web Development Meets Craftsmanship
      </h2>
      <Container>
        <div style={copy}>
          Just as a barber college hones the art of the perfect trim and style,
          Onyx Creative Labs sharpens your skills in the intricate world of web
          development. Dive into the craftsmanship behind every pixel and line
          of code, and emerge as a master of the digital domain.
        </div>
        <ContactUs />
      </Container>
    </div>
  );
}
