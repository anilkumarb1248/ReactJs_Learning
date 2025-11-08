
import React, { Component } from 'react'
import InputFocusClassComp from './InputFocusClassComp';
import CallbackRefsDemo from './CallbackRefsDemo';
import FocusInputParent from './FocusInputParent';
import ForwardRefParentFocus from './ForwardRefParentFocus';

class RefsDemos extends Component {
  render() {
    return (
      <div>
        {/* <InputFocusClassComp/> */}
        {/* <CallbackRefsDemo/> */}
        {/* <FocusInputParent/> */}
        <ForwardRefParentFocus/>
      </div>
    )
  }
}

export default RefsDemos;
