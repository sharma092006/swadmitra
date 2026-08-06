const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/home/TeaCollection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// We have 9 categories. We'll provide a pool of Unsplash IDs for each category.
const categoryImages = {
  'black-tea': [
    '1576092762791-dd9e2220abd4', '1596422846543-75c6fc197f84', '1594824558231-10c3b313ef04', '1514733670139-4d87a1941d55',
    '1611162616475-46b635cb68ea', '1564890369479-7a0662d51199', '1558160074-4d7d8bdf4256', '1509315357989-10ee9dcb8e91'
  ],
  'green-tea': [
    '1627492275510-474d28472851', '1515823662472-56920f01103c', '1556679343-c7306c1976bc', '1615484478330-1b29a2e6f477',
    '1556679343-c7306c1976bc', '1525088516905-1a8684bb2ee5', '1498804103079-a6351b050096', '1594631252845-29fc4cc8c0a5'
  ],
  'herbal-tea': [
    '1597481499750-3e6b22637e12', '1611077544837-33fb3510e82c', '1563822249548-9a72b6353cd1', '1582793988951-9aed550cfa90',
    '1571216390176-7848f2a58b68', '1606757657904-8b6fa2021fa6', '1596704603956-654fbaf3562a', '1517457222165-27a19ff21fa5'
  ],
  'white-tea': [
    '1582793988951-9aed550cfa90', '1576092762791-dd9e2220abd4', '1514733670139-4d87a1941d55', '1611162616475-46b635cb68ea',
    '1564890369479-7a0662d51199', '1558160074-4d7d8bdf4256', '1509315357989-10ee9dcb8e91', '1596422846543-75c6fc197f84'
  ],
  'oolong-tea': [
    '1594631252845-29fc4cc8c0a5', '1627492275510-474d28472851', '1515823662472-56920f01103c', '1556679343-c7306c1976bc',
    '1615484478330-1b29a2e6f477', '1556679343-c7306c1976bc', '1525088516905-1a8684bb2ee5', '1498804103079-a6351b050096'
  ],
  'flavored-tea': [
    '1563822249548-9a72b6353cd1', '1597481499750-3e6b22637e12', '1611077544837-33fb3510e82c', '1582793988951-9aed550cfa90',
    '1571216390176-7848f2a58b68', '1606757657904-8b6fa2021fa6', '1596704603956-654fbaf3562a', '1517457222165-27a19ff21fa5'
  ],
  'wellness-tea': [
    '1514733670139-4d87a1941d55', '1576092762791-dd9e2220abd4', '1596422846543-75c6fc197f84', '1594824558231-10c3b313ef04',
    '1611162616475-46b635cb68ea', '1564890369479-7a0662d51199', '1558160074-4d7d8bdf4256', '1509315357989-10ee9dcb8e91'
  ],
  'iced-tea': [
    '1556679343-c7306c1976bc', '1627492275510-474d28472851', '1515823662472-56920f01103c', '1615484478330-1b29a2e6f477',
    '1556679343-c7306c1976bc', '1525088516905-1a8684bb2ee5', '1498804103079-a6351b050096', '1594631252845-29fc4cc8c0a5'
  ],
  'specialty-tea': [
    '1611077544837-33fb3510e82c', '1597481499750-3e6b22637e12', '1563822249548-9a72b6353cd1', '1582793988951-9aed550cfa90',
    '1571216390176-7848f2a58b68', '1606757657904-8b6fa2021fa6', '1596704603956-654fbaf3562a', '1517457222165-27a19ff21fa5'
  ]
};

// Fallback pool in case of out of bounds
const genericPool = ['1576092762791-dd9e2220abd4', '1597481499750-3e6b22637e12', '1627492275510-474d28472851', '1514733670139-4d87a1941d55'];

// regex to find each category block
let newContent = content;

Object.keys(categoryImages).forEach(catId => {
  // Find the block for this category in the text.
  const regex = new RegExp(`(id:\\s*'${catId}'.*?products:\\s*\\[)(.*?)(\\])`, 's');
  newContent = newContent.replace(regex, (match, p1, p2, p3) => {
    let i = 0;
    // p2 contains the product objects: { name: '...', rating: ... }
    const updatedProducts = p2.replace(/({[^}]*?})/g, (prodMatch) => {
      const images = categoryImages[catId];
      const imgId = images[i % images.length] || genericPool[i % genericPool.length];
      i++;
      // If it already has an image property, replace it, else add it.
      if (prodMatch.includes('image:')) {
        return prodMatch.replace(/image:\s*'.*?'/, `image: 'https://images.unsplash.com/photo-${imgId}?w=400&q=80&auto=format&fit=crop'`);
      } else {
        return prodMatch.replace('}', `, image: 'https://images.unsplash.com/photo-${imgId}?w=400&q=80&auto=format&fit=crop' }`);
      }
    });
    return p1 + updatedProducts + p3;
  });
});

// Also we need to fix the JSX rendering in the product loop.
newContent = newContent.replace(/src=\{\`https:\/\/placehold\.co.*?\`\}/, 'src={product.image}');

fs.writeFileSync(filePath, newContent, 'utf8');
