import React, { FC, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from './UI/Counter';

interface IBoardCardProps {
  title: string,
  content?: string,
  image: string,
  price: number
}

const BoardCard: FC<IBoardCardProps> = ({ title, content, image, price }) => {
  const [isBuy, setIsBuy] = useState(false)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={image} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{title} - {price}$</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Col style={{ marginTop: 'auto' }}>
          {isBuy ?
            <Counter />
            :
            <Button variant="primary" onClick={() => setIsBuy(true)}>Добавить в заказ</Button>
          }
        </Col>
      </Card.Body>
    </Card>
  )
}

export default BoardCard