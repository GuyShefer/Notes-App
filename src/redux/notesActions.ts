import { Action } from "./notesTypes";

export const addNote = (note: string): Action => ({
    type: "ADD_NOTE",
    payload: note
});