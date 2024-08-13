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

export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '22px',
    fontFamily: 'avenir',
    margin: '20px 0', // Use margin instead of <br>
    padding: '0 20px', // Add padding for better spacing on mobile
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
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <Image
                src={Logo}
                alt="Onyx Creative Labs Logo"
                width={300}
                height={75}
              />
            </div>
            <div style={copy}>
              At Onyx Creative Labs, we are a full-service digital marketing and development agency specializing in cutting-edge technology solutions for small businesses and nonprofits. We focus on web development, SEO, content marketing, and more, while also nurturing and developing future tech talent.
            </div>
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
            <div style={{ marginTop: '60px' }}>
              <HowWeWork />
            </div>
            <div style={{ marginTop: '60px' }}>
              <DonationFormWrapper />
            </div>
          </Container>
        </React.Fragment>
      </div>
    </BaseLayout>
  );
}
