import React, { memo } from 'react'
import { ITypeProduct } from '../model/IType'
import { Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';

interface TypesBoardProps {
    types: ITypeProduct[]
    setType: (type: number) => void
}

const TypesBoard = memo(({ types, setType }: TypesBoardProps) => {
    return (
        <ListGroup horizontal={'sm'} className="my-2">
            {types.map(type => <ListGroup.Item variant="primary">
                <Button
                    variant='primary'
                    onClick={() => setType(type.id)}
                >
                    {type.type}
                </Button>
            </ListGroup.Item>)}
        </ListGroup>
    )
})

export default TypesBoard