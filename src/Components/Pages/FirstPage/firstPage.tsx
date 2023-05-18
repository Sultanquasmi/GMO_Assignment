
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './firstPage.css'

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    if (name && phoneNumber && email) {
      // Save user details to localStorage
      localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));

      // Redirect to the second page
      navigate('/second');
    } else {
      alert('Please enter all the details before proceeding.');
    }
  };

  return (
    <div className='container'>
      <h1>USER DETAILS</h1>
      <form className='form' onSubmit={handleFormSubmit}>
        <input
        className='input'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        className='input'
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
        className='input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default FirstPage;
