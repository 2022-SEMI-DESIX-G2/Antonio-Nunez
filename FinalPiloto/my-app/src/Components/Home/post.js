import React from 'react'
import  {Post, Avatar, PostBody, PostDescription, Images, PostFooter} from './styles'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


export const Poster = () => {
  return (
    <Post>
    <div className= "postAvatar">
        <Avatar src="https://randomuser.me/api/portraits/lego/4.jpg"/>
    </div>

    <PostBody>
        <div>
            <div>
                <h3>Tony
                    <span>
                        <VerifiedIcon className="postIcon" />
                       @tonysain12
                    </span></h3>

                    <PostDescription>
                        <p>Hola mundo</p>

                    
                    </PostDescription>
                
            </div>
            <Images src="https://media1.giphy.com/media/PnUatAYWMEMvmiwsyx/giphy.gif?cid=ecf05e47d13or91ojr5aaf235yy7c9l7vv2yys34ub3tk48h&rid=giphy.gif&ct=g"/>
            <PostFooter>

            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />

            </PostFooter>
        </div>
    </PostBody>
    </Post>
  )
}

export default Poster