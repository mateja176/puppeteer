import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as fetch from 'node-fetch';
// import { serialize } from './renderer';

const outFolder = `${__dirname}/out`;

const url = 'https://officialfitneer.firebaseapp.com/welcome';

const scrape = async(url, dir) => {

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

};
