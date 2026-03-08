import React, { useEffect } from 'react';

const ResumeForm = ({ formData, setFormData }) => {
  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const newArray = [...formData[section]];
    newArray[index] = { ...newArray[index], [field]: value };
    setFormData(prev => ({ ...prev, [section]: newArray }));
  };

  const addArrayItem = (section) => {
    const defaultItems = {
      education: { degree: '', university: '', year: '' },
      experience: { company: '', role: '', description: '' },
      projects: { name: '', description: '', technologies: '' },
      skills: ''
    };
    
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], defaultItems[section]]
    }));
  };

  const removeArrayItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const clearForm = () => {
    if (window.confirm('Are you sure you want to clear all data?')) {
      const emptyData = {
        personal: { name: '', email: '', phone: '', address: '', linkedin: '', github: '' },
        education: [{ degree: '', university: '', year: '' }],
        experience: [{ company: '', role: '', description: '' }],
        skills: [''],
        projects: [{ name: '', description: '', technologies: '' }]
      };
      setFormData(emptyData);
      localStorage.removeItem('resumeData');
    }
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-md p-6 fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.personal.name}
              onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.personal.email}
                onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="john@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.personal.phone}
                onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="123456789"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              value={formData.personal.address}
              onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="City, Country"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
              <input
                type="url"
                value={formData.personal.linkedin}
                onChange={(e) => handleInputChange('personal', 'linkedin', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="linkedin.com/in/johndoe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
              <input
                type="url"
                value={formData.personal.github}
                onChange={(e) => handleInputChange('personal', 'github', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="github.com/johndoe"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg shadow-md p-6 fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          <button
            onClick={() => addArrayItem('education')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-smooth"
          >
            + Add Education
          </button>
        </div>
        
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Education {index + 1}</span>
              {formData.education.length > 1 && (
                <button
                  onClick={() => removeArrayItem('education', index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="space-y-3">
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Degree (e.g., BS Computer Science)"
              />
              <input
                type="text"
                value={edu.university}
                onChange={(e) => handleArrayChange('education', index, 'university', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="University"
              />
              <input
                type="text"
                value={edu.year}
                onChange={(e) => handleArrayChange('education', index, 'year', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Year (e.g., 2020-2024)"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="bg-white rounded-lg shadow-md p-6 fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          <button
            onClick={() => addArrayItem('experience')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-smooth"
          >
            + Add Experience
          </button>
        </div>
        
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Experience {index + 1}</span>
              {formData.experience.length > 1 && (
                <button
                  onClick={() => removeArrayItem('experience', index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="space-y-3">
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Company Name"
              />
              <input
                type="text"
                value={exp.role}
                onChange={(e) => handleArrayChange('experience', index, 'role', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Role (e.g., Software Intern)"
              />
              <textarea
                value={exp.description}
                onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Description"
                rows="3"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg shadow-md p-6 fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          <button
            onClick={() => addArrayItem('skills')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-smooth"
          >
            + Add Skill
          </button>
        </div>
        
        <div className="space-y-3">
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...formData.skills];
                  newSkills[index] = e.target.value;
                  setFormData(prev => ({ ...prev, skills: newSkills }));
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Skill (e.g., React, Python, Node.js)"
              />
              {formData.skills.length > 1 && (
                <button
                  onClick={() => removeArrayItem('skills', index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-smooth"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-lg shadow-md p-6 fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
          <button
            onClick={() => addArrayItem('projects')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-smooth"
          >
            + Add Project
          </button>
        </div>
        
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">Project {index + 1}</span>
              {formData.projects.length > 1 && (
                <button
                  onClick={() => removeArrayItem('projects', index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="space-y-3">
              <input
                type="text"
                value={project.name}
                onChange={(e) => handleArrayChange('projects', index, 'name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Project Name"
              />
              <textarea
                value={project.description}
                onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Project Description"
                rows="2"
              />
              <input
                type="text"
                value={project.technologies}
                onChange={(e) => handleArrayChange('projects', index, 'technologies', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Technologies used (e.g., React, Node.js, MongoDB)"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Clear Form Button */}
      <div className="flex justify-center">
        <button
          onClick={clearForm}
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-smooth font-medium"
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
