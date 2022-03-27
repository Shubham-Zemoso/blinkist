import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import BookCard from "../../molecules/BookCard/BookCard";
import { StateProps } from "../../Types/Types";
import { getBooks } from "../../../reducers/BooksReducer";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
interface Props {
	children?: React.ReactNode;
	label?: string;
}

const BookGrid = ({ children, label }: Props) => {
	const dispatch = useDispatch();
	const { books } = useSelector((state: RootState) => state.books);

	useEffect(() => {
		dispatch(getBooks("books"));
	}, [dispatch]);

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
								<BookCard children={children} bookData={book} />
							</Grid>
						);
				  })
				: books
						.filter((book: StateProps) => book.status === label)
						?.map((item: StateProps) => {
							return (
								<Grid item>
									<BookCard status="lib" children={children} bookData={item} />
								</Grid>
							);
						})}
		</Grid>
	);
};

export default BookGrid;
