// import app from './src/index.js';
const app = require('./src');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
    console.log(`Documentation in http://localhost:${port}/api-docs`);
  }
);