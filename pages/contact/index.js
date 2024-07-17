import React from 'react';
import ContactForm from '../components/ContactUsform';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="container-fluid" style={{ padding: '20px' }}>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="contactHeadline"
              style={{
                fontSize: '32px',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              Contact Our Team.
            </div>
          </div>
          <div className="col-lg-12" style={{ marginTop: '50px' }}>
            <div
              className="contact-form"
              style={{
                background: '#24252B',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-6">{/* Other content */}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
