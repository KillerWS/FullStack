import express from 'express';
import { getPosts,createPost, updatePost,deletePost,likePost} from '../controllers/posts.js';
const router=express.Router();

//获取帖子信息
router.get('/',getPosts)

router.post('/',createPost)

//router.patch() is used for updating existing documents
router.patch('/:id',updatePost)

router.delete('/:id',deletePost)

router.patch('/:id/likePost',likePost)

export default router