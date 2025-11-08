
import React from 'react'
import ReactDOM from 'react-dom';

function PortalRootNodeComp() {
  const portalRootNode = document.getElementById('portal-root');
  return ReactDOM.createPortal(
    <div>
      <h3>This component should be in portal-root node </h3>
    </div>
    , portalRootNode
  );
}

export default PortalRootNodeComp;
