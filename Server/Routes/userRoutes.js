gigRoutes.get("/", async (req,res) => {
  let userData = await User.find().limit(20);
  if (userData!==null) {
    res.status(200).json({userData});
  } else {
    res.status(404).json({massage:"no user is found "})
  }
});

gigRoutes.get("/user/:id", async (req,res) => {
  let id = req.params.id;
  let userData = await User.findById(id);
  res.status(200).json({gigdata});
});

gigRoutes.post("/New",async (req,res)=> {
  let userData =await new User({
    name:req.body.name,
    shortDescription:req.body.shortDescription,
    longDescription:req.body.longDescription,
    price:req.body.price,
    category:req.body.category,
    available:true,
    tags:req.body.tags,
  });
  await userData.save();
  res.status(200).json({massage:"Gig Has been publish"});
});

gigRoutes.put("/update", async (req,res) => {
  let id= req.body.id;
  let userData = await User.findByIdAndUpdate(id, {
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
  let removeId = await User.findByIdAndRemove(id);
  res.status(200).json({massage:removeId});
})

