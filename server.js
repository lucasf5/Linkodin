import app from './src/index.js';
import db from './src/app/Config/dbMysql.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
    console.log(`Documentation in http://localhost:${port}/api-docs`);
  }
);