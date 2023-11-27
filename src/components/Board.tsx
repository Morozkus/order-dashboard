import React, { memo, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { IProduct } from '../model/IProduct'
import BoardCard from './BoardCard'

interface BoardProps {
    products: IProduct[]
    type: number
}

interface IOrder {
    productId: number,
    count: number
}

const addOrder = (orders: IOrder[], order: IOrder) => {
    orders.push(order)
}

const Board = memo(({ products, type }: BoardProps) => {
    const [filterProducts, setFilterProducts] = useState<IProduct[]>([])
    const [order, setOrder] = useState<IOrder[]>([])

    useEffect(() => {
      setFilterProducts(products.filter(product => product.type_id === type))
    }, [type])
    

    return (
        <Container className='flex-row d-flex flex-wrap justify-content-between'>
            {filterProducts.map((el: IProduct) => <BoardCard image={el.image} price={el.price} title={el.title} content={el.content} key={el.id} />)}
        </Container>
    )
})

export default Board