# 📄 Intern Resume Builder

A complete full-stack web application that allows users to create, preview, and export professional resumes as PDF files. Built for interns with a modern, clean UI and multiple professional templates.

![Resume Builder](https://img.shields.io/badge/Status-Ready-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- 📝 **Easy-to-Use Form Interface** - Intuitive form to input all resume details
- 🎨 **Multiple Templates** - Choose between Modern Minimal and Professional Classic designs
- 👁️ **Live Preview** - See changes in real-time as you type
- 📄 **PDF Export** - Download your resume as a professionally formatted PDF
- 💾 **Auto-Save** - Form data automatically saved to localStorage
- ✅ **Form Validation** - Ensures all required fields are filled correctly
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎯 **Clean Modern UI** - Built with Tailwind CSS for a polished look

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI library with functional components and Hooks
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** (v4.18.2) - Web application framework
- **PDFKit** (v0.13.0) - PDF generation library
- **CORS** - Cross-origin resource sharing middleware

## 📁 Project Structure

```
resume-builder/
│
├── frontend/                     # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── ResumeForm.jsx   # Main form component
│   │   │   ├── ResumePreview.jsx # Live resume preview
│   │   │   ├── TemplateSelector.jsx # Template chooser
│   │   │   └── DownloadButton.jsx # PDF download button
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Landing page
│   │   │   └── Builder.jsx      # Resume builder page
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Entry point
│   │   └── styles.css           # Global styles with Tailwind
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind configuration
│   └── postcss.config.js
│
├── backend/                      # Express backend API
│   ├── routes/
│   │   └── resumeRoutes.js      # API routes
│   ├── controllers/
│   │   └── pdfController.js     # PDF generation controller
│   ├── utils/
│   │   └── pdfGenerator.js      # PDF creation logic
│   ├── server.js                # Express server setup
│   └── package.json
│
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd resume-builder
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

### Running the Application

You need to run both the frontend and backend servers.

#### Terminal 1 - Backend Server

```bash
cd backend
npm start
```

The backend server will start on `http://localhost:5000`

You should see:
```
✅ Server is running on http://localhost:5000
📄 API endpoint: http://localhost:5000/api/generate-resume
```

#### Terminal 2 - Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

You should see:
```
VITE v5.0.8  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## 📖 How to Use

1. **Navigate to the Builder**
   - Click "Create Your Resume" on the home page

2. **Fill in Your Information**
   - **Personal Info**: Name, email, phone, address, LinkedIn, GitHub
   - **Education**: Degree, university, year
   - **Experience**: Company, role, description
   - **Skills**: Add multiple skills
   - **Projects**: Project name, description, technologies

3. **Choose a Template**
   - Select between "Modern Minimal" or "Professional Classic"
   - Preview updates instantly

4. **Preview Your Resume**
   - Real-time preview on the right side (desktop)
   - See exactly how your PDF will look

5. **Download as PDF**
   - Click "Download Resume as PDF"
   - Your resume will be generated and downloaded automatically

## 🎨 Available Templates

### 1. Modern Minimal
- Clean sans-serif fonts (Helvetica)
- Simple, contemporary layout
- Perfect for tech and creative fields

### 2. Professional Classic
- Traditional serif fonts (Times)
- Elegant, timeless design
- Ideal for formal industries

## 🔌 API Endpoints

### Generate Resume PDF
- **Endpoint**: `POST /api/generate-resume`
- **Description**: Generates a PDF from resume data
- **Request Body**:
```json
{
  "personal": {
    "name": "John Doe",
    "email": "john@email.com",
    "phone": "123456789",
    "address": "City, Country",
    "linkedin": "linkedin.com/in/johndoe",
    "github": "github.com/johndoe"
  },
  "education": [
    {
      "degree": "BS Computer Science",
      "university": "University Name",
      "year": "2020-2024"
    }
  ],
  "experience": [
    {
      "company": "Tech Company",
      "role": "Software Intern",
      "description": "Developed features..."
    }
  ],
  "skills": ["React", "Node.js", "Python"],
  "projects": [
    {
      "name": "AI Chatbot",
      "description": "Built an AI-powered chatbot",
      "technologies": "Python, TensorFlow"
    }
  ],
  "template": "modern"
}
```
- **Response**: PDF file (application/pdf)

### Health Check
- **Endpoint**: `GET /health`
- **Description**: Check if server is running
- **Response**:
```json
{
  "status": "Server is running",
  "timestamp": "2026-03-07T..."
}
```

## 💡 Key Features Explained

### Auto-Save
- Form data is automatically saved to `localStorage`
- Resume persists even after closing the browser
- Data loads automatically when you return

### Form Validation
- Required fields: Name, Email, Phone
- Email format validation
- Error messages displayed clearly
- Prevents PDF generation with invalid data

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Optimized for phones, tablets, and desktops

### Loading States
- Shows spinner while generating PDF
- Prevents multiple simultaneous downloads
- User feedback throughout the process

## 🎨 Color Palette

The application uses a consistent color scheme:

- **Primary**: `#4F46E5` (Indigo)
- **Secondary**: `#6366F1` (Light Indigo)
- **Background**: `#F9FAFB` (Light Gray)

## 🛠️ Development

### Run Frontend in Development Mode
```bash
cd frontend
npm run dev
```

### Build Frontend for Production
```bash
cd frontend
npm run build
```

### Run Backend with Nodemon (Auto-restart)
```bash
cd backend
npm run dev
```

## 📦 Dependencies

### Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.21.0",
  "axios": "^1.6.2"
}
```

### Frontend Dev Dependencies
```json
{
  "vite": "^5.0.8",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32"
}
```

### Backend Dependencies
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "pdfkit": "^0.13.0"
}
```

## 🐛 Troubleshooting

### Backend server not starting
- Ensure port 5000 is not in use
- Check if Node.js is installed: `node --version`
- Reinstall dependencies: `npm install`

### Frontend not connecting to backend
- Verify backend is running on port 5000
- Check Vite proxy configuration in `vite.config.js`
- Clear browser cache

### PDF generation fails
- Check console for error messages
- Ensure all required fields are filled
- Verify backend server logs

### Data not saving
- Check browser localStorage is enabled
- Clear browser cache and try again

## 🚀 Future Enhancements

- [ ] User authentication and accounts
- [ ] Save multiple resumes in database
- [ ] More template options
- [ ] Custom color schemes
- [ ] Export to Word format
- [ ] LinkedIn profile import
- [ ] Cover letter generator
- [ ] ATS (Applicant Tracking System) optimization
- [ ] Resume analytics and scoring

## 📝 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

**Built with ❤️ for interns by developers**

Happy Resume Building! 🎉
# Resume-Builder-with-PDF-Export
