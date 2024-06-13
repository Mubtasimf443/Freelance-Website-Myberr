//بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
//ইনশাআল্লাহ, আল্লাহ তায়া’লা আমার জন্য যথেষ্ট 
//ﷺ

/* Requiring Important Pakages */

const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const router = require('/Book App/Server/routes/book-routes.js');

const cors = require("cors") ;
/*seting up Environment */
mongoose.connect(process.env.MONGO_URL).then(()=> {
  console.log(`database connectad`);
});

const app = express();

app.use(express.json());
app.use(cors());




/*Express Operations */
app.get("/", () => {
  res.statuse(200).send('hello World');
});


app.listen(5000, ()=>{
  console.log("server is listening to the port")
});
