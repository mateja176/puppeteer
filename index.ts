import * as puppeteer from 'puppeteer';
import { serialize } from './renderer';
import * as fs from 'fs';

const outFolder = `${__dirname}/out`;

const url = 'https://officialfitneer.firebaseapp.com/welcome';

const render = async(url, dir) => {

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const { content } = await serialize(page, url, false);

  fs.readdir(dir, (err, files) => {
    if (err){
      console.log(err);
    } else {
      fs.writeFile(`${dir}/rendered.${files.length}.html`, content, err => {
        console.log(err || 'success');
        process.exit();
      });
    }
  });

};

render(url, outFolder);
