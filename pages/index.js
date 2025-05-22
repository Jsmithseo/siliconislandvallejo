import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Link from 'next/link';
import BaseLayout from './components/layouts/BaseLayouts.js';
import { Row, Col, Button } from 'reactstrap';

export default function Index() {
  const styles = {
    main: {
      overflowX: 'hidden',
    },
    heroSection: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      flexDirection: 'column',
      position: 'relative',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
    },
    heroHeading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    heroSubtext: {
      fontSize: '1.25rem',
      marginBottom: '30px',
    },
    headerBackground: {
      backgroundColor: '#f0f0f0',
      padding: '50px 0',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
    },
    backgroundSection: {
      backgroundColor: '#f0f0f0',
      padding: '50px 0',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
    },
    content: {
      padding: '30px',
      borderRadius: '8px',
    },
    header: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      fontWeight: '400',
    },
    text: {
      fontSize: '1.5rem',
      marginBottom: '30px',
      textAlign: 'center',
      fontFamily: 'avenir',
    },
    button: {
      padding: '10px 20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '20px',
    },
    logoContainer: {
      marginTop: '40px',
      textAlign: 'center',
    },
  };

  return (
    <BaseLayout>
      <div style={styles.main}>
        <CssBaseline />

        {/* HERO SECTION */}
        <picture>
          <source media="(max-width: 320px)" srcSet="silicon-island-320w.jpg" />
          <source media="(max-width: 480px)" srcSet="silicon-island-480w.jpg" />
          <source media="(max-width: 768px)" srcSet="silicon-island-768w.jpg" />
          <source media="(max-width: 1024px)" srcSet="silicon-island-1024w.jpg" />
          <img
            src="silicon-island-1200w.jpg"
            alt="Silicon Island Vallejo Hero"
            style={{ ...styles.heroSection }}
          />
        </picture>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <Container>
            <h1 style={styles.heroHeading}>Fueling Innovation in Vallejo</h1>
            <p style={styles.heroSubtext}>
              Join a new wave of creators solving real-world problems in AI and sustainable energy.
            </p>
            <div style={styles.buttonContainer}>
              <Link href="">
                <Button variant="contained" color="success" type="submit">
                  Join the Incubator
                </Button>
              </Link>
              <Link href="">
                <Button variant="contained" color="primary" type="submit">
                  Book a Call
                </Button>
              </Link>
            </div>
          </Container>
        </div>

        {/* INTRO SECTION */}
        <div style={styles.headerBackground}>
          <Container>
            <div style={styles.logoContainer}></div>
            <p style={{ ...styles.text, padding: '0 20px', margin: '20px 0' }}>
              Silicon Island Vallejo is a tech incubator based in Vallejo, California, dedicated to fostering innovation in artificial intelligence and sustainable energy. We support startups and individuals who are working to solve real-world problems with cutting-edge technology and a commitment to local impact.
            </p>
          </Container>
        </div>

        {/* MAIN CONTENT */}
        <Container maxWidth="lg">
          <div style={{ marginTop: '60px' }}>
            <Container>
              <Row>
                <Col md={{ size: 12 }} className="text-center" style={styles.content}>
                  <h1 style={styles.header}>How It Works</h1>
                  <p style={styles.text}>
                    At Silicon Island Vallejo, we nurture high-impact innovation by providing hands-on mentorship, resource access, and community collaboration for entrepreneurs focused on AI and sustainable energy. Our members receive real-world experience, technical guidance, and support building scalable, socially responsible solutions.
                  </p>
                  <Button color="success" size="lg" style={styles.button} href="">
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Container>
            <div style={styles.backgroundSection}>
              <Container>
                <Row>
                  <Col md={{ size: 12 }} className="text-center" style={styles.content}>
                    <h1 style={styles.header}>Empowering the Next Generation of Tech Leaders</h1>
                    <p style={styles.text}>
                      Through our programs, entrepreneurs gain access to mentorship, project resources, and pitch opportunities. Our network connects innovators with funders, educators, and local leaders to drive forward the future of clean energy and AI applications rooted in Vallejo’s resilient spirit.
                    </p>
                    <Button color="success" size="lg" style={styles.button} href="">
                      Apply Now
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </BaseLayout>
  );
}
