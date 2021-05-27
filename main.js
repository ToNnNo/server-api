import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use( express.json() ); // content-type: application/json

app.use(routes);

const port = process.env.PORT || 3200;
app.listen(port, 'localhost', () => {
  console.log(`Personal Node Server is listening on http://localhost:${port}`);
  console.log('Shutdown Node Server with CRTL + C');
});
// changer le port sous windows
//      set PORT=9999   --> CMD
//      $env:PORT=9999  --> PowerShell
//      nodemon express/index.js
// changer le port sous unix
//      PORT=9999 nodemon express/index.js
