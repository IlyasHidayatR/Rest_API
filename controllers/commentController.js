import Comments from "../models/Comment.js";
export const getComments = async(req,res)=>{
    try{
        const comment = await Comments.find();
        res.status(200).json(comment);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
//get By ID
export const getCommentsID = async(req,res)=>{
    try{
        const comment = await Comments.findById(req.params.id);
        res.status(200).json(comment);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
//create Comment
export const saveComments = async(req,res)=>{
    const Comment = new Comments(req.body);
    try{
        const ressave = await Comment.save();
        res.status(201).json(ressave);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
//update Comment
export const updateComments = async(req,res)=>{
    var commentID = await Comments.findById(req.params.id);
    if (!commentID) return res.status(404).json({status:false, message:"Data Not Found"});
    try{
        const ressave = await Comments.updateOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(ressave);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
//delete Comment
export const deleteComments = async(req,res)=>{
    var commentID = await Comments.findById(req.params.id);
    if (!commentID) return res.status(404).json({status:false, message:"Data Not Found"});
    try{
        const ressave = await Comments.deleteOne({_id:req.params.id});
        res.status(200).json(ressave);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}