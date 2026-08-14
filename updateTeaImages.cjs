const fs = require('fs');
const path = require('path');

const teaImages = [
  'https://images.unsplash.com/photo-1594631252845-29fc4cc8c2a1?auto=format&fit=crop&q=80', // Munnar tea garden
  'https://images.unsplash.com/photo-1576092762791-dd9e222046c8?auto=format&fit=crop&q=80', // Tea leaves
  'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80', // Tea pouring
  'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80', // Tea drying
  'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80', // Packaging
  'https://images.unsplash.com/photo-1559038297-5b37efcd59d4?auto=format&fit=crop&q=80', // Spices/Masala
  'https://images.unsplash.com/photo-1527398317618-b3da8a79e0ca?auto=format&fit=crop&q=80', // Matcha
  'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435?auto=format&fit=crop&q=80', // Black tea
  'https://images.unsplash.com/photo-1644335471325-52e2d44fca64?auto=format&fit=crop&q=80', // Tea sacks
  'https://images.unsplash.com/photo-1651608154985-dcc87b27a63e?auto=format&fit=crop&q=80', // Tea landscape
  'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80', // Tea cup top view
  'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80', // Tea cup dark
  'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80', // Tea ceremony
  'https://images.unsplash.com/photo-1577234286642-cfce0f85f522?auto=format&fit=crop&q=80', // Herbal tea
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles('./src');
const urlRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^'\"\)\s]*/g;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (urlRegex.test(content)) {
    let matchCount = 0;
    const newContent = content.replace(urlRegex, (match) => {
      const newUrl = teaImages[matchCount % teaImages.length];
      matchCount++;
      return newUrl;
    });
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
console.log('Done replacing images');
