import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Container, Col, Spinner, Button } from 'react-bootstrap'
import Board from '../components/Board'
import TypesBoard from '../components/TypesBoard'
import { getAllProduct } from '../store/Thunk/productThunk'
import { getAllTypes } from '../store/Thunk/typesThunk'
import SortedMenu from '../components/SortedMenu'
import { TSort } from '../model/TSort'
import { pushOrder } from '../store/Thunk/orderThunk'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
 const navigate = useNavigate()

 const dispatch = useAppDispatch()
 const { isLoading: isProductLoading, productList } = useAppSelector(state => state.product)
 const { isLoading: isTypesLoading, productTypes } = useAppSelector(state => state.types)
 const { order } = useAppSelector(state => state.order)

 const [type, setType] = useState(1)
 const [typeSort, setTypeSort] = useState<TSort>(TSort.UP)

 useEffect(() => {
  !Object.values(productTypes).length && dispatch(getAllTypes())
  !Object.values(productList).length && dispatch(getAllProduct())
 }, [dispatch, productList, productTypes])

 if (isProductLoading || isTypesLoading)
  return (
   <Spinner animation="border" />
  )

 return (
  <Container>
   <Col className='justify-content-start'>
    <TypesBoard key='typesboard' setType={setType} types={productTypes} />
    <Col>
     <SortedMenu key='sortedMenu' setTypeSort={setTypeSort} typeSort={typeSort} />
     {Object.values(order).length ?
      <Button key='order-button' onClick={() => {
       dispatch(pushOrder({ products: Object.values(order) }))
       navigate('/order')
      }}>
       Заказать
      </Button> : false}
    </Col>
   </Col>
   <Board key='shopboard' typeSort={typeSort} type={type} products={productList} />
  </Container>
 )
}

export default Shop