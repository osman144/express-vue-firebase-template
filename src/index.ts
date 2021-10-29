import express from "express";
import path from 'path';
const app = express();
const port = 8080; // default port to listen
const router = express.Router();

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // res.send( "Hello world!" );
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
} );

// start the Express server
app.use('/', router);
app.listen( port, () => {
  // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );