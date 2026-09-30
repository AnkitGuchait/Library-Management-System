import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/authslice";
import bookReducer from "../slices/bookslice";
import memberReducer from "../slices/memberslice";
import issueReducer from "../slices/issueslice";

// Load saved data from localStorage
const loadState = () => {
  try {
    const savedState = localStorage.getItem("libraryState");

    if (savedState === null) {
      return undefined;
    }

    return JSON.parse(savedState);
  } catch (error) {
    console.error("Could not load state:", error);
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    members: memberReducer,
    issues: issueReducer
  },

  preloadedState
});

// Save Redux state to localStorage
store.subscribe(() => {
  try {
    const state = store.getState();

    const stateToSave = {
      auth: state.auth,
      books: state.books,
      members: state.members,
      issues: state.issues
    };

    localStorage.setItem(
      "libraryState",
      JSON.stringify(stateToSave)
    );
  } catch (error) {
    console.error("Could not save state:", error);
  }
});

export default store;