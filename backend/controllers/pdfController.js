import { createResumePDF } from '../utils/pdfGenerator.js';

export const generateResumePDF = async (req, res) => {
  try {
    const resumeData = req.body;

    // Validate required fields
    if (!resumeData.personal || !resumeData.personal.name) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        message: 'Name is required'
      });
    }

    console.log('Generating PDF for:', resumeData.personal.name);

    // Generate PDF
    const pdfBuffer = await createResumePDF(resumeData);

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${resumeData.personal.name.replace(/\s+/g, '_')}_Resume.pdf"`);
    res.setHeader('Content-Length', pdfBuffer.length);

    // Send PDF
    res.send(pdfBuffer);
    
    console.log('✅ PDF generated successfully');
  } catch (error) {
    console.error('Error in generateResumePDF:', error);
    res.status(500).json({ 
      error: 'Failed to generate PDF',
      message: error.message 
    });
  }
};
