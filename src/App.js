import React, { useState } from 'react';
import marked from 'marked';

function App() {

  const [text, setText] = useState('');
  const [versions, setVersion] = useState([]);


  return (
    <div>
      <h1>Markdown History Editor</h1>
      <div className="container">
        <input type="text" value={text} onChange={(ev) => { setText(ev.target.value)}}></input>
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
        </div>
      </div>
        <button onClick={() => setVersion([...versions, text])}>Save</button>
      {versions.map((version, idx) => { return <button key={idx} onClick={() => setText(version)}>Version {idx}</button>} )}
    </div>
  );
}

export default App;
