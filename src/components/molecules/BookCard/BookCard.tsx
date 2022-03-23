import React, { useEffect, useState } from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Link,
} from "@mui/material";

import { TimeIcon, UserIcon } from "../../../Icons";
import { StateProps } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { getBooks } from "../../../reducers/BooksReducer";
import { updateBook } from "../../../reducers/BookReducer";

interface Props {
	children?: React.ReactNode;
	bookData: StateProps;
	status?: "lib";
}

const CardComponent = ({ children, bookData }: Props) => {
	const [id, setId] = useState<string | undefined>();
	const dispatch = useDispatch();

	useEffect(() => {
		id && dispatch(updateBook({ id: id, status: bookData.status }));
		id && dispatch(getBooks("books"));
	}, [dispatch, id, bookData.status]);
	return (
		<div>
			<Card>
				<CardMedia>
					<img src={bookData.image} alt="" />
				</CardMedia>

				<CardContent>
					<Typography variant="subtitle1" component="div">
						{bookData.title}
					</Typography>
					<Typography variant="body1" color="text.secondary">
						{bookData.author}
					</Typography>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<TimeIcon
								sx={{
									width: "16.67px",
									height: "16.67px",
								}}
							/>
							<Typography variant="caption3" sx={{ color: "text3.main" }}>
								{bookData.minutes}
							</Typography>
						</div>
						{bookData.reads !== "" ? (
							<div style={{ display: "flex", alignItems: "center" }}>
								<UserIcon
									style={{ width: "24px", height: "17.5px", color: "text3" }}
								/>
								<Typography variant="caption3" sx={{ color: "text3.main" }}>
									{bookData.reads}
								</Typography>
							</div>
						) : undefined}
					</div>
				</CardContent>
				<CardActions onClick={() => setId(bookData.id)}>{children}</CardActions>
			</Card>
		</div>
	);
};

const BookCard = ({ children, bookData, status }: Props) => {
	return (
		<div>
			{status === undefined ? (
				<Link href={`/bookdetails/${bookData.id}`}>
					<CardComponent children={children} bookData={bookData} />
				</Link>
			) : (
				<CardComponent children={children} bookData={bookData} />
			)}
		</div>
	);
};

export default BookCard;
