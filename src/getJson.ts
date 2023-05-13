import puppeteer from 'puppeteer-extra';
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import { env } from 'process';

// interface RowData {
//   rank: string;
//   name: string;
//   winRatio: string;
//   winRate: string;
//   imageUrl: string;
// }

puppeteer.use(AdblockerPlugin()).use(StealthPlugin());

puppeteer
  .launch({ headless: false, defaultViewport: null })
  .then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.waitFor(4000);
    const rowsData = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll('tr[role="row"]'));
      return rows.map(row => {
        const rank = row.querySelector('.sorting_1')?.textContent || '';
        const name =
          row.querySelector('td:nth-child(3) strong')?.textContent || '';
        const imageUrl =
          row.querySelector('td:nth-child(2) a')?.getAttribute('href') || '';
        const winRatio =
          row.querySelector('td:nth-child(4) strong')?.textContent || '';
        const winRate =
          row.querySelector('td:nth-child(5) strong')?.textContent || '';
        return { rank, name, imageUrl, winRatio, winRate };
      });
    });
    console.log(rowsData);
    // JSON.stringify를 사용하여 JavaScript 객체를 JSON 문자열로 변환합니다.
    const data = JSON.stringify(rowsData, null, 2);

    // writeFile 함수를 사용하여 JSON 문자열을 파일에 씁니다.
    fs.writeFile('rowsData.json', data, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('Data written to file');
      }
    });

    // browser.close();
  });
