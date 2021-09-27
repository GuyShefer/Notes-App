import React from 'react';
import { useSelector } from 'react-redux';
import { INotesState } from '../../redux/notesReducer';
import { UL, LI } from './StyledNotesList';

export const NotesList: React.FC = () => {
    const notes = useSelector<INotesState, INotesState["notes"]>(state => state.notes);

    return (
        <UL>
            {notes.map((note) => <LI key={note}>{note}</LI>)}
        </UL>
    )
}