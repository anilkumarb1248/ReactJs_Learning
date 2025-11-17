
import React, { Component } from 'react'
import ComponentC from './ComponentC';

export class ComponentB extends Component {
  render() {
    return (
      <div>
        <h3> Component B </h3>
        <ComponentC />
      </div>
    )
  }
}

export default ComponentB;
