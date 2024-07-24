import React, { useState } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const stages = {
  marketing: [
    {
      title: '1. Discovery',
      content:
        'The discovery stage where we learn as much as we can from the client about their business. This is where I listen and ask questions to unearth the pain points and areas where I can solve with solutions that tie back to revenue.',
    },
    {
      title: '2. Website Audit',
      content:
        'A thorough audit of the current website to identify strengths, weaknesses, and areas for improvement.',
    },
    {
      title: '3. Strategy',
      content:
        'Develop a comprehensive strategy tailored to the client’s needs and goals.',
    },
    {
      title: '4. Implementation of Strategy',
      content:
        'Execute the strategy with a focus on achieving the client’s objectives.',
    },
    {
      title: '5. Iteration of the Strategy',
      content:
        'Adjust and refine the strategy based on key metrics and ongoing performance.',
    },
    {
      title: '6. Ongoing Check-ins',
      content:
        'Regular meetings with the client to discuss results and make necessary adjustments.',
    },
  ],
  webDevelopment: [
    {
      title: '1. Discovery',
      content:
        'The discovery stage where we learn as much as we can from the client about their business. This is where I listen and ask questions to unearth the pain points and areas where I can solve with solutions that tie back to revenue.',
    },
    {
      title: '2. Design',
      content: 'Create designs that align with the client’s brand and goals.',
    },
    {
      title: '3. Development',
      content:
        'Develop the website or application using best practices and the latest technologies.',
    },
    {
      title: '4. Testing',
      content:
        'Thoroughly test the product to ensure it is bug-free and functions as expected.',
    },
    {
      title: '5. Launch',
      content:
        'Launch the product and provide support to ensure a smooth transition.',
    },
  ],
};

function HowWeWork() {
  const [selectedTab, setSelectedTab] = useState('marketing');

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        How We Work
      </Typography>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Marketing" value="marketing" />
        <Tab label="Web Development" value="webDevelopment" />
      </Tabs>
      <Box style={{ marginTop: '20px' }}>
        {stages[selectedTab].map((stage, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{stage.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{stage.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default HowWeWork;
