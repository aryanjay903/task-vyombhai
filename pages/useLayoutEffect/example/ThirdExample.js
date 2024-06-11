import React, { useState, useLayoutEffect, useEffect } from "react";

const Index = () => {
	return (
		<div className="container my-3">
			<ExampleUseEffect />
			<ExampleUseLayoutEffect />
		</div>
	);
};

function ExampleUseLayoutEffect() {
	const [size, setSize] = useState(100);

	useLayoutEffect(() => {
		console.log("useLayoutEffect code");
		setSize(200);
	}, []);

	return (
		<div style={{ width: size, height: size, backgroundColor: "lightcoral" }}>
			Box
			{console.log("useLayoutEffect return code")}
		</div>
	);
}

function ExampleUseEffect() {
	const [size, setSize] = useState(100);

	useEffect(() => {
		console.log("useEffect code");
		setSize(200);
	}, []);

	return (
		<div style={{ width: size, height: size, backgroundColor: "lightblue" }}>
			{console.log("useEffect return code")}
			Box
		</div>
	);
}

export default Index;
