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
          <h2 style={companyTitle}>
            Onyx Creative Labs: Where leading edge meets boots on the ground
          </h2>
          <div style={copy}>
          we collaborate with non-profit organizations and government entities, employing Scrum and Agile project management techniques to facilitate scalability and growth.
          </div>
          <br></br>
          <center>
            <Link href="https://www.calendly.com/softwaresmitty/30min">
            <Button variant="contained" color="primary" type="submit">
        Schedule Some Time
      </Button>
            </Link>

          </center>

        </Container>
      </React.Fragment>
      <div>

      </div>
    </div>
  );
}
