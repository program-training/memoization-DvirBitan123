import React from 'react';
import { useMemo } from 'react';

interface ListInterface {
  id: number,
  value: string
}

function ComplexComponent({ list }) {
  console.log('Rendered: ComplexComponent');

  // TODO: Optimize this section so that sorting doesn't happen on every render.
  const sortedList: ListInterface[] = useMemo(() => {
    const myList = list.sort((a, b) => a.id - b.id)
    console.log('turned on');
    return myList
  }, [list])
  
  

  return (
    <ul>
      {sortedList.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}

export default ComplexComponent;
