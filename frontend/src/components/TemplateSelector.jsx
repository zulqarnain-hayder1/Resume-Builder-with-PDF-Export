import React from 'react';

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern Minimal',
      description: 'Clean and contemporary design with sans-serif fonts',
      preview: 'Modern, professional look'
    },
    {
      id: 'classic',
      name: 'Professional Classic',
      description: 'Traditional layout with serif fonts',
      preview: 'Timeless, elegant style'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`cursor-pointer p-4 border-2 rounded-lg transition-smooth ${
              selectedTemplate === template.id
                ? 'border-primary bg-indigo-50'
                : 'border-gray-200 hover:border-primary hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                <p className="text-xs text-gray-500">{template.preview}</p>
              </div>
              {selectedTemplate === template.id && (
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
