const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Routes = require('./Router/Route')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
app.use('/',Routes);

const port = 3005; 

const dbconnection = require('./DB Connection/MongoDB_Connect')
dbconnection.connectDB().then(()=>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err)=>{
console.log("err",err)
})



   


