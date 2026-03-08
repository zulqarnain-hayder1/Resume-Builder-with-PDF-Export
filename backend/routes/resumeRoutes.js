import express from 'express';
import { generateResumePDF } from '../controllers/pdfController.js';

const router = express.Router();

// POST /api/generate-resume
router.post('/generate-resume', generateResumePDF);

// GET test route
router.get('/test', (req, res) => {
  res.json({ message: 'Resume API is working!' });
});

export default router;
