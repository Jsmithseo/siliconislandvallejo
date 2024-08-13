import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.PNG';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import BaseLayout from './components/layouts/BaseLayouts.js';
import HowWeWork from './components/HowWework';
import DonationFormWrapper from './components/DonationForm';
import Footer from './components/Footer'


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

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Space between buttons
    marginTop: '20px',
  };

  return (
    <BaseLayout>
      <div style={MainStyle}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <br></br>
            <br></br>
            <center>
              <Image
                src={Logo}
                alt="Description of Image"
                width={300}
                height={75}
              />
            </center>
            <br></br>
            <br></br>
            <div style={copy}>
            At Onyx Creative Labs, we are a full-service digital marketing and development agency specializing in cutting-edge technology solutions for small businesses and nonprofits. We focus on web development, SEO, content marketing, and more, while also nurturing and developing future tech talent.


</div>



            <br></br>
            <div style={buttonContainer}>
              <Link href="/contact">
                <Button variant="contained" color="primary" type="submit">
                  Start Project
                </Button>
              </Link>
              <Link href="https://calendly.com/jeremy-onyxcreativelabs/client-discovery">
                <Button variant="contained" color="primary" type="submit">
                  30 mins Free consult
                </Button>
              </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <HowWeWork />
            <DonationFormWrapper/>
        
          </Container>
          <Footer/>
        </React.Fragment>
      </div>
    </BaseLayout>
  );
}
