import React from 'react'
import { ButtonContainer } from './styles'
import { IButton } from './types'

function Button( {title, variant, onClick, disabled} : IButton)  {
  return (
    <div>
        <ButtonContainer variant={variant} onClick={onClick} disabled={disabled}>
          {title}
        </ButtonContainer>
    </div>
  )
}

export default Button