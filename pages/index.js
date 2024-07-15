import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.PNG';
import ContactUs from './components/ContactUsform';
import { Button as MuiButton } from '@mui/material';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import MaterialContactform from './components/MaterialContactform';
import Button from '@mui/material/Button';
import Link from 'next/link';
import BaseLayout from './components/layouts/BaseLayouts.js';

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
        Welcome to Onyx Creative Labs, your go-to destination for digital marketing excellence. Whether you're a seasoned business owner or just starting off, we are here to supercharge your success. Our proven marketing strategies and innovative tools are designed to help you stand out in the competitive market.
            </div>
            <br></br>
            <center>
              <Link href="https://calendly.com/jeremy-onyxcreativelabs/client-discovery">
                <Button variant="contained" color="primary" type="submit">
                  Schedule Some Time
                </Button>
              </Link>
            </center>
          </Container>
        </React.Fragment>
        <div></div>
      </div>
    </BaseLayout>
  );
}
