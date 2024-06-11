import { useEffect, useLayoutEffect } from "react";

const FirstExample = () => {
	const info = [
		{
			id: 1,
			title: "useLayoutEffect",
			description:
				"After DOM mutations, but before visual changes and before browser painting. This means the user has to wait for your code.",
		},
		{
			id: 2,
			title: "useEffect",
			description:
				"After DOM mutations, after visual changes, and after the browser has painted. This means the user does not have to wait for your code.",
		},
	];
	useEffect(() => {
		console.log("useEffect");
	}, []);
	useLayoutEffect(() => {
		console.log("useLayoutEffect");
	});
	return (
		<div className="container my-3">
			{info.map((item) => (
				<div key={item.id} className="card my-3">
					<div className="card-body">
						<h5 className="card-title">{item.title}</h5>
						<p className="card-text">{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default FirstExample;
