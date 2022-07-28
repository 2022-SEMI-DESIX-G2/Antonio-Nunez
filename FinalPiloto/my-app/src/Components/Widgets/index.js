import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import {Widget, Header, DivIcon, DivContent} from "./styles"
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'



export const Widgets = () => {
  return (
   <Widget>

    <Header>

      <DivIcon>
        <SearchIcon className="searchIcon"/>
        <input placeholder = "Buscar en Clone"/>

       


      </DivIcon>


    </Header>

    <DivContent>
      <h2>Que esta pasando?</h2>
      <TwitterTweetEmbed
  tweetId={'933354946111705097'}
/>
  <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 400}}
/>

<TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />

    </DivContent>



   </Widget>
  )
}

export default Widgets