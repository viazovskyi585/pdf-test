const puppeteer = require('puppeteer');

class PDFGenerator {
	static async generatePDF(url) {
		const browser = await puppeteer.launch({
			headless: 'new',
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
		});
		const page = await browser.newPage();
		await page.goto(url, { waitUntil: 'networkidle0' });
		await page.waitForFunction('window.isReadyForPDF');
		const pdf = await page.pdf({
			format: 'A4',
			landscape: true,
			printBackground: true,
			margin: 0,
			timeout: 120000,
		});
		await browser.close();
		return pdf;
	}
}

module.exports = PDFGenerator;
