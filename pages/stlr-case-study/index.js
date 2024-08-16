import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Badge,
} from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts.js';
import Footer from '../components/Footer';

const WordPressToNextJs = () => {
  return (
    <BaseLayout>
      <div className="case-study-header" style={headerStyle}>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="text-white">
                Case Study: WordPress to Next.js Web App Conversion
              </h1>
              <p className="text-white">
                A transformation that automated operations and scaled business
                efficiently
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="mb-4">
          <Col md="8" className="mx-auto">
            <Card className="shadow-lg">
              <CardImg
                top
                width="100%"
                src="/path/to/wordpress-nextjs-image.jpg" // Replace with actual image path
                alt="WordPress to Next.js Conversion"
              />
              <CardBody>
                <CardTitle tag="h5" className="text-primary">
                  Project Overview
                </CardTitle>
                <CardText>
                  Our client needed to transition from a traditional WordPress
                  site to a more modern, scalable solution. We opted to convert
                  their WordPress site into a headless CMS using Next.js, vastly
                  improving the speed and performance of the site. Beyond just a
                  website, we developed a full web app that automates various
                  business operations like communication, artist availability,
                  contracts, and payments.
                </CardText>

                <CardTitle tag="h5" className="text-primary">
                  The Challenge
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                      <strong>Performance Issues:</strong> The original
                      WordPress site was slow and couldn't handle scaling
                      effectively.
                    </li>
                    <li>
                      <strong>Manual Operations:</strong> Processes like
                      communication, contract management, and payment handling
                      were all manual.
                    </li>
                    <li>
                      <strong>Budget Constraints:</strong> The client had a
                      budget of $15k with an ongoing $1k monthly maintenance
                      fee.
                    </li>
                  </ul>
                </CardText>

                <CardTitle tag="h5" className="text-primary">
                  Our Solution
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                      <strong>Headless CMS:</strong> We converted the WordPress
                      site to a headless CMS with a Next.js frontend, improving
                      speed and user experience.
                    </li>
                    <li>
                      <strong>Web App Development:</strong> We developed a web
                      app to automate communication, artist availability,
                      contracts, and payments.
                    </li>
                    <li>
                      <strong>Cost Efficiency:</strong> By avoiding a native
                      app, we kept development costs low and ensured easy
                      maintenance.
                    </li>
                    <li>
                      <strong>Student Involvement:</strong> Our team of students
                      worked in two-week sprints, gaining valuable experience
                      and contributing to the project's success.
                    </li>
                  </ul>
                </CardText>

                <CardTitle tag="h5" className="text-primary">
                  The Results
                </CardTitle>
                <CardText>
                  <Row>
                    <Col md="6">
                      <Badge color="success" pill>
                        Increased Speed & Performance
                      </Badge>
                      <p>
                        The new web app is significantly faster and more
                        scalable.
                      </p>
                    </Col>
                    <Col md="6">
                      <Badge color="success" pill>
                        Automation of Key Operations
                      </Badge>
                      <p>
                        Automated processes have reduced manual workload and
                        improved efficiency.
                      </p>
                    </Col>
                    <Col md="6">
                      <Badge color="success" pill>
                        Cost-Effective Maintenance
                      </Badge>
                      <p>
                        The app is maintained with a budget-friendly $1k monthly
                        fee, far less than what a native app would require.
                      </p>
                    </Col>
                    <Col md="6">
                      <Badge color="success" pill>
                        Ongoing Development
                      </Badge>
                      <p>
                        The app continues to be refined, with students using it
                        as a showcase on their resumes.
                      </p>
                    </Col>
                  </Row>
                </CardText>

                <CardTitle tag="h5" className="text-primary">
                  Conclusion
                </CardTitle>
                <CardText>
                  The project demonstrates how leveraging the latest technology
                  can transform a business, making it more efficient, scalable,
                  and cost-effective. The web app is still in beta, and we
                  continue to refine and enhance it in line with our client’s
                  needs.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BaseLayout>
  );
};

const headerStyle = {
  backgroundColor: '#343a40',
  padding: '50px 0',
  marginBottom: '30px',
};

export default WordPressToNextJs;
