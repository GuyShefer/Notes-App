import React, { ChangeEvent, useState } from 'react';

interface INewNoteInputProps {
    addNote(note: string): void;
}

export const NoteInput: React.FC<INewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState("");

    const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    }

    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    }

    return (
        <>
            <div>
                <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
                <button onClick={onAddNoteClick}>Add Note</button>
            </div>
            <hr />
        </>
    )
}