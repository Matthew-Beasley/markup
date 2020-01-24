import React, { useState } from 'react';
import marked from 'marked';

function App() {

  const [text, setText] = useState('');


  return (
    <div>
      <h1>Markdown History Editor</h1>
      <div className="container">
        <input type="text" value={text} onChange={(ev) => { setText(ev.target.value)}}></input>
        <div>
          {console.log(marked(text))}
          <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
        </div>
      </div>
      <button >Save</button>
    </div>
  );
}

export default App;
