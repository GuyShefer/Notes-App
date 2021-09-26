import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NoteInput } from './components/note-input/NoteInput.component';
import { addNote } from './redux/notesActions';
import { INotesState } from './redux/notesReducer';

function App() {
  const notes = useSelector<INotesState, INotesState["notes"]>(state => state.notes);

  const dispatch = useDispatch();

  const handleAddNote = (note: string) => {
    dispatch(addNote(note));
  }

  return (
    <div className="App">
      <NoteInput addNote={handleAddNote} />
      <ul>
        {notes.map(note => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
