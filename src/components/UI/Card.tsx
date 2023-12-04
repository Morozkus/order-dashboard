import React from 'react'
import { Button } from 'react-bootstrap'

interface ICard {
 info: string | number,
 onClick?: () => void
}

const Card = React.memo(({ info, onClick }: ICard) => {
 return (
  <Button variant="outline-info" className='px-5 py-3 fs-5' onClick={onClick}>{info}</Button>
 )
})

export default Card