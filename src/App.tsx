import React from 'react';
import { useDispatch } from 'react-redux';
import { NoteInput } from './components/note-input/NoteInput.component';
import { NotesList } from './components/notes-list/NotesList.component';
import { addNote } from './redux/notesActions';

const App = () => {
  const dispatch = useDispatch();

  const handleAddNote = (note: string) => {
    dispatch(addNote(note));
  }

  return (
    <div className="App">
      <NoteInput addNote={handleAddNote} />
      <NotesList />
    </div>
  );
}

export default App;
