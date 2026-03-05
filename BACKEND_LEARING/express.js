import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES module ke liye __dirname banana
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// HOME PAGE ROUTE 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  res.end();
});

// ABOUT PAGE ROUTE
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
  res.end();
});

// CONTACT PAGE ROUTE
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
  res.end();
});

app.listen(9000, () => {
  console.log('Server running on http://localhost:9000');
});

