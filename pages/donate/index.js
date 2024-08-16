import React from 'react';
import BaseLayout from '../components/layouts/BaseLayouts';
import { Container, Row, Col, Button } from 'reactstrap';
import DonationFormWrapper from '../components/DonationForm';
import Link from 'next/link';

const DonatePage = () => {
  return (
    <BaseLayout>
      <Container style={styles.container}>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 style={styles.header}>Help Us Scale</h1>
            <p style={styles.text}>
              At Onyx Creative Labs, we are dedicated to empowering the next
              generation of tech talent. Your donation will directly support our
              apprenticeship programs, providing aspiring developers with the
              tools and resources they need to succeed.
            </p>
            <p style={styles.text}>
              By donating, you help us scale our efforts and reach more
              students, enabling them to work on real-world projects and gain
              invaluable experience in the tech industry. Every contribution
              makes a difference. Whether it's a one-time gift or a recurring
              donation, your generosity will have a lasting impact.
            </p>
            <p style={styles.text}>
              Please choose an amount below and fill in your payment details.
              Your support is greatly appreciated!
            </p>
            <DonationFormWrapper />
            <div style={styles.whyDonateLink}>
              <Link href="/why-donate">
                <Button color="link" style={styles.linkButton}>
                  Why Donate?
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

const styles = {
  container: {
    padding: '50px 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  text: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  whyDonateLink: {
    textAlign: 'center',
    marginTop: '30px',
  },
  linkButton: {
    fontSize: '1.2rem',
    textDecoration: 'underline',
  },
};

export default DonatePage;
