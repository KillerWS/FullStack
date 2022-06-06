import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar,Avatar,Button,Toolbar,Typography} from '@material-ui/core'
import useStyles from './styles'
import memories from '../../images/memories.jpg'

const Navbar = () => {
    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer} >
            <Typography component={Link} to="/" className={classes.heading} varaint="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60"></img>
            </div>
            <Toolbar className={classes.toolbar}>
                {/* 如果登录就展示sth */}
                {user?(
                    <div className={classes.profile}>
                        {/* 头像 */}
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button varaint="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}

            </Toolbar>
        </AppBar>
  )
}

export default Navbar