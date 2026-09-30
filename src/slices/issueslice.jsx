import { createSlice } from "@reduxjs/toolkit";

const issueSlice = createSlice({
  name: "issues",

  initialState: {
    issues: []
  },

  reducers: {

    // Issue a book
    issueBook: (state, action) => {
      state.issues.push(action.payload);
    },

    // Return a book
    returnBook: (state, action) => {
      const issue = state.issues.find(
        (issue) => issue.id === action.payload
      );

      if (issue) {
        issue.returnDate = new Date().toLocaleDateString();

        // Important: book is now returned
        issue.status = "returned";
      }
    },

    // Delete history record if needed
    deleteIssue: (state, action) => {
      state.issues = state.issues.filter(
        (issue) => issue.id !== action.payload
      );
    }

  }
});

export const {
  issueBook,
  returnBook,
  deleteIssue
} = issueSlice.actions;

export default issueSlice.reducer;

