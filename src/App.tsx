import React from 'react';
import { NoteInput } from './components/note-input/NoteInput.component';

function App() {
  return (
    <div className="App">
      <NoteInput addNote={alert}/>
    </div>
  );
}

export default App;
