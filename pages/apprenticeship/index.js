import React, { useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayouts';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

const ApprenticeshipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    experienceLevel: '',
    projectDescription: '',
    timeCommitment: '',
    hasJob: '',
    jobFlexibility: '',
    motivation: '',
    careerGoals: '',
    reason: '',
    computerType: '',
    computerSpecs: '',
    internetAccess: '',
    additionalInfo: '',
    referralSource: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hubspotFormData = {
      fields: [
        { name: 'email', value: formData.email },
        { name: 'firstname', value: formData.fullName },
        { name: 'phone', value: formData.phone },
        { name: 'linkedin', value: formData.linkedIn },
        { name: 'experience_level', value: formData.experienceLevel },
        { name: 'project_description', value: formData.projectDescription },
        { name: 'time_commitment', value: formData.timeCommitment },
        { name: 'has_job', value: formData.hasJob },
        { name: 'job_flexibility', value: formData.jobFlexibility },
        { name: 'motivation', value: formData.motivation },
        { name: 'career_goals', value: formData.careerGoals },
        { name: 'reason', value: formData.reason },
        { name: 'computer_type', value: formData.computerType },
        { name: 'computer_specs', value: formData.computerSpecs },
        { name: 'internet_access', value: formData.internetAccess },
        { name: 'additional_info', value: formData.additionalInfo },
        { name: 'referral_source', value: formData.referralSource },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/46783071/952f60aa-30ae-4ba4-a588-cc20fbd06eb7',
        hubspotFormData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

  return (
    <BaseLayout>
     <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h1 className="mt-5">Join Our Apprenticeship Program</h1>
          <p className="lead">
            At Onyx Creative Labs, we're dedicated to nurturing the next generation of tech talent.
            Our apprenticeship program offers developers the opportunity to work on real web projects
            for real clients, providing hands-on experience that is essential for building a successful career in technology.
          </p>
     

          {submitted ? (
            <p>Thank you for your application! We will get in touch with you soon.</p>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="linkedIn">LinkedIn Profile (Optional)</Label>
                <Input
                  type="url"
                  name="linkedIn"
                  id="linkedIn"
                  placeholder="Enter your LinkedIn profile URL"
                  value={formData.linkedIn}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="experienceLevel">Current Level of Experience</Label>
                <Input
                  type="select"
                  name="experienceLevel"
                  id="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="Beginner">Beginner (0-1 year)</option>
                  <option value="Intermediate">Intermediate (1-3 years)</option>
                  <option value="Advanced">Advanced (3+ years)</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="projectDescription">
                  Have you ever worked on a web development project? If so, please describe briefly:
                </Label>
                <Input
                  type="textarea"
                  name="projectDescription"
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="timeCommitment">Estimated Time Commitment Per Week</Label>
                <Input
                  type="select"
                  name="timeCommitment"
                  id="timeCommitment"
                  value={formData.timeCommitment}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your time commitment</option>
                  <option value="Less than 10 hours">Less than 10 hours</option>
                  <option value="10-20 hours">10-20 hours</option>
                  <option value="20-30 hours">20-30 hours</option>
                  <option value="30-40 hours">30-40 hours</option>
                  <option value="40+ hours">40+ hours</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label>Do you currently work a 9-5 job?</Label>
                <div>
                  <Label check>
                    <Input
                      type="radio"
                      name="hasJob"
                      value="Yes"
                      checked={formData.hasJob === 'Yes'}
                      onChange={handleChange}
                      required
                    />{' '}
                    Yes
                  </Label>
                </div>
                <div>
                  <Label check>
                    <Input
                      type="radio"
                      name="hasJob"
                      value="No"
                      checked={formData.hasJob === 'No'}
                      onChange={handleChange}
                      required
                    />{' '}
                    No
                  </Label>
                </div>
              </FormGroup>

              {formData.hasJob === 'Yes' && (
                <FormGroup>
                  <Label for="jobFlexibility">How flexible is your schedule?</Label>
                  <Input
                    type="select"
                    name="jobFlexibility"
                    id="jobFlexibility"
                    value={formData.jobFlexibility}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your schedule flexibility</option>
                    <option value="Not flexible">Not flexible</option>
                    <option value="Somewhat flexible">Somewhat flexible</option>
                    <option value="Very flexible">Very flexible</option>
                  </Input>
                </FormGroup>
              )}

              <FormGroup>
                <Label for="motivation">What motivates you to become an engineer?</Label>
                <Input
                  type="textarea"
                  name="motivation"
                  id="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="careerGoals">What are your long-term career goals in engineering?</Label>
                <Input
                  type="textarea"
                  name="careerGoals"
                  id="careerGoals"
                  value={formData.careerGoals}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="reason">Why do you want to join our apprenticeship program?</Label>
                <Input
                  type="textarea"
                  name="reason"
                  id="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="computerType">What type of computer do you have?</Label>
                <Input
                  type="select"
                  name="computerType"
                  id="computerType"
                  value={formData.computerType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your computer type</option>
                  <option value="Windows Desktop/Laptop">Windows Desktop/Laptop</option>
                  <option value="Mac Desktop/Laptop">Mac Desktop/Laptop</option>
                  <option value="Linux Desktop/Laptop">Linux Desktop/Laptop</option>
                  <option value="Other">Other (Please specify)</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="computerSpecs">Please provide the specifications of your computer:</Label>
                <Input
                  type="textarea"
                  name="computerSpecs"
                  id="computerSpecs"
                  value={formData.computerSpecs}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Do you have reliable internet access?</Label>
                <div>
                  <Label check>
                    <Input
                      type="radio"
                      name="internetAccess"
                      value="Yes"
                      checked={formData.internetAccess === 'Yes'}
                      onChange={handleChange}
                      required
                    />{' '}
                    Yes
                  </Label>
                </div>
                <div>
                  <Label check>
                    <Input
                      type="radio"
                      name="internetAccess"
                      value="No"
                      checked={formData.internetAccess === 'No'}
                      onChange={handleChange}
                      required
                    />{' '}
                    No
                  </Label>
                </div>
              </FormGroup>

              <FormGroup>
                <Label for="additionalInfo">Is there anything else we should know?</Label>
                <Input
                  type="textarea"
                  name="additionalInfo"
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="referralSource">How did you hear about our apprenticeship program?</Label>
                <Input
                  type="select"
                  name="referralSource"
                  id="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a source</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Friend/Colleague">Friend/Colleague</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Online Search">Online Search</option>
                  <option value="Other">Other (Please specify)</option>
                </Input>
              </FormGroup>

              <Button type="submit" color="primary">Submit Application</Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
    <br></br>
    </BaseLayout>
   
  );
};

export default ApprenticeshipForm;
