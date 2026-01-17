import React, { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Section title="Examples" id="examples">
        <Tabs
          ButtonsContainer="menu"
          // buttonsContainer="div"
          // buttonsContainer={Section}
          // buttonsContainer={Section()} // Wrong
          // buttonsContainer="<Section/>" // Wrong
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                // onSelect={() => handleSelect("components")}
                onClick={() => handleSelect("components")}
                //Usually we need to handle the button click (onClick) in TabButton component.
                // But we are using forwarding prop technique here
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </div>
  );
}

export default Examples;
