const cheerio = require('cheerio');
const https = require('https');

async function scrapeUnsplash(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const $ = cheerio.load(data);
          const urls = [];
          $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && src.includes('images.unsplash.com/photo') && !src.includes('profile-')) {
              const baseUrl = src.split('?')[0];
              if (!urls.includes(baseUrl)) {
                urls.push(baseUrl + '?q=80&w=800&auto=format&fit=crop');
              }
            }
          });
          resolve(urls.slice(0, 10)); // Get top 10 unique
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    const packaging = await scrapeUnsplash('tea-packaging');
    const bulk = await scrapeUnsplash('tea-leaves');
    const boxes = await scrapeUnsplash('tea-box');
    const factory = await scrapeUnsplash('tea-factory');
    
    console.log(JSON.stringify({ packaging, bulk, boxes, factory }, null, 2));
  } catch(e) {
    console.error(e);
  }
}
run();
