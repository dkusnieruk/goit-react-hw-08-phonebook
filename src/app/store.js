import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../Redux/ContactsSlice';
import filterReducer from '../Redux/FilterSlice';
import  authReducer  from '../Redux/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // contacts: contactReducer,
    // filters: filterReducer,
  },
});
