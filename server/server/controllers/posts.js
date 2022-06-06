import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'



export const getPosts= async(req,res)=>{
    
    try {
        //使用mongoose对象直接find所有
        //因为find等方法从模型内部查找东西需要时间
        const postMessage =await PostMessage.find();
        //console.log(postMessage)
       
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}


export const createPost=async (req,res)=>{
    const post= req.body
    console.log('req.body参数:'+req.body)
    
    const newPost =new PostMessage(post);
 
    try {
        await newPost.save();
        
        res.status(201).json(newPost);
    } catch (error) {
        //409: Conflict
        res.status(409).json({message:error.message})
    }
}

export const updatePost=async(req,res)=>{
    console.log('param参数'+req.params._id)
    const {id:_id} =req.params;
    
    const post =req.body
    //console.log('id查询:'+PostMessage.ObjectId)
    console.log('id查询:'+_id)
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

   // const updatedPost =await PostMessage.findByIdAndUpdate(_id,post,{new: true})
   const updatedPost =await PostMessage.findByIdAndUpdate(_id,{...post, _id},{new: true})
    res.json(updatedPost)

}

export const deletePost=async(req,res)=>{
    const {id} =req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post deleted successfully'});

}

export const likePost=async(req,res)=>{

    const {id} =req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    const post =await PostMessage.findById(id)
    //返回修改后的文档而不是原始文档。默认为假 new:true 默认为false
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
    res.json(updatedPost);

}