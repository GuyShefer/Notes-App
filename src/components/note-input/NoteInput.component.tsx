import React, { FormEvent, useState } from 'react';
import { InputContainer, TextArea, Button } from './StyledNoteInput';

interface INewNoteInputProps {
    addNote(note: string): void;
}

export const NoteInput: React.FC<INewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState("");

    const updateNote = (e: FormEvent<HTMLTextAreaElement>) => {
        setNote(e.currentTarget.value);
    }

    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    }

    return (
        <InputContainer>
            <TextArea onChange={updateNote} value={note} name="note" placeholder="Note..." rows={4} cols={50} />
            <Button onClick={onAddNoteClick}>Add Note</Button>
        </InputContainer>
    )
}