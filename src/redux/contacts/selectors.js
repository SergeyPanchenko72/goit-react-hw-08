import { createSelector } from "@reduxjs/toolkit";
import { selectFiltersContact } from "../filters/selectors";

export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFiltersContact],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
