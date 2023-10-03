import { nanoid, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  list: [
    // For test(works if LS is cleared)!!! =>
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // <= For test(works if LS is cleared)!!!
  ],
};

const slice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(s, a) {
        s.list.push(a.payload);
      },
      prepare(dataContact) {
        return {
          payload: {
            id: nanoid(),
            ...dataContact,
          },
        };
      },
    },
    deleteContact(s, a) {
      s.list = s.list.filter(contact => contact.id !== a.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsReducer = slice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const { addContact, deleteContact } = slice.actions;
