const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/home/TeaCollection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const categoryMap = {
  'black-tea': 'black-tea',
  'green-tea': 'green-tea',
  'herbal-tea': 'herbal-tea',
  'white-tea': 'white-tea',
  'oolong-tea': 'oolong-tea',
  'flavored-tea': 'flavored-tea',
  'wellness-tea': 'wellness-tea',
  'iced-tea': 'iced-tea',
  'specialty-tea': 'specialty-tea'
};

const vars = ['tea-var-1', 'tea-var-2', 'tea-var-3', 'tea-var-4', 'tea-var-5', 'tea-var-6', 'tea-var-7', 'tea-var-8', 'tea-var-9'];

let newContent = content;

// 1. Fix the category background images
Object.keys(categoryMap).forEach(catId => {
    const bgUrlRegex = new RegExp(`image:\\s*'https://images\\.unsplash\\.com/photo-[^']*'`);
    // Find the category object in the array
    const catBlockRegex = new RegExp(`id:\\s*'${catId}'.*?image:\\s*'https://images\\.unsplash\\.com/photo-[^']*'`, 's');
    newContent = newContent.replace(catBlockRegex, (match) => {
        return match.replace(bgUrlRegex, `image: '/assets/images/${catId}.jpg'`);
    });
});

// 2. Fix the product images
Object.keys(categoryMap).forEach(catId => {
  const regex = new RegExp(`(id:\\s*'${catId}'.*?products:\\s*\\[)(.*?)(\\])`, 's');
  newContent = newContent.replace(regex, (match, p1, p2, p3) => {
    let i = 0;
    const updatedProducts = p2.replace(/({[^}]*?})/g, (prodMatch) => {
      // Pick a variation or the category image
      let imgId = '';
      if (i === 0) imgId = catId;
      else imgId = vars[i % vars.length];
      i++;
      
      return prodMatch.replace(/image:\s*'.*?'/, `image: '/assets/images/${imgId}.jpg'`);
    });
    return p1 + updatedProducts + p3;
  });
});

fs.writeFileSync(filePath, newContent, 'utf8');
