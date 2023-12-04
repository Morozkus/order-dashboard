export type TStatusOrder = 1 | 2 | 3

export interface IOrder {
 id: number,
 products: InfoOrder[],
 status: TStatusOrder
}

export interface InfoOrder {
 productId: number,
 count: number
}