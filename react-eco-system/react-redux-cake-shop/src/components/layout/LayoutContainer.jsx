import React from "react";

import "./LayoutContainer.css";
import LayoutCakeContainer from "../cake/LayoutCakeContainer";
import LayoutIceCreamContainer from "../icecream/LayoutIceCreamContainer";

function LayoutContainer() {
  return (
    <div>
      <hr />
      <h2>
        *** <u>Famous Bakery</u> ***
      </h2>
      <div className="parent-container">
        <div className="child-box left">
          <div>
            <h2>
              <u>Cake Store</u>
            </h2>
            <div>
              <LayoutCakeContainer />
            </div>
          </div>
        </div>
        <div className="child-box right">
          <div>
            <h2>
              <u>Icecream Store</u>
            </h2>
            <div>
              <LayoutIceCreamContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutContainer;
