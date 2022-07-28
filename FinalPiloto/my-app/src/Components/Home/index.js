import React from 'react'
import {Container, Header} from './styles'
import { TwitterBox } from './twitterBox'
import {Poster} from './post'

export const Home = () => {
  return (
    <Container>

      <Header><h2>Home</h2></Header>
        

     <TwitterBox />
     <Poster />
     <Poster />
     <Poster />
     <Poster />
     <Poster />

    </Container>
  )
}

export default Home
