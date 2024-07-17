import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
    budget: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hubspotEndpoint =
      'https://api.hsforms.com/submissions/v3/integration/submit/46783071/952f60aa-30ae-4ba4-a588-cc20fbd06eb7';

    const payload = {
      fields: [
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'email', value: formData.email },
        { name: 'description', value: formData.description },
        { name: 'budget', value: formData.budget },
      ],
    };

    try {
      await axios.post(hubspotEndpoint, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div
      style={{
        background: '#000',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px',
          }}
        >
          <div style={{ flex: '1', marginRight: '10px' }}>
            <input
              type="text"
              id="firstName"
              name="firstName"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                backgroundColor: '#24252B',
                color: '#fff',
                marginBottom: '10px',
              }}
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: '1' }}>
            <input
              type="text"
              id="lastName"
              name="lastName"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '14px',
                backgroundColor: '#24252B',
                color: '#fff',
                marginBottom: '10px',
              }}
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            id="email"
            name="email"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px',
              backgroundColor: '#24252B',
              color: '#fff',
              marginBottom: '10px',
            }}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea
            id="description"
            name="description"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '14px',
              backgroundColor: '#24252B',
              color: '#fff',
              height: '100px',
              resize: 'vertical',
              marginBottom: '10px',
            }}
            placeholder="Enter any project specific details..."
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="budget"
            style={{
              color: '#fff',
              marginBottom: '4px',
              fontSize: '18px',
              fontWeight: '500',
            }}
          >
            Budget Range
          </label>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                flex: '1',
                backgroundColor: '#20222B',
                color: '#fff',
                borderRadius: '20px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
              }}
            >
              <input
                type="radio"
                id="budget-low"
                name="budget"
                value="Ongoing Support"
                checked={formData.budget === 'Ongoing Support'}
                onChange={handleChange}
                required
              />
              <label htmlFor="budget-low" style={{ marginLeft: '10px' }}>
                Ongoing Support (Custom Quote)
              </label>
            </div>
            <div
              style={{
                flex: '1',
                backgroundColor: '#20222B',
                color: '#fff',
                borderRadius: '20px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
              }}
            >
              <input
                type="radio"
                id="budget-low-5000-30000"
                name="budget"
                value="5000-30000"
                checked={formData.budget === '5000-30000'}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="budget-low-5000-30000"
                style={{ marginLeft: '10px' }}
              >
                Up to $10,000
              </label>
            </div>
            <div
              style={{
                flex: '1',
                backgroundColor: '#20222B',
                color: '#fff',
                borderRadius: '20px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
              }}
            >
              <input
                type="radio"
                id="budget-medium"
                name="budget"
                value="40000-80000"
                checked={formData.budget === '40000-80000'}
                onChange={handleChange}
                required
              />
              <label htmlFor="budget-medium" style={{ marginLeft: '10px' }}>
                $10,000 - $50,000
              </label>
            </div>
            <div
              style={{
                flex: '1',
                backgroundColor: '#20222B',
                color: '#fff',
                borderRadius: '20px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
              }}
            >
              <input
                type="radio"
                id="budget-high"
                name="budget"
                value="80000+"
                checked={formData.budget === '80000+'}
                onChange={handleChange}
                required
              />
              <label htmlFor="budget-high" style={{ marginLeft: '10px' }}>
                $50,000+{' '}
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#B0000B',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '16px',
            textAlign: 'center',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            fontWeight: '500',
          }}
        >
          Start A Project
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
