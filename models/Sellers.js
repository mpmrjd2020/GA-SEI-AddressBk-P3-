const mongoose = require('../db/connections')

const SellersSchema = new mongoose.Schema({
    name: String,
    event: 
        {
            ref: "Events",
            type: mongoose.Schema.Types.ObjectId
        }
})

const Sellers = mongoose.model("Sellers", SellersSchema);

module.exports = Sellers