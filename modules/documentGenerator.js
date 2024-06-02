const fs = require('fs');
const createReport = require('docx-templates').default;

async function generateDocument(templatePath, data) {
  try {
    // Load the template as binary
    const template = fs.readFileSync(templatePath, 'binary');

    // Create the document
    const report = await createReport({
      template,
      data,
      cmdDelimiter: ['{', '}'],
    });

    // Convert the report buffer to binary string
    const buffer = Buffer.from(report);

    return buffer;
  } catch (error) {
    console.error('Error generating document:', error);
    throw error;
  }
}

module.exports = {
  generateDocument
};
