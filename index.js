const express = require("express")
const  mongoose  = require("mongoose")
const app = express()
const port = 5000
const bodyParser = require("body-parser")
const FormData = require("express-form-data")
app.use(bodyParser.json());
require('dotenv').config()
const geoRoute = require('./routes/geoRoute')
const cors = require('cors')
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB,{useNewUrlParser:true})
        .then(()=>console.log('Connected to DB'))
        .catch((err)=>console.log(err))




// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Methods','*')
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//     });
app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!')
})

app.use('/api/geo', geoRoute)

console.log("yea boy!");
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
 