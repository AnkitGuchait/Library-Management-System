import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "members",

  initialState: {
    members: []
  },

  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },

    deleteMember: (state, action) => {
      state.members = state.members.filter(
        (member) => member.id !== action.payload
      );
    },

    updateMember: (state, action) => {
      const index = state.members.findIndex(
        (member) => member.id === action.payload.id
      );

      if (index !== -1) {
        state.members[index] = action.payload;
      }
    }
  }
});

export const {
  addMember,
  deleteMember,
  updateMember
} = memberSlice.actions;

export default memberSlice.reducer;

