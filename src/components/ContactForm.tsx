import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 500);
  };

  const inputClasses = "w-full border-4 border-black p-3 font-mono bg-white focus:outline-none focus:ring-0";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-bold uppercase">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-bold uppercase">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-bold uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={inputClasses}
        />
      </div>
      
      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
      
      {formStatus === 'success' && (
        <div className="mt-4 p-4 border-4 border-black bg-white text-black font-mono">
          Message sent successfully!
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="mt-4 p-4 border-4 border-black bg-black text-white font-mono">
          Error sending message. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;