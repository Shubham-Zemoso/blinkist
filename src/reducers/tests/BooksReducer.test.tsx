import { store } from "../../store/store";
import { getBooks } from "../BooksReducer";

it("checks loading", async () => {
	const mockThunk = await (
		await store.dispatch(getBooks("books"))
	).meta.requestStatus;

	expect(mockThunk).toEqual("fulfilled");
});

it("checks rejected loading", async () => {
	const mockThunk = await (
		await store.dispatch(getBooks("boo"))
	).meta.requestStatus;

	expect(mockThunk).toEqual("rejected");
});
