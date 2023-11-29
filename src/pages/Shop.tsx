import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/supabase'
import BoardCard from '../components/BoardCard'
import { IProduct } from '../model/IProduct'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Container, Spinner } from 'react-bootstrap'
import Board from '../components/Board'
import TypesBoard from '../components/TypesBoard'
import { getAllProduct } from '../store/Thunk/productThunk'
import { getAllTypes } from '../store/Thunk/typesThunk'




const Shop = () => {
  const dispatch = useAppDispatch()
  const { isLoading: isProductLoading, productList } = useAppSelector(state => state.product)
  const { isLoading: isTypesLoading, productTypes} = useAppSelector(state => state.types)

  const [type, setType] = useState(1)

  useEffect(() => {
    dispatch(getAllTypes())
    dispatch(getAllProduct())
  }, [])

  if (isProductLoading || isTypesLoading) 
    return (
      <Spinner animation="border" />
      )

  return (
    <Container>
      <TypesBoard setType={setType} types={productTypes} />
      <Board type={type} products={productList} />
    </Container>
  )
}

export default Shop