// import { createSelector, createSlice } from "@reduxjs/toolkit";
// import { deleteContact, fetchContacts, addContact } from "./contactsOps";
// import { selectFiltersContact } from "./filtersSlice";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     loading: false,
//     error: false,
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchContacts.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(addContact.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);

//         state.loading = false;
//       })
//       .addCase(addContact.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(deleteContact.pending, (state) => {
//         state.error = false;
//         state.loading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           (item) => item.id != action.payload.id
//         );
//         state.loading = false;
//       }),
// });
// export const selectIsLoading = (state) => state.contacts.loading;
// export const selectIsError = (state) => state.contacts.error;
// export const selectContacts = (state) => state.contacts.items;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFiltersContact],
//   (contacts, filterName) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filterName.toLowerCase())
//     );
//   }
// );

// export const contactsReducer = contactsSlice.reducer;
