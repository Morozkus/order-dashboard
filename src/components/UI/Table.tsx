import React from 'react'

interface ITable {
 title: string,
 children?: React.ReactNode
}

const Table = React.memo(({ title, children }: ITable) => {
 return (
  <div className='d-flex flex-column align-items-center'>
   <h1>{title}</h1>
   <div className="d-flex gap-3">
    {children}
   </div>
  </div>
 )
})

export default Table