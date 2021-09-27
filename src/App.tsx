import React from 'react';
import { useDispatch } from 'react-redux';
import { NoteInput } from './components/note-input/NoteInput.component';
import { NotesList } from './components/notes-list/NotesList.component';
import { addNote } from './redux/notesActions';

import GlobalStyle from './styles/global'

// import styled from 'styled-components';

// const Root = styled.div`
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
//   background: gray;
// `;

const App = () => {
  const dispatch = useDispatch();

  const handleAddNote = (note: string) => {
    dispatch(addNote(note));
  }

  return (
    <div>
      <GlobalStyle />
      <NoteInput addNote={handleAddNote} />
      <NotesList />
    </div>
  );
}

export default App;
