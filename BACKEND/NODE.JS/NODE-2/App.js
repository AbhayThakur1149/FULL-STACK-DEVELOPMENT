const http = require('http'); // loading http module and storing it in a variable http.
const fs = require('fs'); // loading fs module and storing it in a variable fs. fs module is used to read and write files in nodejs.
const path = require('path'); // loading path module and storing it in a variable path. path module is used to work with file and directory paths in nodejs.

const server = http.createServer((req, res)=>{// create a server and defining the request and response
    
    
    console.log(req.url);  // it will print the url of the request made to the server
    
    if(req.url === '/' && req.method === 'GET'){ // checking if the url is / and method is GET

        fs.readFile('./Lecture2/Index.html', (err, data)=>{// this is the method to read and load the html file in the server. it takes two arguments, first is the path of the file and second is a callback function which will be called when the file is read. it has two parameters, first is error and second is data.
            if(err){

                res.writeHead(500, {'Content-Type':'text/html'});
                res.write('<h1>File Not Found</h1>');
                res.end();

            } 
            else {

                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();

            }
        });

    } 
    else if(req.url === '/Style.css'){ // checking if the url is /style.css

        fs.readFile('./Lecture2/Style.css', (err, data)=>{
            if(err){

                console.log(err);
                res.writeHead(500, {'Content-Type':'text/css'});
                res.write('Error loading style sheet');
                res.end();

            } 
            else {

                res.writeHead(200, {'Content-Type':'text/css'});
                res.write(data);
                res.end();

            }
        });
    } 
    else if(req.url === '/photo.jpeg'){ // checking if the url is /photo.jpeg

        fs.readFile('./photo.jpeg', (err, data)=>{

            if(err){

                console.log(err);
                res.writeHead(500, {'Content-Type':'image/jpeg'});
                res.write('Error loading image');
                res.end();

            }
            else {

                res.writeHead(200, {'Content-Type':'image/jpeg'});
                res.write(data);
                res.end();

            }
        });
    }
    else if(req.url === '/script.js'){ // checking if the url is /script.js

        fs.readFile('./Lecture2/script.js', (err, data)=>{
            if(err){

                res.writeHead(500, {'Content-Type':'text/javascript'});
                res.write('Error loading script');
                res.end();

            }
            else {
                res.writeHead(200, {'Content-Type':'text/javascript'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url === '/about'){ // these are the different routes we can define for our server.

        res.writeHead(200, {'Content-Type':'text/html'});// to send html content to the browser we need to set the content type as text/html
        res.write('<h1>About Page</h1>');
        res.end();// this will end the response and send it to the browser.

    } 
    else if(req.url === '/contact'){

        res.writeHead(200, {'Content-Type':'text/css'});// to send css content to the browser we need to set the content type as text/css.
        res.write('body { font-family: Arial, sans-serif; }');
        res.end();

    } 
    else if(req.url === '/services'){

        res.writeHead(200, {'Content-Type':'application/json'});// to send json content to the browser we need to set the content type as application/json.
        res.write(JSON.stringify({Message: "My Services are Web Development, App Development, and Digital Marketing"}));
        res.end();

    } 
    else {

        res.writeHead(404, {'Content-Type':'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.end();

    }
});

server.listen(3000, ()=>{
    console.log('server is running on port 3000....');
});// by any chance if port 3000 is busy then it will not work so we can use any other port like 3001,3002 etc 


// server.on('connection',(socket)=>{
//     console.log(socket.remoteAddress);
//     console.log('new connection');
//     console.log(socket);
// })

// server.on('request',(req,res)=>{
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write('<h1>Welcome to NodeJS</h1>');
//     res.end();
// });