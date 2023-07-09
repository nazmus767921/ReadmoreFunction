//! Created by Nazmus Sakib, GitHub:nazmus767921
//? Use Better Comments vs code extension to see the comments pop.
//! ------------------------------------------

//! CALLING SYNTAX
//? to use the component, first import the component where you want to use it.
//? Then, call the component function where would be the content and paste the text in -- content=  -- or link the dynamic content.
// see examples in example.jsx
<ReadMore content="" />;
//? ------------------------------------------

//! Imports
import { useState } from "react";
//? ------------------------------------------

//! Readmore function
export const ReadMore = (props) => {
	//! props Destructuring
	const { content } = props;

	//! Default function
	const [Read, setRead] = useState("line-clamp-4");
	const handleReadmore = () => {
		if (Read === "line-clamp-4") {
			setRead("line-clamp-0");
		} else if (Read === "line-clamp-0") {
			setRead("line-clamp-4");
		}
	};
	return (
		<>
			<p className={content.length > 200 ? Read : ""}>{content}</p>
			<button
				onClick={() => handleReadmore()}
				style={{
					paddingLeft: "10px 20px 10px 20px",
					fontSize: "20px",
					color: "#fff",
					backgroundColor: "#000",
					borderRadius: "30px",
				}}>
				readmore
			</button>
		</>
	);
};
