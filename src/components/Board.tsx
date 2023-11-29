import React, { memo, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { IProduct } from '../model/IProduct'
import BoardCard from './BoardCard'

interface BoardProps {
    products: IProduct[]
    type: number
}

const Board = memo(({ products, type }: BoardProps) => {
    const [filterProducts, setFilterProducts] = useState<IProduct[]>([])

    useEffect(() => {
        setFilterProducts(products.filter(product => product.type_id === type))
    }, [products, type])


    return (
        <Container className='flex-row d-flex flex-wrap justify-content-between'>
            {filterProducts.map((el: IProduct) => <BoardCard id={el.id} image={el.image} price={el.price} title={el.title} content={el.content} key={el.id} />)}
        </Container>
    )
})

export default Board