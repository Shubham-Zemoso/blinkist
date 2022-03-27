import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { StateProps } from "../components/Types/Types";

export const getBooks = createAsyncThunk(
	"books/getbooks",
	async (data: string) => {
		const res = await axios.get(`http://localhost:8000/${data}`);
		return res.data;
	}
);

interface State {
	status: string;
	books: StateProps[];
}

const initialState: State = {
	status: "",
	books: [],
};

const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBooks.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(getBooks.fulfilled, (state, { payload }) => {
			state.status = "success";
			state.books = payload;
		});

		builder.addCase(getBooks.rejected, (state, action) => {
			state.status = "failed";
		});
	},
});

export default booksSlice.reducer;
