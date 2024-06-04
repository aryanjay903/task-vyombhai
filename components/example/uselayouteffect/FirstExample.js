import { useEffect, useLayoutEffect } from "react";

const FirstExample = () => {
	useEffect(() => {
		console.log("useEffect");
	}, []);
	useLayoutEffect(() => {
		console.log("useLayoutEffect");
	});
	return <div>FirstExample</div>;
};

export default FirstExample;
