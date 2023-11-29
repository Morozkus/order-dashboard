import React, { memo, useState, useEffect, useMemo } from 'react'
import { Container } from 'react-bootstrap'
import { IProduct } from '../model/IProduct'
import BoardCard from './BoardCard'
import { useAppSelector } from '../hooks/redux'
import { TSort } from '../model/TSort'
import { useSortedProducts } from '../hooks/useFilterAndSorted'

interface BoardProps {
    products: IProduct[]
    type: number,
    typeSort: string
}

const Board = memo(({ products, type, typeSort }: BoardProps) => {
    const { order } = useAppSelector(state => state.order)

    const filterAndSortedProducts = useSortedProducts({products, type, typeSort})

    return (
        <Container className='flex-row d-flex flex-wrap justify-content-between'>
            {filterAndSortedProducts.map((el: IProduct) => <BoardCard productCount={order[el.id]?.count} id={el.id} image={el.image} price={el.price} title={el.title} content={el.content} key={el.id} />)}
        </Container>
    )
})

export default Board