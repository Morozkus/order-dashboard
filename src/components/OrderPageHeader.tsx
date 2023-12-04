import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { InfoOrder } from '../model/IOrder'
import { useAppDispatch } from '../hooks/redux'
import { setOrderStatus } from '../store/Thunk/orderThunk'

interface OrderPageHeaderProps {
 id: string,
 status: number,
 infoOrderLength: number,
 done: number
}

const OrderPageHeader = React.memo(({ id, infoOrderLength, status, done }: OrderPageHeaderProps) => {
 const dispatch = useAppDispatch()

 return (
  <ListGroup horizontal={'xxl'} className="my-2">
   <ListGroup.Item className='d-flex justify-content-center align-items-center flex-grow-1' active>Заказ номер: {id}</ListGroup.Item>

   <ListGroup.Item className='d-flex justify-content-center align-items-center flex-grow-1' variant='success'>
    Статус: {status === 1 ? 'Готовится' : status === 2 ? 'Готово' : 'Отдано'}
   </ListGroup.Item>

   <ListGroup.Item className='d-flex justify-content-center align-items-center flex-grow-1' variant={status === 2 ? 'success' : done === infoOrderLength ? 'success' : 'danger'}>
    Готово: {status === 1 ? done : infoOrderLength} из {infoOrderLength}
   </ListGroup.Item>

   {done === infoOrderLength && <ListGroup.Item className='flex-grow-1'>
    <Button variant="success" onClick={() => dispatch(setOrderStatus({ id: Number(id), status: 2 }))}>Готово</Button>
   </ListGroup.Item>}

   {status === 2 && <ListGroup.Item className='flex-grow-1'>
    <Button variant="success" onClick={() => dispatch(setOrderStatus({ id: Number(id), status: 3 }))}>Отдано</Button>
   </ListGroup.Item>}

  </ListGroup>
 )
})

export default OrderPageHeader