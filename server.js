import fs from 'fs';
import express from 'express';
import http from 'http';


let app=express();
let server=http.Server(app);



app.get('/', function (req, res) {
    let filename="order.pdf";
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Content-Disposition, Accept");
    res.header("Access-Control-Expose-Headers", "Content-Disposition");
    res.setHeader('Content-disposition', 'attachment; filename='+ filename);
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Content-Type', 'application/octet-stream');   

    fs.createReadStream(filename).pipe(res);
  })

server.listen(5001, function () {
    console.log('listening on *: 5001' );
});


