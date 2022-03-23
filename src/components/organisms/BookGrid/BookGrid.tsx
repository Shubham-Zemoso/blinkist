import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import BookCard from "../../molecules/BookCard/BookCard";
import { StateProps } from "../../Types/Types";
import axios from "axios";
interface Props {
	children?: React.ReactNode;
	label?: string;
}

const BookGrid = ({ children, label }: Props) => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:8000/books`).then((res) => {
			setBooks(res.data);
		});
	}, []);

	return (
		<Grid
			data-testid="grid_container"
			container
			sx={{
				width: "912px",
				marginTop: "25px",
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "28px",
			}}
		>
			{label === undefined
				? books.map((book: StateProps) => {
						return (
							<Grid item>
								<BookCard children={children} img={book} />
							</Grid>
						);
				  })
				: books
						.filter((book: StateProps) => book.status === label)
						?.map((item: StateProps) => {
							return (
								<Grid item>
									<BookCard status="lib" children={children} img={item} />
								</Grid>
							);
						})}
		</Grid>
	);
};

export default BookGrid;
