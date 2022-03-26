import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import BookDetails from "../BookDetails/BookDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getBook } from "../../../reducers/BookReducer";
const BookPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { book } = useSelector((state: RootState) => state.book);

	useEffect(() => {
		dispatch(getBook(id));
	}, [dispatch, id]);

	return (
		<div
			data-testid="book_page"
			style={{
				marginTop: "80px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography sx={{ display: "flex", width: "912px" }}>
				Get the key ideas from
			</Typography>
			<div
				style={{
					marginTop: "40px",
					width: "912px",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<BookDetails bookData={book} />
				<img src={book.image} alt="book" width="304px" height="304px" />
			</div>
		</div>
	);
};

export default BookPage;
