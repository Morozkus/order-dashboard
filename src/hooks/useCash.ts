import { useMemo, useEffect, useState } from 'react'

interface useCashParams {
 condition: boolean,
 cashCondition?: string,
 key: string,
 falseFn: () => void
}

export const useCash = ({ condition, falseFn, key }: useCashParams): null | string => {
 const value = useMemo(() => {
  if (condition) {
   return localStorage.getItem(key)
  }
  return null
 }, [condition, key])

 useEffect(() => {
  if (!condition) falseFn()
 }, [condition, falseFn])

 return value
}