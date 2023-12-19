import React, { PropsWithChildren } from 'react'

interface ITable {
  title: string,
  titleColor: string,
}

const Table = React.memo(({ titleColor, title, children }: PropsWithChildren<ITable>) => {
  return (
    <div className='d-flex flex-column justify-content-center flex-grow-1 mt-5'>
      <div className="d-flex align-items-center justify-content-center w-100" style={{ backgroundColor: titleColor }}>
        <h1>{title}</h1>
      </div>
      <div className="d-flex gap-3 flex-wrap mt-3">
        {children}
      </div>
    </div>
  )
})

export default Table