import React, { useEffect } from 'react';
import memo from 'react' 

const ChildComponent = ({ obj, setObj }) => {
  console.log('Rendered: ChildComponent');
  UseEffect(() => {
    setTimeout(() => setObj(...obj, {value: }))

  }, [obj])


  return <div>{obj.value}</div>;
};

export default ChildComponent;
