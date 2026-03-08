import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import TemplateSelector from '../components/TemplateSelector';
import DownloadButton from '../components/DownloadButton';

const Builder = () => {
  // Load saved data from localStorage or use default
  const loadSavedData = () => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading saved data:', e);
      }
    }
    return {
      personal: {
        name: '',
        email: '',
        phone: '',
        address: '',
        linkedin: '',
        github: ''
      },
      education: [{ degree: '', university: '', year: '' }],
      experience: [{ company: '', role: '', description: '' }],
      skills: [''],
      projects: [{ name: '', description: '', technologies: '' }]
    };
  };

  const [formData, setFormData] = useState(loadSavedData);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Build Your Resume</h1>
          <p className="text-gray-600">Fill in your details and watch your resume come to life</p>
        </div>

        {/* Template Selector */}
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />

        {/* Main Content: Form and Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Form */}
          <div className="order-2 lg:order-1">
            <ResumeForm formData={formData} setFormData={setFormData} />
          </div>

          {/* Right Side: Preview */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Preview</h2>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-y-auto" style={{ maxHeight: '800px' }}>
                  <ResumePreview formData={formData} template={selectedTemplate} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button - Fixed at bottom on mobile, part of flow on desktop */}
        <div className="mt-8 lg:hidden">
          <DownloadButton formData={formData} template={selectedTemplate} />
        </div>
        <div className="hidden lg:block mt-8">
          <DownloadButton formData={formData} template={selectedTemplate} />
        </div>
      </div>
    </div>
  );
};

export default Builder;
