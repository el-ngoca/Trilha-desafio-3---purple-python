import React from 'react'
import { Container, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
  return (
    
    <Container>
        <ImageBackground src="./login.webp"/>
        <Content>
            <UserInfo>
                <UserPicture src="./logo.png"/>
                <div>
                    <h4> Eduardo Ngoca</h4>
                    <p> ha 8 min</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projecto para curso de React e Css</h4>
                <p>Projecto feito o curso de react no bootcamp ele da global</p>
            </PostInfo>
            <HasInfo>
                <h4>#React #Css #Js</h4>
               <p>
                    10
                </p> 
            </HasInfo>
        </Content>
    </Container>
  )
}

export {Card}
