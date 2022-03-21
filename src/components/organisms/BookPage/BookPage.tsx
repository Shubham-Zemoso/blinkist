import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import BookDetails from "../BookDetails/BookDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
const BookPage = () => {
	const [book, setBook] = useState({
		id: "0",
		title: "Unknown",
		author: "Not Known",
		reads: "",
		image: "",
	});

	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:8000/books/${id}`).then((res) => {
			setBook(res.data);
		});
	}, []);

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
