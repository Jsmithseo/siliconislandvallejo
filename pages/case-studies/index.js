import React from 'react';
import BaseLayout from '../components/layouts/BaseLayouts';

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const caseStudies = [
  {
    title: 'WordPress to Next.js Web App Conversion',
    description:
      'We converted a WordPress site into a fast, scalable Next.js web app, automating key business processes and reducing operational costs.',
    image: '/path/to/wordpress-nextjs-image.jpg', // Replace with actual image path
    keyResults: [
      'Improved site speed and performance',
      'Automated communication, artist availability, contracts, and payment processes',
      'Scaled the business with the latest technology',
      'Maintained the app with a cost-effective budget',
    ],
    link: '/stlr-case-study', // Detailed case study page
  },
  {
    title: 'A Business Owner with a Vision',
    description:
      'We converted a WordPress site into a fast, scalable Next.js web app, automating key business processes and reducing operational costs.',
    image: '/path/to/wordpress-nextjs-image.jpg', // Replace with actual image path
    keyResults: [
      'Improved site speed and performance',
      'Automated communication, artist availability, contracts, and payment processes',
      'Scaled the business with the latest technology',
      'Maintained the app with a cost-effective budget',
    ],
    link: '/case-studies/wordpress-to-nextjs', // Detailed case study page
  },
  {
    title: 'A seasoned Business Owner looking to innovate',
    description:
      'We converted a WordPress site into a fast, scalable Next.js web app, automating key business processes and reducing operational costs.',
    image: '/path/to/wordpress-nextjs-image.jpg', // Replace with actual image path
    keyResults: [
      'Improved site speed and performance',
      'Automated communication, artist availability, contracts, and payment processes',
      'Scaled the business with the latest technology',
      'Maintained the app with a cost-effective budget',
    ],
    link: '/case-studies/wordpress-to-nextjs', // Detailed case study page
  },

];

const CaseStudyPage = () => {
  return (
    <BaseLayout>
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Case Studies</h1>
          <p className="text-center">
            Discover how Onyx Creative Labs has helped businesses and non-profits achieve their goals with our tailored digital solutions.
          </p>
        </Col>
      </Row>

      <Row>
        {caseStudies.map((caseStudy, index) => (
          <Col md="6" lg="4" className="mb-4" key={index}>
            <Card>
              <CardImg top width="100%" src={caseStudy.image} alt={caseStudy.title} />
              <CardBody>
                <CardTitle tag="h5">{caseStudy.title}</CardTitle>
                <CardText>{caseStudy.description}</CardText>
                <ul>
                  {caseStudy.keyResults.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
                <Button color="primary" href={caseStudy.link}>
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </BaseLayout>
  );
};

export default CaseStudyPage;
