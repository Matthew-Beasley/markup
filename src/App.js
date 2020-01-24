import React, { useState } from 'react';
import marked from 'marked';

function App() {

  const [text, setText] = useState('');

  function MyComponent(val) {
    return <div dangerouslySetInnerHTML={{ _html: marked(text) }} />;
  }

  return (
    <div>
      <h1>Markdown History Editor</h1>
      <div className="container">
        <input type="text" value={text} onChange={(ev) => setText(ev)}></input>
        <div>
          <ul>
          {MyComponent()}
          </ul>
        </div>
      </div>
      <button onClick={MyComponent()}>Save</button>

    </div>
  );
}

export default App;
