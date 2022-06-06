import axios from 'axios';

//指向后端路由的url
const url='http://localhost:5000/posts';

export const fetchPosts=() => axios.get(url);

//把数据通过api发送给后端
export const createPost=(newPost)=>axios.post(url,newPost);
//更新数据
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//删除帖子
export const delelte =(id)=>axios.delete(`${url}/${id}`);
//点赞加1
export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`);