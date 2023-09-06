import { createSlice } from "@reduxjs/toolkit";

const initialState={
    theme:'light'
}

const themeSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        changeTheme:(state,action)=>{
            const existingTheme=action.payload;
            state.theme=existingTheme;
            console.log(state.theme)
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;