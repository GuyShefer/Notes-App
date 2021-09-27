import React from 'react';
import { useDispatch } from 'react-redux';
import { NoteInput } from './components/note-input/NoteInput.component';
import { NotesList } from './components/notes-list/NotesList.component';
import { addNote } from './redux/notesActions';

import GlobalStyle from './styles/global';
import { Title, HR } from './styles/StyledApp';

const App = () => {
  const dispatch = useDispatch();

  const handleAddNote = (note: string) => {
    dispatch(addNote(note));
  }

  return (
    <div>
      <GlobalStyle />
      <Title>Notes App</Title>
      <NoteInput addNote={handleAddNote} />
      <HR />
      <NotesList />
    </div>
  );
}

export default App;
