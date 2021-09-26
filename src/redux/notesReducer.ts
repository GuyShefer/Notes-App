import { Action } from "./notesTypes";

export interface INotesState {
    notes: string[];
}

const initialState = {
    notes: []
}

export const notesReducer = (state: INotesState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_NOTE": {
            return { ...state, notes: [...state.notes, action.payload] }
        }
        default:
            return state;
    }
}