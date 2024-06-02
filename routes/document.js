const express = require('express');
const router = express.Router();
const path = require('path');
const documentGenerator = require('../modules/documentGenerator');

// Route to generate a document
router.post('/generate', async (req, res) => {
  try {
    console.log('Request Body:', req.body);  // Log the request body to verify data

    const templateName = req.body.template;
    if (!templateName) {
      throw new Error('Template name is required');
    }
    const templatePath = path.resolve(__dirname, '../public/doc-templates', templateName + '.docx');

    console.log('Template Path:', templatePath);  // Log the template path

    // Generate the document
    const document = await documentGenerator.generateDocument(templatePath, req.body);

    // Set headers for file download
    res.setHeader('Content-Disposition', 'attachment; filename="output.docx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

    // Send the document as the response
    res.send(document);
  } catch (err) {
    console.error('Error generating document:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
