import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const faqs = [
    {
      question: 'What is an internship at Vash Technologies?',
      answer: 'An internship at Vash Technologies is a structured program designed to provide students with hands-on experience in web and app development. Interns work on real-world projects under the guidance of experienced mentors.'
    },
    {
      question: 'Who can apply for an internship?',
      answer: 'Students pursuing a degree in computer science or a related field are eligible to apply for an internship at Vash Technologies. We look for individuals who are passionate about technology and eager to learn.'
    },
    {
      question: 'How long is the internship program?',
      answer: 'The internship program at Vash Technologies typically lasts for 3 months. During this time, interns have the opportunity to develop their skills, work on projects, and gain valuable industry experience.'
    },
    {
      question: 'How do I apply for an internship?',
      answer: 'To apply for an internship at Vash Technologies, you can visit our Careers page and submit your resume and portfolio online. Our recruitment team will review your application and contact you if you are shortlisted for an interview.'
    },
    {
      question: 'What are the benefits of interning at Vash Technologies?',
      answer: 'Interning at Vash Technologies offers numerous benefits, including hands-on experience, exposure to cutting-edge technologies, mentorship from industry professionals, and the opportunity to work on meaningful projects.'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQs;
