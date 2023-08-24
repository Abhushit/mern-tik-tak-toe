import tiktaktoeModel from "./tiktaktoe.model.js"


const getAllLists = async(req, res, next) => {
    try{    
        const Lists = await tiktaktoeModel.find().sort({_id: -1}).populate().exec();
        return res.json(
            {
                message: "List fetched successfully!",
                status: 200,
                data: Lists
            }
        )
    }catch(err){
        next(err)
    }
}

const saveData = async(req,res,next) => {
    try{
        if(req.body){
            let newData = await tiktaktoeModel.create({
                player1: req.body.player1,
                player2: req.body.player2,
            })
            return res.json({
                message: "Game data saved successfully!",
                status: 200,
                data: newData
            })
        }
    }catch(err){
        next(err);
    }
}

export default {
   getAllLists , saveData
}