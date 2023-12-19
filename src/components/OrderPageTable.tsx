import React, { useMemo, useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { InfoOrder } from '../model/IOrder'
import { IProduct } from '../model/IProduct'

interface OrderPageTableProps {
  infoOrder: InfoOrder[],
  objectProducts: {
    [key: number]: IProduct
  },
  increment: () => void
  status: number | null
}

const OrderPageTable = React.memo(({ infoOrder, objectProducts, increment, status }: OrderPageTableProps) => {
  const infoOrderObjectId = useMemo(() => {
    return infoOrder.reduce((acc: { [key: number]: boolean }, cur) => {
      acc[cur.productId] = false
      return acc
    }, {})
  }, [infoOrder])

  const [isDone, setDone] = useState<{ [key: number]: boolean }>(infoOrderObjectId)
  return (
    <>
      {infoOrder.map(position =>
        <ListGroup key={'position-group' + position.productId} horizontal={'xxl'} className="my-2">

          <ListGroup.Item className='flex-grow-1 text-center' key={'position-title' + position.productId}>{objectProducts[position.productId]?.title}</ListGroup.Item>

          {objectProducts[position.productId]?.content &&
            <ListGroup.Item className='flex-grow-1 text-center' key={'position-content' + position.productId}>Ингридиенты: {objectProducts[position.productId]?.content}</ListGroup.Item>}

          <ListGroup.Item className='flex-grow-1 text-center' key={'position-count' + position.productId}>Количество: {position.count} шт.</ListGroup.Item>

          {!isDone[position.productId] && status === 1 && <ListGroup.Item className='flex-grow-1 text-center' key={'position-done-btn' + position.productId}>
            <Button onClick={() => {
              if (!isDone[position.productId]) {
                setDone({ ...isDone, [position.productId]: true })
                increment()
              }
            }}>Приготовлено</Button>
          </ListGroup.Item>}

        </ListGroup>

      )}
    </>
  )
})

export default OrderPageTable