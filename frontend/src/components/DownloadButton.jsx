import React, { useState } from 'react';
import axios from 'axios';

const DownloadButton = ({ formData, template }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formData.personal.name) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.personal.email) {
      setError('Please enter your email');
      return false;
    }
    if (!formData.personal.phone) {
      setError('Please enter your phone number');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.personal.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    setError('');
    return true;
  };

  const handleDownload = async () => {
    if (!validateForm()) {
      setTimeout(() => setError(''), 3000);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        '/api/generate-resume',
        {
          ...formData,
          template: template
        },
        {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${formData.personal.name.replace(/\s+/g, '_')}_Resume.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('Failed to generate PDF. Please check if the backend server is running.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 shadow-lg">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`w-full py-4 px-6 rounded-md font-bold text-lg transition-smooth ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-secondary text-white shadow-lg hover:shadow-xl'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <span className="spinner mr-3"></span>
            Generating PDF...
          </span>
        ) : (
          '📄 Download Resume as PDF'
        )}
      </button>
      
      <p className="text-center text-sm text-gray-500 mt-3">
        Your resume will be downloaded as a PDF file
      </p>
    </div>
  );
};

export default DownloadButton;
