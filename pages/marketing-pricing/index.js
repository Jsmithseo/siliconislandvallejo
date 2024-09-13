import React from 'react';
import BaseLayout from '../components/layouts/BaseLayouts';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const PricingPackages = () => {
  return (
    <BaseLayout>
      <Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        {/* Supporting Copy */}
        <Row className="text-center mb-4">
          <Col>
            <h2>Choose the Perfect Marketing Plan for Your Business</h2>
            <p>
              At Onyx Creative Labs, we offer flexible, data-driven marketing solutions designed to fit
              your business’s unique needs. Whether you're just starting out or looking to scale, our
              tiered packages offer everything from foundational SEO to a full-fledged content marketing team.
              Let us help you grow your business with tailored strategies that maximize your return on investment.
            </p>
          </Col>
        </Row>

        {/* Pricing Packages */}
        <Row className="text-center">
          {/* Basic Package */}
          <Col md="4">
            <Card className="mb-4 shadow-sm">
              <CardBody>
                <CardTitle tag="h4">Basic Package</CardTitle>
                <h3>$250/month</h3>
                <p>+ $250 startup fee</p>
                <CardText>
                  <div>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                      <li>SEO Optimization</li>
                      <li>Basic Content Marketing</li>
                      <li>Monthly Performance Reports</li>
                      <li>Email Marketing Setup</li>
                    </ul>
                  </div>
                </CardText>
                <Button color="primary">Choose Basic</Button>
              </CardBody>
            </Card>
          </Col>

          {/* Pro Package */}
          <Col md="4">
            <Card className="mb-4 shadow-sm">
              <CardBody>
                <CardTitle tag="h4">Pro Package</CardTitle>
                <h3>$500/month</h3>
                <p>+ $250 startup fee</p>
                <CardText>
                  <div>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                      <li>Everything in Basic Package</li>
                      <li>Advanced SEO Strategies</li>
                      <li>Extended Content Marketing Campaigns</li>
                      <li>Social Media Marketing</li>
                      <li>Blog Post Creation (2/month)</li>
                    </ul>
                  </div>
                </CardText>
                <Button color="primary">Choose Pro</Button>
              </CardBody>
            </Card>
          </Col>

          {/* Premium Package */}
          <Col md="4">
            <Card className="mb-4 shadow-sm">
              <CardBody>
                <CardTitle tag="h4">Premium Package</CardTitle>
                <h3>$1000/month</h3>
                <p>+ $500 startup fee</p>
                <CardText>
                  <div>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                      <li>Everything in Pro Package</li>
                      <li>Full Content & Marketing Team</li>
                      <li>Custom Content Design & Strategy</li>
                      <li>Social Media Ad Campaigns</li>
                      <li>Content Creation for All Platforms</li>
                      <li>Monthly Consulting & Performance Reviews</li>
                    </ul>
                  </div>
                </CardText>
                <Button color="primary">Choose Premium</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </BaseLayout>
  );
};

export default PricingPackages;
