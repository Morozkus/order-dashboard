export type TStatusOrder = 'pending' | 'ready' | 'got'

export interface IOrder {
    id: number,
    products: InfoOrder[],
    status: TStatusOrder
}

export interface InfoOrder {
    productId: number,
    count: number
}