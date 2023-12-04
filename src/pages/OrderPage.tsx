import React, { useEffect, useMemo, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Spinner } from 'react-bootstrap';
import { getOneOrder } from '../store/Thunk/orderThunk';
import { useParams } from 'react-router-dom';
import { getAllProduct } from '../store/Thunk/productThunk';
import { IProduct } from '../model/IProduct';
import OrderPageHeader from '../components/OrderPageHeader';
import OrderPageTable from '../components/OrderPageTable';

const ProductMenu = React.memo(() => {
 const { id } = useParams()
 const dispatch = useAppDispatch()
 const { infoOrder, isLoading, status } = useAppSelector(state => state.orderPage)
 const { productList, isLoading: productLoaging } = useAppSelector(state => state.product)

 const [productsOfDone, setProductsOfDone] = useState<number>(0)

 const objectProducts = useMemo(() => {
  return productList.reduce((acc: { [key: number]: IProduct }, cur) => {
   acc[cur.id] = cur
   return acc
  }, {})
 }, [productList])

 useEffect(() => {
  id && dispatch(getOneOrder(Number(id)))
  dispatch(getAllProduct())
 }, [dispatch, id])

 if (isLoading || productLoaging) {
  return (
   <Spinner />
  )
 }

 return (
  <ListGroup>
   <OrderPageHeader done={productsOfDone} id={id ?? ''} infoOrderLength={infoOrder.length} status={status || 1} />
   <OrderPageTable infoOrder={infoOrder} objectProducts={objectProducts} increment={() => setProductsOfDone(productsOfDone + 1)} />
  </ListGroup>
 )
})

export default ProductMenu