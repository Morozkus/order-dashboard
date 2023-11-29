import { useState, useEffect, useMemo } from 'react'
import { IProduct } from '../model/IProduct'
import { TSort } from '../model/TSort'

interface useFilterParams {
    products: IProduct[],
    type: number
}

interface useSortParams {
    products: IProduct[],
    typeSort: string,
    type: number
}

export const useFilter = ({ products, type }: useFilterParams): IProduct[] => {
    const filterProducts = useMemo(() => {
        return products.filter(product => product.type_id === type)
    }, [products, type])

    return filterProducts
}

export const useSortedProducts = ({ typeSort, products, type }: useSortParams): IProduct[] => {
    const filteredProducts = useFilter({ products, type })

    const sortedProducts = useMemo(() => {
        switch (typeSort) {
            case TSort.UP:
                return [...filteredProducts.sort((a, b) => a.price > b.price ? -1 : 1)]
            case TSort.DOWN:
                return [...filteredProducts.sort((a, b) => a.price > b.price ? 1 : -1)]
            default:
                return [...filteredProducts.sort((a, b) => a.price > b.price ? -1 : 1)]

        }
    }, [typeSort, products, type])
    return sortedProducts
}