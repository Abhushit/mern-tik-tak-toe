var tiktaktoeModel = require("./tiktaktoe.model.js");

var getAllLists = async function (req, res, next) {
    try {
        var Lists = await tiktaktoeModel.find().sort({ _id: -1 }).populate().exec();
        return res.json({
            message: "List fetched successfully!",
            status: 200,
            data: Lists
        });
    } catch (err) {
        next(err);
    }
};

var saveData = async function (req, res, next) {
    try {
        if (req.body) {
            var newData = await tiktaktoeModel.create({
                player1: req.body.player1,
                player2: req.body.player2,
            });
            return res.json({
                message: "Game data saved successfully!",
                status: 200,
                data: newData
            });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllLists: getAllLists,
    saveData: saveData
};
