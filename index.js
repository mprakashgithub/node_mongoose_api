const express = require('express');
require("./config");
const UserData = require('./user_data');
const app = express();

app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new UserData(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await UserData.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await UserData.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await UserData.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(1111)