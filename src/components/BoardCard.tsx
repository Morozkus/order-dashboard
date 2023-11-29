import React, { FC, useCallback, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from './UI/Counter';
import { useAppDispatch } from '../hooks/redux'
import { incrementProductInOrder, pushProductInOrder, removeProductFromOrder } from '../store/reducers/OrderSlice';

interface IBoardCardProps {
  id: number,
  title: string,
  content?: string,
  image: string,
  price: number,
  productCount: number | undefined
}

const BoardCard: FC<IBoardCardProps> = ({ id, title, content, image, price, productCount }) => {
  const dispatch = useAppDispatch()
  const [isBuy, setIsBuy] = useState(productCount ? true : false)
  const [count, setCount] = useState(productCount || 0)

  const clickBuy = useCallback((productId: number, basicCount: number = 1) => {
    setIsBuy(true)
    setCount(basicCount)
    dispatch(pushProductInOrder({ productId, count: basicCount }))
  }, [dispatch])

  useEffect(() => {
    if (isBuy && count < 1) {
      dispatch(removeProductFromOrder(id))
      setIsBuy(false)
      setCount(0)
    }
  }, [count, dispatch, id, isBuy])

  useEffect(() => {
    if (count > 1) {
      dispatch(incrementProductInOrder({ productId: id, count }))
    }
  }, [count, dispatch, id])

  return (
    <Card style={{ width: '20rem' }} className={'mt-2'}>
      <Card.Img src={image} style={{ height: '15rem' }} />
      <Card.Body className='justify-content-between d-flex flex-column align-items-center'>
        <Card.Title>{title} - {price}$</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Col style={{ marginTop: 'auto' }}>
          {isBuy ?
            <Counter
              count={count}
              callbackDecriment={() => {
                setCount(count => count -= 1)
              }}
              callbackIncrement={() => {
                setCount(count => count += 1)
              }} />
            :
            <Button variant="primary" onClick={() => clickBuy(id, 1)}>Добавить в заказ</Button>
          }
        </Col>
      </Card.Body>
    </Card>
  )
}

export default BoardCard