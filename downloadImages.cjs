const fs = require('fs');
const https = require('https');
const path = require('path');

const imageList = [
  { id: 'black-tea', url: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'green-tea', url: 'https://images.unsplash.com/photo-1627492275510-474d28472851?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'herbal-tea', url: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'white-tea', url: 'https://images.unsplash.com/photo-1582793988951-9aed550cfa90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'oolong-tea', url: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8c0a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'flavored-tea', url: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'wellness-tea', url: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'iced-tea', url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'specialty-tea', url: 'https://images.unsplash.com/photo-1611077544837-33fb3510e82c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  // Extra variations for products
  { id: 'tea-var-1', url: 'https://images.unsplash.com/photo-1515823662472-56920f01103c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-2', url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-3', url: 'https://images.unsplash.com/photo-1594824558231-10c3b313ef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-4', url: 'https://images.unsplash.com/photo-1611162616475-46b635cb68ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-5', url: 'https://images.unsplash.com/photo-1564890369479-7a0662d51199?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-6', url: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-7', url: 'https://images.unsplash.com/photo-1509315357989-10ee9dcb8e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-8', url: 'https://images.unsplash.com/photo-1525088516905-1a8684bb2ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 'tea-var-9', url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const dir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const img of imageList) {
    const dest = path.join(dir, `${img.id}.jpg`);
    try {
      console.log(`Downloading ${img.id}...`);
      await download(img.url, dest);
    } catch (err) {
      console.error(`Failed to download ${img.id}:`, err);
    }
  }
  console.log('All downloads completed.');
}

run();
