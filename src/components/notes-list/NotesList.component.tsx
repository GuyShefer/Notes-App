import React from 'react';
import { useSelector } from 'react-redux';
import { INotesState } from '../../redux/notesReducer';

export const NotesList: React.FC = () => {
    const notes = useSelector<INotesState, INotesState["notes"]>(state => state.notes);

    return (
        <ul>
            {notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
    )
}