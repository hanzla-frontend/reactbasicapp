import React from 'react';

// import { Container } from './styles';

function Child({name,age}) {
    console.log(name,age)
  return <div>Hello your Name is {name} and your age is {age}</div>;
}

export default Child;