//! Created by Nazmus Sakib, GitHub:nazmus767921 //! USING ONLY REACT
//? Use Better Comments vs_code extension to see the comments pop.
//! ------------------------------------------

//* CALLING SYNTAX
//? to use the component, first import the component where you want to use it.
//? Then, call the component function where would be the content and paste the text in -- content=  -- or link the dynamic content.
// see examples in example.jsx
// <ReadMore content="" />;
//? ------------------------------------------

//* Imports
import { useState } from "react";

//* Readmore function
export const ReadMore = (props) => {
	//! props Destructuring
	const { content } = props;

	//! Default function
	// ----------------------------------
	const [Read, setRead] = useState(true);
	const handleReadmore = () => {
		setRead((prev) => !prev);
	};
	const pStyle = {
		overflow: "hidden",
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: "4",
	};
	return (
		<>
			<p style={Read ? pStyle : null}>{content}</p>
			<button
				onClick={() => handleReadmore()}
				style={{
					padding: "5px 20px 5px 20px",
					margin: "40px 0",
					fontSize: "20px",
					color: "#fff",
					backgroundColor: "#000",
					borderRadius: "5px",
				}}>
				{Read ? "Read More" : "Read Less"}
			</button>
		</>
	);
};

// //* Readmore function
// export const ReadMore = (props) => {
// 	//* props Destructuring
// 	const { content } = props;

// 	//* Default function
// 	const [Read, setRead] = useState("line-clamp-4");
// 	const handleReadmore = () => {
// 		if (Read === "line-clamp-4") {
// 			setRead("");
// 		} else if (Read === "") {
// 			setRead("line-clamp-4");
// 		}
// 	};
// 	return (
// 		<>
// 			<p className={content.length > 200 ? Read : ""}>{content}</p>
// 			<button
// 				onClick={() => handleReadmore()}
// 				className={
// 					content.length > 200 ? "flex btn py-1 px-2 text-xl my-6" : "hidden"
// 				}>
// 				readmore
// 			</button>
// 		</>
// 	);
// };
