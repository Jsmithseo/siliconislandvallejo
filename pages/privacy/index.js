// pages/privacy.js
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayouts';
import { Container, Row, Col } from 'reactstrap';

const Privacy = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <BaseLayout>
        <Container className="py-5">
          <Row>
            <Col className="text-center mb-5">
              <h1>Privacy Policy</h1>
              <p className="lead">
                Your privacy is important to us. This policy explains how we collect, use, and protect your data.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="p-4 bg-white rounded shadow-sm mb-4">
                <h4>Information We Collect</h4>
                <ul>
                  <li>Contact details (name, email, phone number)</li>
                  <li>Form submissions, email/SMS interactions</li>
                  <li>Analytics and usage data</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded shadow-sm mb-4">
                <h4>How We Use Information</h4>
                <p>We use your information to:</p>
                <ul>
                  <li>Respond to inquiries and provide services</li>
                  <li>Send updates, newsletters, or SMS messages</li>
                  <li>Improve our site and services</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded shadow-sm mb-4">
                <h4>SMS Consent</h4>
                <p>
                  By opting in, you agree to receive SMS updates. Message frequency may vary.
                  Standard message and data rates may apply. Text <strong>STOP</strong> to opt out.
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow-sm mb-4">
                <h4>Security</h4>
                <p>
                  We implement industry-standard security practices to protect your data and do not sell your information to third parties.
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow-sm mb-4">
                <h4>Your Rights</h4>
                <p>
                  You may request to update or delete your data by contacting us at:
                  <br />
                  <strong>Email:</strong> info@onyxcreativelabs.com
                </p>
              </div>

              <div className="p-4 bg-white rounded shadow-sm mb-4">
                <h4>Policy Updates</h4>
                <p>This policy may be updated from time to time. Please review it periodically.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </BaseLayout>
    </div>
  );
};

export default Privacy;
