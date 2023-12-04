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

interface useFilterAndMapParams<T, K> {
 array: T[],
 mapFunction: (el: T, i: number, array: T[]) => K,
 filterFunction: (el: T, i: number, array: T[]) => boolean
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
 }, [typeSort, filteredProducts])
 return sortedProducts
}

export const useFilterAndMap = <T, K>({ array, filterFunction, mapFunction }: useFilterAndMapParams<T, K>) => {
 const filterAndMapArray = useMemo(() => {
  return array.filter(filterFunction).map(mapFunction)
 }, [array, filterFunction, mapFunction])

 return filterAndMapArray
}