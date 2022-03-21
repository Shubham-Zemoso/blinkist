import React from "react";
import { Typography } from "@mui/material";
import BookDetails from "../BookDetails/BookDetails";
import { StateProps } from "../../Types/Types";
import data from "../../../db.json";
const BookPage = () => {
	const dummy = {
		id: "0",
		title: "Unknown",
		author: "Not Known",
		reads: "",
	};

	const book: StateProps = data.books[1];

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
				<BookDetails bookData={book.id === "234" ? dummy : book} />
				<img src={book.image} alt="book" width="304px" height="304px" />
			</div>
		</div>
	);
};

export default BookPage;
