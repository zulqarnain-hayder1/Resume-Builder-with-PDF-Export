import React from 'react';

const ResumePreview = ({ formData, template }) => {
  const templateClass = template === 'classic' ? 'template-classic' : 'template-modern';

  return (
    <div className={`resume-preview ${templateClass} p-8 mx-auto`}>
      {/* Header - Personal Info */}
      <div className="text-center mb-6 border-b-2 border-gray-300 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {formData.personal.name || 'Your Name'}
        </h1>
        <div className="text-sm text-gray-600 space-x-2">
          <span>{formData.personal.email || 'email@example.com'}</span>
          {formData.personal.phone && (
            <>
              <span>|</span>
              <span>{formData.personal.phone}</span>
            </>
          )}
        </div>
        {formData.personal.address && (
          <div className="text-sm text-gray-600 mt-1">{formData.personal.address}</div>
        )}
        <div className="text-sm text-gray-600 mt-1 space-x-2">
          {formData.personal.linkedin && (
            <span className="break-all">{formData.personal.linkedin}</span>
          )}
          {formData.personal.github && formData.personal.linkedin && (
            <span>|</span>
          )}
          {formData.personal.github && (
            <span className="break-all">{formData.personal.github}</span>
          )}
        </div>
      </div>

      {/* Education Section */}
      {formData.education.some(edu => edu.degree || edu.university) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">
            EDUCATION
          </h2>
          {formData.education.map((edu, index) => (
            (edu.degree || edu.university) && (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-800">{edu.degree || 'Degree'}</p>
                    <p className="text-gray-700 text-sm">{edu.university || 'University'}</p>
                  </div>
                  {edu.year && (
                    <p className="text-gray-600 text-sm">{edu.year}</p>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Experience Section */}
      {formData.experience.some(exp => exp.company || exp.role) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">
            EXPERIENCE
          </h2>
          {formData.experience.map((exp, index) => (
            (exp.company || exp.role) && (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold text-gray-800">{exp.role || 'Role'}</p>
                  <p className="text-gray-600 text-sm">{exp.company || 'Company'}</p>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm mt-1">{exp.description}</p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills Section */}
      {formData.skills.some(skill => skill) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {formData.skills.filter(skill => skill).map((skill, index) => (
              <span key={index} className="text-gray-700 text-sm">
                {skill}
                {index < formData.skills.filter(s => s).length - 1 && ' |'}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {formData.projects.some(proj => proj.name || proj.description) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-400 mb-3">
            PROJECTS
          </h2>
          {formData.projects.map((project, index) => (
            (project.name || project.description) && (
              <div key={index} className="mb-4">
                <p className="font-semibold text-gray-800">{project.name || 'Project Name'}</p>
                {project.description && (
                  <p className="text-gray-700 text-sm mt-1">{project.description}</p>
                )}
                {project.technologies && (
                  <p className="text-gray-600 text-sm mt-1 italic">
                    Technologies: {project.technologies}
                  </p>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Empty State */}
      {!formData.personal.name && 
       !formData.education.some(edu => edu.degree) && 
       !formData.experience.some(exp => exp.role) && (
        <div className="text-center text-gray-400 py-20">
          <p className="text-lg">Start filling the form to see your resume preview</p>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
