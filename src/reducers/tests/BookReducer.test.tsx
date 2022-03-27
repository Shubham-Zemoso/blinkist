import { store } from "../../store/store";
import { getBook, updateBook } from "../BookReducer";

it("checks updateBook loading", async () => {
	const mockThunk = await (
		await store.dispatch(updateBook({ id: "1", status: "reading" }))
	).meta.requestStatus;

	expect(mockThunk).toEqual("fulfilled");
});

it("checks updateBook rejectedloading", async () => {
	const mockThunk = await (
		await store.dispatch(updateBook({ id: "0", status: "reading" }))
	).meta.requestStatus;

	expect(mockThunk).toEqual("rejected");
});

it("checks getBook loading", async () => {
	const mockThunk = await (
		await store.dispatch(getBook("1"))
	).meta.requestStatus;

	expect(mockThunk).toEqual("fulfilled");
});

it("checks getBook rejected loading", async () => {
	const mockThunk = await (
		await store.dispatch(getBook("0"))
	).meta.requestStatus;

	expect(mockThunk).toEqual("rejected");
});
