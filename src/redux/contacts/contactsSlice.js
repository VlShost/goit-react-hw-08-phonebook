import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: action.payload,
  };
};

const constactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.payload,
      };
    },

    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items, action.payload],
      };
    },

    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    },
  },
});

export const contactsReducer = constactsSlice.reducer;
