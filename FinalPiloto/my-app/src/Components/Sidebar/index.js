import React from 'react';
import { Container } from "./styles";
import { IconOptions } from "./IconOptions";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material'; 


const Sidebar = () => {
  return (
    <Container>
      <TwitterIcon className="twitter-logo"/>
      <IconOptions active Icon = {HomeIcon} text ="Home"/>
      <IconOptions Icon = {SearchIcon} text ="Search"/>
      <IconOptions Icon = {NotificationsNoneIcon} text ="Notifications"/>
      <IconOptions Icon = {MailOutlineIcon} text ="Inbox"/>
      <IconOptions primary Icon = {BookmarkBorderIcon} text ="Bookmarks"/>
      <IconOptions primary Icon = {ListAltIcon} text ="List"/>
      <IconOptions primary Icon = {PermIdentityIcon} text ="Profile"/>
      <IconOptions primary Icon = {MoreHorizIcon} text ="More"/>

      <Button variant="outlined" fullWidth>Tweet</Button>
     
    </Container> 
  )
}

export default Sidebar
