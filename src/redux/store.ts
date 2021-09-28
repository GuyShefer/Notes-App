import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { notesReducer } from "./notesReducer";

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    debug: true,
    storage
};

const persistedReducer = persistReducer<any, any>(persistConfig, notesReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
