//
// Created by J. Blackburn - Dec 24 2024
//

const express = require( 'express' );
const path    = require( 'path'    );



const port  = 3000;
const root  = path.join(__dirname, 'public');

const app   = express();


app.use(  express.static( root )  );



	// response is the same for every path

app.get(  '*',  (req, res) => {
	
		// respond with ./public/index.html
	res.sendFile(  path.join( root, 'index.html' )  );

});


app.listen(  port,  () => console.log('Server up and running.')  ); 
