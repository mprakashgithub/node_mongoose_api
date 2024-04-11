const mongoose = require('mongoose');
const userDatasSchema= mongoose.Schema({
    name: String,
    email: String,
    mobile: Number
});

module.exports= mongoose.model("user_datas", userDatasSchema);