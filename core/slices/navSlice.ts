import { createSlice } from "@reduxjs/toolkit";

interface INavSliceState {
    data: string[]
}

const initialState: INavSliceState = {
    data: []
}

export const navSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        loadNavigations: (state, action) => {
            state.data = action.payload;
        }
    }
});

const { reducer, actions } = navSlice;
export const { loadNavigations } = actions;
export default reducer;