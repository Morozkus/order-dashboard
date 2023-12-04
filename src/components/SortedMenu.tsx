import React, { memo, useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { TSort } from '../model/TSort';

interface SortedMenuProps {
 typeSort: string,
 setTypeSort: (currentSort: TSort) => void
}


const SortedMenu = memo(({ setTypeSort, typeSort }: SortedMenuProps) => {
 const [typeSortList] = useState<TSort[]>([TSort.UP, TSort.DOWN])
 return (
  <DropdownButton
   as={ButtonGroup}
   key={'primary-dorpdown'}
   id={`dropdown-variants-primary`}
   variant={'Primary'.toLowerCase()}
   title={'Сортировать'}
  >
   {typeSortList.map((type) => <Dropdown.Item key={type} onClick={() => setTypeSort(type)} active={typeSort === type}>{type}</Dropdown.Item>)}

  </DropdownButton>
 )
})

export default SortedMenu