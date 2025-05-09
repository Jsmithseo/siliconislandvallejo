// pages/reviews.jsx

import React from "react";
import Head from "next/head";
import Link from "next/link";
import BaseLayout from "../components/layouts/BaseLayouts";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const plans = [
  {
    title: "Starter",
    price: "$199/mo",
    limit: "Up to 50 reviews",
    features: [
      "AI-powered text outreach",
      "Smart suggested response templates",
      "Performance tracking dashboard",
    ],
    link: "https://3zvb63hc.reviewly.ai/subscribe/NzcxMTg1NA==", // Update when order page is ready
  },
  {
    title: "Growth",
    price: "$299/mo",
    limit: "Up to 200 reviews",
    features: [
      "Everything in Starter",
      "Priority support",
      "Custom branding for outreach",
    ],
    link: "https://3zvb63hc.reviewly.ai/subscribe/NzcxMzIxNw==",
  },
  {
    title: "Unlimited",
    price: "$499/mo",
    limit: "Unlimited reviews",
    features: [
      "Everything in Growth",
      "Unlimited contact uploads",
      "White glove onboarding",
    ],
    link: "https://3zvb63hc.reviewly.ai/subscribe/NzcxNDU4MA==",
  },
];

const Reviews = () => {
  return (
    <>
      <Head>
        <title>Review Automation – Onyx Creative Labs</title>
      </Head>

      <BaseLayout>
        <Container className="my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold">AI-Powered Review Automation</h1>
            <p className="text-muted">
              Onyx Reviews helps you generate 5-star reviews using smart SMS outreach and AI-generated message suggestions. More trust. More traffic. More sales.
            </p>
          </div>

          <Row className="mb-5">
            {plans.map((plan, idx) => (
              <Col md="4" className="mb-4" key={idx}>
                <Card className="h-100 shadow-sm border-0">
                  <CardBody className="d-flex flex-column justify-content-between">
                    <div>
                      <CardTitle tag="h4" className="fw-bold text-center">
                        {plan.title}
                      </CardTitle>
                      <h5 className="text-primary text-center">{plan.price}</h5>
                      <p className="text-center text-muted">{plan.limit}</p>
                      <ul className="mt-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="text-muted mb-2">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center mt-4">
                      <Link href={plan.link} passHref>
                        <Button color="primary" className="w-100 fw-bold">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center text-muted" style={{ maxWidth: 800, margin: "0 auto" }}>
            <p>
              Our AI review assistant integrates directly with your business to help you follow up with customers via SMS, using tested messaging sequences and dynamic templates. All you do is upload your contacts — we handle the rest.
            </p>
            <p>
              Whether you're looking to grow your local visibility or build trust with new clients, this tool takes the guesswork out of review generation.
            </p>
          </div>
        </Container>
      </BaseLayout>
    </>
  );
};

export default Reviews;
