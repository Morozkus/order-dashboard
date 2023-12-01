export interface response {
    status: number,
    statusText: string
}

export interface fetchResponse<T> extends response {
    data: T[]
}