import PDFDocument from 'pdfkit';

export const createResumePDF = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ 
        margin: 50,
        size: 'A4'
      });
      
      const buffers = [];

      // Collect PDF data into buffers
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });
      doc.on('error', reject);

      // Apply template styling
      if (data.template === 'classic') {
        renderClassicTemplate(doc, data);
      } else {
        renderModernTemplate(doc, data);
      }

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

// Modern Minimal Template
function renderModernTemplate(doc, data) {
  const { personal, education, experience, skills, projects } = data;

  // Header - Personal Information
  doc.fontSize(28)
     .font('Helvetica-Bold')
     .text(personal.name || 'Your Name', { align: 'center' });
  
  doc.moveDown(0.5);
  
  // Contact info
  doc.fontSize(10)
     .font('Helvetica')
     .fillColor('#666666');
  
  let contactLine = personal.email || '';
  if (personal.phone) {
    contactLine += contactLine ? ` | ${personal.phone}` : personal.phone;
  }
  doc.text(contactLine, { align: 'center' });
  
  if (personal.address) {
    doc.text(personal.address, { align: 'center' });
  }
  
  // LinkedIn and GitHub
  if (personal.linkedin || personal.github) {
    let linksLine = '';
    if (personal.linkedin) linksLine += personal.linkedin;
    if (personal.github) {
      linksLine += linksLine ? ` | ${personal.github}` : personal.github;
    }
    doc.text(linksLine, { align: 'center' });
  }
  
  doc.moveDown(1);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown(1);

  // Education Section
  if (education && education.some(edu => edu.degree || edu.university)) {
    doc.fillColor('#000000')
       .fontSize(14)
       .font('Helvetica-Bold')
       .text('EDUCATION');
    
    doc.moveDown(0.3);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#CCCCCC');
    doc.moveDown(0.5);
    
    education.forEach(edu => {
      if (edu.degree || edu.university) {
        doc.fontSize(11)
           .font('Helvetica-Bold')
           .fillColor('#000000')
           .text(edu.degree || 'Degree', { continued: false });
        
        doc.fontSize(10)
           .font('Helvetica')
           .fillColor('#333333')
           .text(edu.university || 'University', { continued: edu.year ? true : false });
        
        if (edu.year) {
          doc.text(` - ${edu.year}`, { align: 'left' });
        }
        
        doc.moveDown(0.5);
      }
    });
    
    doc.moveDown(0.5);
  }

  // Experience Section
  if (experience && experience.some(exp => exp.role || exp.company)) {
    doc.fillColor('#000000')
       .fontSize(14)
       .font('Helvetica-Bold')
       .text('EXPERIENCE');
    
    doc.moveDown(0.3);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#CCCCCC');
    doc.moveDown(0.5);
    
    experience.forEach(exp => {
      if (exp.role || exp.company) {
        doc.fontSize(11)
           .font('Helvetica-Bold')
           .fillColor('#000000')
           .text(exp.role || 'Role', { continued: exp.company ? true : false });
        
        if (exp.company) {
          doc.fontSize(10)
             .font('Helvetica')
             .fillColor('#666666')
             .text(` - ${exp.company}`);
        }
        
        if (exp.description) {
          doc.fontSize(10)
             .font('Helvetica')
             .fillColor('#333333')
             .text(exp.description, { 
               align: 'left',
               indent: 15
             });
        }
        
        doc.moveDown(0.5);
      }
    });
    
    doc.moveDown(0.5);
  }

  // Skills Section
  if (skills && skills.some(skill => skill)) {
    doc.fillColor('#000000')
       .fontSize(14)
       .font('Helvetica-Bold')
       .text('SKILLS');
    
    doc.moveDown(0.3);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#CCCCCC');
    doc.moveDown(0.5);
    
    const skillsList = skills.filter(s => s).join(' | ');
    doc.fontSize(10)
       .font('Helvetica')
       .fillColor('#333333')
       .text(skillsList);
    
    doc.moveDown(1);
  }

  // Projects Section
  if (projects && projects.some(proj => proj.name || proj.description)) {
    doc.fillColor('#000000')
       .fontSize(14)
       .font('Helvetica-Bold')
       .text('PROJECTS');
    
    doc.moveDown(0.3);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#CCCCCC');
    doc.moveDown(0.5);
    
    projects.forEach(project => {
      if (project.name || project.description) {
        doc.fontSize(11)
           .font('Helvetica-Bold')
           .fillColor('#000000')
           .text(project.name || 'Project Name');
        
        if (project.description) {
          doc.fontSize(10)
             .font('Helvetica')
             .fillColor('#333333')
             .text(project.description, { indent: 15 });
        }
        
        if (project.technologies) {
          doc.fontSize(10)
             .font('Helvetica-Oblique')
             .fillColor('#666666')
             .text(`Technologies: ${project.technologies}`, { indent: 15 });
        }
        
        doc.moveDown(0.5);
      }
    });
  }
}

