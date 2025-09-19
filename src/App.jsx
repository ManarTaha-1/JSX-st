import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import TapButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";


function App() {
  const [selectedTopic , setSelectedTopic] = useState();
  function handelSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((item)=> (<CoreConcept key={item.title} {...item}/>))}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton  onSelect={() => handelSelect("components")}>Components</TapButton>
            <TapButton  onSelect={() => handelSelect("jsx")}>JSX</TapButton>
            <TapButton  onSelect={() => handelSelect("props")}>Props</TapButton>
            <TapButton  onSelect={() => handelSelect("state")}>State</TapButton>
          </menu>
            {!selectedTopic && <p>Please Select a topic</p>}
            {selectedTopic && <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre >
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
            

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
