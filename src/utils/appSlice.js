import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarOpen: false,
    },
    reducers:{
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        closdeSidebar: (state) => {
            state.isSidebarOpen = false;
        }
    }
})

export const { toggleSidebar, closdeSidebar } = appSlice.actions;
export default appSlice.reducer;