// Professional Classic Template
function renderClassicTemplate(doc, data) {
  const { personal, education, experience, skills, projects } = data;

  // Header with classic styling
  doc.fontSize(26)
     .font('Times-Bold')
     .text(personal.name || 'Your Name', { align: 'center' });
  
  doc.moveDown(0.3);
  
  // Decorative line
  doc.moveTo(200, doc.y).lineTo(395, doc.y).stroke();
  doc.moveDown(0.5);
  
  // Contact info
  doc.fontSize(11)
     .font('Times-Roman')
     .fillColor('#333333');
  
  let contactLine = personal.email || '';
  if (personal.phone) {
    contactLine += contactLine ? ` • ${personal.phone}` : personal.phone;
  }
  doc.text(contactLine, { align: 'center' });
  
  if (personal.address) {
    doc.text(personal.address, { align: 'center' });
  }
  
  if (personal.linkedin || personal.github) {
    let linksLine = '';
    if (personal.linkedin) linksLine += personal.linkedin;
    if (personal.github) {
      linksLine += linksLine ? ` • ${personal.github}` : personal.github;
    }
    doc.text(linksLine, { align: 'center' });
  }
  
  doc.moveDown(1.5);

  // Education Section
  if (education && education.some(edu => edu.degree || edu.university)) {
    doc.fillColor('#000000')
       .fontSize(16)
       .font('Times-Bold')
       .text('Education');
    
    doc.moveDown(0.2);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#000000');
    doc.moveDown(0.7);
    
    education.forEach(edu => {
      if (edu.degree || edu.university) {
        doc.fontSize(12)
           .font('Times-Bold')
           .fillColor('#000000')
           .text(edu.degree || 'Degree');
        
        doc.fontSize(11)
           .font('Times-Italic')
           .fillColor('#333333')
           .text(edu.university || 'University', { continued: edu.year ? true : false });
        
        if (edu.year) {
          doc.font('Times-Roman').text(` (${edu.year})`);
        }
        
        doc.moveDown(0.7);
      }
    });
    
    doc.moveDown(0.3);
  }

  // Experience Section
  if (experience && experience.some(exp => exp.role || exp.company)) {
    doc.fillColor('#000000')
       .fontSize(16)
       .font('Times-Bold')
       .text('Professional Experience');
    
    doc.moveDown(0.2);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#000000');
    doc.moveDown(0.7);
    
    experience.forEach(exp => {
      if (exp.role || exp.company) {
        doc.fontSize(12)
           .font('Times-Bold')
           .fillColor('#000000')
           .text(exp.role || 'Role');
        
        if (exp.company) {
          doc.fontSize(11)
             .font('Times-Italic')
             .fillColor('#333333')
             .text(exp.company);
        }
        
        if (exp.description) {
          doc.fontSize(11)
             .font('Times-Roman')
             .fillColor('#333333')
             .text(exp.description, { 
               align: 'left',
               indent: 20
             });
        }
        
        doc.moveDown(0.7);
      }
    });
    
    doc.moveDown(0.3);
  }

  // Skills Section
  if (skills && skills.some(skill => skill)) {
    doc.fillColor('#000000')
       .fontSize(16)
       .font('Times-Bold')
       .text('Skills');
    
    doc.moveDown(0.2);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#000000');
    doc.moveDown(0.7);
    
    const skillsList = skills.filter(s => s).join(', ');
    doc.fontSize(11)
       .font('Times-Roman')
       .fillColor('#333333')
       .text(skillsList);
    
    doc.moveDown(1);
  }

  // Projects Section
  if (projects && projects.some(proj => proj.name || proj.description)) {
    doc.fillColor('#000000')
       .fontSize(16)
       .font('Times-Bold')
       .text('Projects');
    
    doc.moveDown(0.2);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke('#000000');
    doc.moveDown(0.7);
    
    projects.forEach(project => {
      if (project.name || project.description) {
        doc.fontSize(12)
           .font('Times-Bold')
           .fillColor('#000000')
           .text(project.name || 'Project Name');
        
        if (project.description) {
          doc.fontSize(11)
             .font('Times-Roman')
             .fillColor('#333333')
             .text(project.description, { indent: 20 });
        }
        
        if (project.technologies) {
          doc.fontSize(11)
             .font('Times-Italic')
             .fillColor('#666666')
             .text(`Technologies: ${project.technologies}`, { indent: 20 });
        }
        
        doc.moveDown(0.7);
      }
    });
  }
}
