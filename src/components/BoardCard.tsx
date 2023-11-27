import React, {FC} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface IBoardCardProps {
  title: string,
  content?: string,
  image: string,
  price: number
}

const BoardCard: FC<IBoardCardProps> = ({title, content, image, price}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title} - {price}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="primary">Добавить в заказ</Button>
      </Card.Body>
    </Card>
  )
}

export default BoardCard