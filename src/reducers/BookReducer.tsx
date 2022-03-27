import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { StateProps } from "../components/Types/Types";

export const getBook = createAsyncThunk(
	"books/getBook",
	async (id: string | undefined) => {
		const res = await axios.get(`http://localhost:8000/books/${id}`);
		return res.data;
	}
);

export const updateBook = createAsyncThunk(
	"books/updateBook",
	async (data: { id: string | undefined; status: string | undefined }) => {
		const { id, status } = data;
		const res = await axios.patch(`http://localhost:8000/books/${id}`, {
			status: status === "currentlyReading" ? "finished" : "currentlyReading",
		});
		return res.data;
	}
);

interface State {
	status: string;
	book: StateProps;
}

const initialState: State = {
	status: "",
	book: {
		id: "0",
		title: "Unknown",
		author: "Not Known",
		reads: "",
		image: "",
	},
};

const bookSlice = createSlice({
	name: "books",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBook.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(getBook.fulfilled, (state, action) => {
			state.status = "success";
			state.book = action.payload;
		});

		builder.addCase(getBook.rejected, (state, action) => {
			state.status = "failed";
		});

		builder.addCase(updateBook.pending, (state, action) => {
			state.status = "loading";
		});

		builder.addCase(updateBook.fulfilled, (state, action) => {
			state.status = "success";
			state.book = action.payload;
		});

		builder.addCase(updateBook.rejected, (state, action) => {
			state.status = "failed";
		});
	},
});

export default bookSlice.reducer;
