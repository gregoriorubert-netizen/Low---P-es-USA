import https from 'https';
import fs from 'fs';

https.get('https://i.imgur.com/g6ZI7kg.png', (res) => {
  res.pipe(fs.createWriteStream('bread.png'));
  res.on('end', () => console.log('Downloaded'));
});
