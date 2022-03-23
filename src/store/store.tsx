import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../reducers/BookReducer";
import BooksReducer from "../reducers/BooksReducer";

export const store = configureStore({
	reducer: {
		books: BooksReducer,
		book: BookReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
