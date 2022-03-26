import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StateProps } from "../components/Types/Types";

export const getBooks = createAsyncThunk(
	"books/getbooks",
	async (data: string) => {
		console.log("entered");
		const res = await axios.get(`http://localhost:8000/${data}`);
		return res.data;
	}
);

interface State {
	books: StateProps[];
}

const initialState: State = {
	books: [],
};

const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBooks.fulfilled, (state, action) => {
			console.log(action.payload);
			state.books = action.payload;
		});
	},
});

export default booksSlice.reducer;
