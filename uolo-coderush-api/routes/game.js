var express = require('express');
var router = express.Router();
require('../src/db/connection');
const History = require('../src/models/history');
  
//handle get request
router.get("/", async(req,res)=>{
try {
    const getHistory = await History.find({}).sort({'numberOfChances':1});
    res.send(getHistory);
} catch (error) {
    res.status(400).send(error);
}
})

//handle post request
router.post("/", async(req,res)=>{
try {
    const addingHistory = new History(req.body);
    console.log(req.body);
    const insertHistory = await addingHistory.save();
    res.status(201).send(insertHistory);
} catch (error) {
    res.status(400).send(error);
}
})

//handle get request by id
router.get("/:id", async(req,res)=>{
try {
    const _id = req.params.id;
    const getSingleHistory = await History.findById(_id);
    res.send(getSingleHistory);
} catch (error) {
    res.status(400).send(error);
}
})

//handle update request by id
router.patch("/:id", async(req,res)=>{
try {
    const _id = req.params.id;
    const getSingleHistory = await History.findByIdAndUpdate(_id, req.body, {
        new: true
    });
    res.send(getSingleHistory);
} catch (error) {
    res.status(500).send(error);
}
})

//handle delete request by id
router.delete("/:id", async(req,res)=>{
try {
    const getSingleHistory = await History.findByIdAndDelete(req.params.id);
    res.send(getSingleHistory);
} catch (error) {
    res.status(500).send(error);
}
})
  

module.exports = router;