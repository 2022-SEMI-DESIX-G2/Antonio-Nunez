import React, { useState, useEffect } from "react";
import { Container, Header } from "./styles";
import { Post, Avatar, PostBody, PostDescription, Images, PostFooter } from "./styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import User from "../../img/usuario.png";
import axios from "axios";

export const ProfileBio = ({
    name,
  userName,
  verified,
  text,
  timestamp,
  avatar,
  imagePost
}) => {

  return (
    <Container>
         <div className="post-avatar">
        <Avatar src={avatar} />
        <PostBody> 
            <div>
              <h3>
                {name}
                <span>
                  <VerifiedUserIcon className="post_icon" />
                {userName}
                </span>
              </h3>
        </div>
    <>
    <h1>About Me</h1>
    <PostDescription>
    <p>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
    </p>
    </PostDescription>
    </>
    </PostBody>
    </div>
    </Container>
    
  );
};
