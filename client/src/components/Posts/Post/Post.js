import React from 'react';
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//一个轻量级的js库，方便了对时间的操作
import moment from 'moment'
import {useDispatch} from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts';
const Post=({post,setCurrentId})=>{
   // const Post=({post})=>{
    const classes=useStyles();
    const dispatch = useDispatch();
    return(
       
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color:'white'}} 
                    size="small" 
                    onClick={()=>{
                         setCurrentId(post._id)
                        
                        }}>

                    {/*fontSize="default"已经弃用 <MoreHorizIcon fontSize="default"/> */}
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            <div className={classes.details}>
            {/* 遍历出tags */}
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        {/* <Typography variant="body2" color="textSecondary" component="h2">{post.tags}</Typography> */}
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.cardActions}>
        <Button color="primary" size="small" onClick={()=>dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize="small"/>
            Like &nbsp;
            {post.likeCount}
        </Button>
        <Button color="primary" size="small" onClick={()=>dispatch(deletePost(post._id))}>
            <ThumbUpAltIcon fontSize="small"/>
            Delete
        </Button>
        </Typography>
      </CardContent>
        </Card>
    )

}

export default Post;