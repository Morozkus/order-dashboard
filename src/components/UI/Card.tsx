import React from 'react'
import { Button } from 'react-bootstrap'

interface ICard {
 info: string | number,
 onClick?: () => void
}

const Card = React.memo(({ info, onClick }: ICard) => {
 return (
  <Button variant="outline-info" onClick={onClick}>{info}</Button>
 )
})

export default Card