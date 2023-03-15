import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

 const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
      addContact(state, action) {
          const contact = {
              ...action.payload,
              id: nanoid(),
          };
        state.push(contact);
      },
          deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact,deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;