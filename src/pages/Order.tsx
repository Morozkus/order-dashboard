import React, { useCallback, useEffect } from 'react'
import Table from '../components/UI/Table'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getAllOrder } from '../store/Thunk/orderThunk'
import { IOrder } from '../model/IOrder'
import { useFilterAndMap } from '../hooks/useFilterAndSorted'
import Card from '../components/UI/Card'
import { useNavigate } from 'react-router-dom'

const Order = () => {
 const navigate = useNavigate()

 const dispatch = useAppDispatch()
 const { isLoading, orders } = useAppSelector(state => state.orderBoard)

 const filterFn = useCallback((status: number) => {
  return (el: IOrder, i: number, array: IOrder[]) => el.status === status
 }, [])

 const mapFn = useCallback((el: IOrder, i: number, array: IOrder[]) => el.id, [])

 const prepareTable = useFilterAndMap<IOrder, number>({ array: orders, filterFunction: filterFn(1), mapFunction: mapFn })
 const readyTable = useFilterAndMap<IOrder, number>({ array: orders, filterFunction: filterFn(2), mapFunction: mapFn })

 useEffect(() => {
  dispatch(getAllOrder())
 }, [dispatch])

 return (
  <div className='d-flex flex-column'>
   <Table title='Готовятся' >
    {prepareTable.map((id, i) => <Card info={id} onClick={() => navigate('/product/' + id)} key={'prepare' + id} />)}
   </Table>
   <Table title='Готовы'>
    {readyTable.map((id, i) => <Card info={id} onClick={() => navigate('/product/' + id)} key={'ready' + id} />)}
   </Table>
  </div>
 )
}

export default Order