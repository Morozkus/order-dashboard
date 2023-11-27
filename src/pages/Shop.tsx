import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/supabase'
import BoardCard from '../components/BoardCard'
import { IProduct } from '../model/IProduct'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getAllProduct } from '../store/reducers/ProductSlice'




const Shop = () => {
  const dispatch = useAppDispatch()
  const { isLoading, productList } = useAppSelector(state => state.product)
  useEffect(() => {
    dispatch(getAllProduct())
  }, [])

  return (
    <div>
      {productList?.map((el: any, i: number) => <BoardCard image={el.image} price={el.price} title={el.title} content={el.content} key={i} />)}
    </div>
  )
}

export default Shop