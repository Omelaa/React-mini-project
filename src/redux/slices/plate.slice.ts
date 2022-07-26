import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPlate} from "../../Interfaces";
import {plateService} from "../../service/plate.service";

type TPlateState = {
    plates: IPlate[];
    isLoading: boolean;
};

const initialState: TPlateState = {
    plates: [],
    isLoading: false
};

const getAll = createAsyncThunk(
    'plateSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await plateService.getAll();
            return data;
        } catch (event:any) {
            return rejectWithValue(event.response.data);
        }
    }
);

const plateSlice = createSlice({
    name: 'plateSlice',
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(getAll.pending, (state, actions) => {
            state.isLoading = true;
        })
        builder.addCase(getAll.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.plates = actions.payload;
        })
    })
});

const {reducer: reducerPlate, actions} = plateSlice;

const plateActions = {
    getAll
};

export {
    reducerPlate,
    plateActions
}

