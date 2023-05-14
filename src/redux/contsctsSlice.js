import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contscts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ name, number }) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },

    deleteContact: {
      reducer: (state, action) => {
        const id = action.payload;
        return state.filter(contact => contact.id !== id);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;