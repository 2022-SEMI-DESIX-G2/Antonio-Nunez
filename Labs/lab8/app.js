const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    
          var dato = 5;
          let n1 = 0, n2 = 1, nextTerm;
          for (let i = 1; i <= dato; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
 }

    res.status(200);
    res.send("Welcome to root URL of Server");


 
});


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
