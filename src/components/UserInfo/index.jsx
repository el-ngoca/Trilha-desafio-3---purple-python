import React from 'react'
import { Container, NameText, Progress, UserPicture } from './styles'

const UserInfomation = ({name, image, percentual}) => {
  return (
    <Container>
        <UserPicture src={image}/>
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

export { UserInfomation } 