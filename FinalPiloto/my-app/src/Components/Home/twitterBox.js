import React, {useState}  from 'react'
import {TwitBox, Div, Avatar, Form, DivBox, File} from './styles'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifIcon from '@mui/icons-material/Gif';
import { Button } from '@mui/material';
import {db, storage} from "../../firebase"; 

export const TwitterBox = () => {

  const [images, setImages] = useState('')

const handleUpload = e =>{
  const file = e.target.files[0];
  const storageRef = storage.ref(`/avatar/${file.name}`).put(file);
  storageRef.on(
    "state_changed",
    snapshot => {},
    error =>{
      console.log(error)
    }, () =>{
      storage
      .ref("avatar")
      .Child(file.name)
      .getDownloadUrl()
      .then(url => setImages(url))
    })
  } 

  return (
  <TwitBox>
    <Form>
        <Div>
            <Avatar src="https://randomuser.me/api/portraits/lego/4.jpg" alt="" />

            <File type="file" onChange={handleUpload}/>
                <div className="columns">
                    <input text="text" placeholder ="Twitea algo"></input>

                    <input text="text" placeholder ="Usuario"></input>


                </div>
        </Div>
        <Div>
            <DivBox>
            <File type="file" primary/>
                <AddPhotoAlternateIcon/>
                
                <GifIcon/>

            </DivBox>
            <File type="file"/>

            <input text="text" placeholder ="Opcional: Url de la imagen/gif"></input>
              <Button>Tweet</Button>
        </Div>
    

    </Form>
  </TwitBox>
  )}
  export default TwitterBox