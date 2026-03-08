import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
            Intern Resume Builder
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
            Create a professional resume in minutes. Choose from multiple templates,
            fill in your details, and download as PDF instantly.
          </p>
          <Link to="/builder">
            <button className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-secondary transition-smooth shadow-lg hover:shadow-xl transform hover:scale-105">
              Create Your Resume →
            </button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Use Our Resume Builder?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-smooth fade-in">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple and intuitive interface. Just fill in the form and see your resume come to life.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-smooth fade-in">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Multiple Templates</h3>
              <p className="text-gray-600">
                Choose from modern minimal or professional classic templates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-smooth fade-in">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Live Preview</h3>
              <p className="text-gray-600">
                See real-time updates as you type. What you see is what you get.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-smooth fade-in">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">PDF Export</h3>
              <p className="text-gray-600">
                Download your professional resume as a PDF with one click.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Fill in Your Information</h3>
                  <p className="text-gray-600">
                    Enter your personal details, education, work experience, skills, and projects.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Choose a Template</h3>
                  <p className="text-gray-600">
                    Select from our professionally designed templates that suit your style.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 fade-in">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Preview and Download</h3>
                  <p className="text-gray-600">
                    Review your resume in real-time and download it as a PDF when you're satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-primary rounded-2xl p-12 shadow-xl fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Resume?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of interns who have created their professional resumes with us.
          </p>
          <Link to="/builder">
            <button className="px-8 py-4 bg-white text-primary rounded-lg text-lg font-semibold hover:bg-gray-100 transition-smooth shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Intern Resume Builder. Built for interns, by developers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
