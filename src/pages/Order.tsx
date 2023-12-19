import React, { useCallback, useEffect } from 'react'
import Table from '../components/UI/Table'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getAllOrder } from '../store/Thunk/orderThunk'
import { IOrder } from '../model/IOrder'
import { useFilterAndMap } from '../hooks/useFilterAndSorted'
import Card from '../components/UI/Card'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabase/supabase'
import { pushOrderBoard } from '../store/reducers/OrderBoardSlice'
import { Col, Container, Row } from 'react-bootstrap'

const Order = React.memo(() => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const { orders } = useAppSelector(state => state.orderBoard)

  const filterFn = useCallback((status: number) => {
    return (el: IOrder, i: number, array: IOrder[]) => el.status === status
  }, [])

  const addOrderHandler = useCallback((payload: any) => {
    dispatch(pushOrderBoard(payload.new))
  }, [dispatch])

  const mapFn = useCallback((el: IOrder, i: number, array: IOrder[]) => el.id, [])

  const prepareTable = useFilterAndMap<IOrder, number>({ array: orders, filterFunction: filterFn(1), mapFunction: mapFn })
  const readyTable = useFilterAndMap<IOrder, number>({ array: orders, filterFunction: filterFn(2), mapFunction: mapFn })

  useEffect(() => {
    dispatch(getAllOrder())
  }, [dispatch])

  useEffect(() => {
    supabase
      .channel('orders')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'order_menu' }, addOrderHandler)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'order_menu' }, () => dispatch(getAllOrder()))
      .subscribe()

    return () => {
      supabase.removeAllChannels()
    }
  }, [addOrderHandler, dispatch])

  return (
    <Container>
      <Row>

        <Col>
          <Table title='Готовятся' titleColor='#00ff00'>
            {prepareTable.map((id, i) => <Card info={String(id).length > 2 ? Number(String(id).slice(-2)) : id} onClick={() => navigate('/product/' + id)} key={'prepare' + id} />)}
          </Table>
        </Col>

        <Col>
          <Table title='Готовы' titleColor='#ffa343'>
            {readyTable.map((id, i) => <Card info={String(id).length > 2 ? Number(String(id).slice(-2)) : id} onClick={() => navigate('/product/' + id)} key={'ready' + id} />)}
          </Table>
        </Col>

      </Row>
    </Container>
  )
})

export default Order