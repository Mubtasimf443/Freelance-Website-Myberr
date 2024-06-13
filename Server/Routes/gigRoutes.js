/* importing the requirement  */
const gigRoutes = require("express").Router();
import gigs  from '/Server/Models/gigs.js';


/* Doing The Routes */
gigRoutes.get("/", async (req,res) => {
  let gigdata = await gigs.find().limit(20);
  if (gigdata!==null) {
    res.status(200).json({gigdata});
  } else {
    res.status(404).json({massage:"no gig is found "})
  }
});

gigRoutes.get("/gig/:id", async (req,res) => {
  let id = req.params.id;
  let gigdata = await Book.findById(id);
  res.status(200).json({gigdata});
});

gigRoutes.post("/New",async (req,res)=> {
  let gigdata =await new gigs({
    name:req.body.name,
    shortDescription:req.body.shortDescription,
    longDescription:req.body.longDescription,
    price:req.body.price,
    category:req.body.category,
    available:true,
    tags:req.body.tags,
  });
  await gigdata.save();
  res.status(200).json({massage:"Gig Has been publish"});
});

gigRoutes.put("/update", async (req,res) => {
  let id= req.body.id;
  let gigdata = await gigs.findByIdAndUpdate(id, {
    name: req.body.name,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    price: req.body.price,
    category: req.body.category,
    available: true,
    tags: req.body.tags,
  });
  res.status(200).json({massage:"Gig Has been Updated"});
});

gigRoutes.delete("/remove",async (req,res)=> {
  let id = req.body.id;
  let removeId = await gigs.findByIdAndRemove(id);
  res.status(200).json({massage:removeId});
})

