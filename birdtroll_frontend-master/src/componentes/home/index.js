import React, { useEffect, useState } from "react";
import { Container, Header } from "./styles";
import { TweetBox } from "./TweetBox";
import { Posts } from "./Posts";
import axios from "axios";

export const Home = () => {
  const [post, setPost] = useState([]);

  const URI = "http://localhost:4000/";

  const getPost = async () => {
    try {
      const posts = [];
      const { data } = await axios.get(`${URI}api/posts`);
      data.map((doc) => posts.push({ ...doc }));
      setPost(posts);
    } catch (e) {
      console.log("Error getting cached document:", e);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      {/* header */}
      <Header>
        <h2>Inicio</h2>
      </Header>
      <TweetBox />

      {post.map((pos) => (
        <Posts
          key={pos._id}
          id={pos._id}
          name={pos.name}
          userName={pos.userName}
          verified={pos.verified}
          text={pos.text}
          timestamp={pos.timestamp}
          avatar={pos.avatar}
          imagePost={pos.imagePost}
        />
      ))}
    </Container>
  );
};
