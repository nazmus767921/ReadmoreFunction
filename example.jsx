import React from "react";
import { ReadMore } from "./readmore";
import { myParagraph } from "./Content";

const App = () => {
	return (
		<div>
			<ReadMore content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quo vitae delectus ut modi quasi molestias deleniti veritatis hic, ullam a quidem minus eum beatae ducimus nihil exercitationem natus obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quo vitae delectus ut modi quasi molestias deleniti veritatis hic, ullam a quidem minus eum beatae ducimus nihil exercitationem natus obcaecati.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quo vitae delectus ut modi quasi molestias deleniti veritatis hic, ullam" />
			//! or Dynamic Text
			<ReadMore content={myParagraph.text} />
		</div>
	);
};

export default App;
