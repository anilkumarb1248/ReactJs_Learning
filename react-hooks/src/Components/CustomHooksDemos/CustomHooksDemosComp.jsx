import React from 'react'
import DocumentTitleOne from './DocumentTitle/DocumentTitleOne';
import DocumentTitleTwo from './DocumentTitle/DocumentTitleTwo';
import CounterOne from './UseCounterDemo/CounterOne';
import CounterTwo from './UseCounterDemo/CounterTwo';
import UserForm from './UseInputDemo/UserForm';
import UserFormWithCustomHook from './UseInputDemo/UserFormWithCustomHook';

function CustomHooksDemosComp() {
  console.log("Learning Custom Hooks");
  
  return (
    <div>
      <h2> Custom Hooks Demos Component </h2>
      {/* <DocumentTitleOne/>
      <DocumentTitleTwo/> */}
      {/* <CounterOne/>
      <CounterTwo/> */}
      <UserForm/>
      <UserFormWithCustomHook/>
    </div>
  )
}

export default CustomHooksDemosComp;
