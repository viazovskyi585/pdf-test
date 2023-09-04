const PDFGenerator = require('./PDFGenerator');
const fs = require('fs');

(async () => {
	const pdf = await PDFGenerator.generatePDF('http://localhost:8080/pdf/save/');

	const fileName = Date.now() + '.pdf';
	fs.writeFileSync(fileName, pdf);
	console.log('PDF saved to ' + fileName);
})();
