import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function About() {
  return (
    <BaseLayout>
      <div className="jumbtron">
        <div className="container">
          <center>
            {/* <img
              src="/logo.png" // Replace with your image path
              alt="Image"
              className="img-fluid logo"
            /> */}
          </center>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container about">
        <Row>
          {/* <Col md="6">
            <img
              src="/headshot.png" // Replace with your image path
              alt="Image"
              className="img-fluid"
            />
          </Col> */}
          <Col md="12">
            <div className="bio-content">
              <p>
                In the midst of a decade-long adventure through startup culture,
                I've not only fine-tuned my skills as a web developer working
                hand-in-hand with product marketing teams but also engaged in
                the creation and development of bespoke web applications. These
                applications, tailored to our diverse audience, embody the agile
                and scrum methodologies that have been the bedrock of my
                professional growth.
              </p>
              <p>
                As my journey unfolded, I recognized a need beyond the startup
                ecosystem. Driven by a vision to harness these agile practices,
                I transitioned into consulting, focusing on the non-profit and
                public sectors to amplify their impact using the same lean
                principles that propel high-growth tech companies. My team and I
                design, develop, and deploy custom applications that are the
                perfect blend of technical prowess and user-centric design,
                ensuring they are not only innovative but also intrinsically
                valuable to our clients.
              </p>
              <p>
                Today, our consultancy stands as a beacon of transformation,
                merging the worlds of tech development with strategic growth for
                organizations seeking to expand their influence without
                inflating their budgets. We believe in a partnership approach,
                where your mission becomes our blueprint for development—whether
                through advising on technology strategy or crafting applications
                that speak directly to your users' needs.
              </p>
              <p>
                Embrace the journey with us, as we extend our proven track
                record of startup agility and custom app development to scale
                your operations and impact. With a commitment to agile evolution
                and the power of technology, we're not just building apps; we're
                building futures. Let’s connect and begin the journey of taking
                your organizational capabilities to new, unprecedented heights
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        {/* <Container>
        <HubSpotContactForm
      id="HubSpotContactForm"

                />
        </Container> */}
      </div>
    </BaseLayout>
  );
}
