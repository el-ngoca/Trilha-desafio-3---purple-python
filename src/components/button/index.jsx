import React from 'react'
import { ButtonContainer } from './styles'

function Button( {title, variant, onClick}) {
  return (
    <div>
        <ButtonContainer variant={variant} onClick={onClick}>
          {title}
        </ButtonContainer>
    </div>
  )
}

export default Button