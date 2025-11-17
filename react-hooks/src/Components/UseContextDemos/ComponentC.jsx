
import React, { Component } from 'react'
import ComponentD from './ComponentD';
import ComponentE from './ComponentE';

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <h4> Component C </h4>
        <ComponentD />
        <ComponentE />

      </div>
    )
  }
}

export default ComponentC;
