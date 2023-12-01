import React, { useMemo, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Container, Col, Spinner } from 'react-bootstrap'
import Board from '../components/Board'
import TypesBoard from '../components/TypesBoard'
import { getAllProduct } from '../store/Thunk/productThunk'
import { getAllTypes } from '../store/Thunk/typesThunk'
import SortedMenu from '../components/SortedMenu'
import { TSort } from '../model/TSort'

const Shop = () => {
  const dispatch = useAppDispatch()
  const { isLoading: isProductLoading, productList } = useAppSelector(state => state.product)
  const { isLoading: isTypesLoading, productTypes } = useAppSelector(state => state.types)

  const [type, setType] = useState(1)
  const [typeSort, setTypeSort] = useState<TSort>(TSort.UP)

  useMemo(() => {
    !Object.values(productTypes).length && dispatch(getAllTypes())
    !Object.values(productList).length && dispatch(getAllProduct())
  }, [])

  if (isProductLoading || isTypesLoading)
    return (
      <Spinner animation="border" />
    )

  return (
    <Container>
      <Col className='justify-content-start'>
        <TypesBoard setType={setType} types={productTypes} />
        <SortedMenu setTypeSort={setTypeSort} typeSort={typeSort} />
      </Col>
      <Board typeSort={typeSort} type={type} products={productList} />
    </Container>
  )
}

export default Shop