import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';


export const pasteSlice = createSlice({
  name: 'pastes',
  initialState: {

    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : [],

  },

  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      const i = state.pastes.findIndex((index) => index._id === paste._id);
      if (i >= 0)
        toast.error("Title already exists ")
      else {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("paste created successfully ")

      }


    },
    updateToPastes: (state, action) => {
      const paste = action.payload

      const inddex = state.pastes.findIndex((item) => item._id === paste._id);
      if (inddex >= 0) {
        state.pastes[inddex] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Successfully Updated")
      } else {
        toast.error("Failed to Update")
      }

    },
    resetAllPastes: (state, action) => {

    },
    removePastes: (state, action) => {
      const paste = action.payload;

      const index = state.pastes.findIndex((i) => i._id === paste._id)

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        toast.success("Removed succesfully  ");

      } else {

        toast.error("Failed to delete !! ")
      }


    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removePastes } = pasteSlice.actions

export default pasteSlice.reducer