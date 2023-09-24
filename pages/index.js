import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.PNG';
import ContactUs from './components/ContactUsform';
import { Button } from 'reactstrap';
import { Button as MuiButton } from '@mui/material';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


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
          <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <center>
        <Image src={Logo} alt="Description of Image" width={300} height={275} />
      </center>
        <h2 style={companyTitle}>
        Onyx Creative Labs: Where Web Development Meets Craftsmanship
      </h2>
        <div style={copy}>
          Just as a barber college hones the art of the perfect trim and style,
          Onyx Creative Labs sharpens your skills in the intricate world of web
          development. Dive into the craftsmanship behind every pixel and line
          of code, and emerge as a master of the digital domain.
        </div>
      </Container>
    </React.Fragment>

        <ContactUs />
            <div>
      {/* <MuiButton variant="contained" color="primary">
        Material-UI Button
      </MuiButton> */}
    </div>
    </div>
  );
}
