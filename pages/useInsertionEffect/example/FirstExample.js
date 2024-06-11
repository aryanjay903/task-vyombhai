import {
	useInsertionEffect,
	useLayoutEffect,
	useState,
	useEffect,
} from "react";

const FirstExample = () => {
	return (
		<div className="container my-3 d-flex gap-5">
			<UseUseEffect />
			<UseUseLayoutEffect />
			<UseUseInsertionEffect />
		</div>
	);
};

const UseUseEffect = () => {
	const [cn, setcn] = useState("lightblue");
	useEffect(() => {
		console.log("useEffect");
		const style = document.createElement("style");
		style.innerHTML = `
			.card {
				width: 15rem;
				background-color: ${cn};
			}
			.card:hover {
				width: 20rem;
				background-color: lightcoral;
			}
		`;
		if (cn === "black") {
			style.innerHTML = `
				.card {
					width: 15rem;
					background-color: ${cn};
					color: white;
				}
				.card:hover {
					width: 20rem;
					background-color: lightcoral;
				}
			`;
		}
		document.head.appendChild(style);
	}, [cn]);
	return (
		<div className="card" onClick={() => setcn("black")}>
			Use useEffect
		</div>
	);
};
const UseUseLayoutEffect = () => {
	const [cn, setcn] = useState("lightblue");
	useLayoutEffect(() => {
		console.log("useLayoutEffect");
		const style = document.createElement("style");
		style.innerHTML = `
			.card0 {
				width: 15rem;
				background-color: ${cn};
			}
			.card0:hover {
				width: 20rem;
				background-color: lightcoral;
			}
		`;
		if (cn === "black") {
			style.innerHTML = `
				.card0 {
					width: 15rem;
					background-color: ${cn};
					color: white;
				}
				.card0:hover {
					width: 20rem;
					background-color: lightcoral;
				}
			`;
		}
		document.head.appendChild(style);
	}, [cn]);
	return (
		<div className="card0" onClick={() => setcn("black")}>
			Use useLayoutEffect
		</div>
	);
};

const UseUseInsertionEffect = () => {
	const [cn, setcn] = useState("lightblue");
	useInsertionEffect(() => {
		console.log("useInsertionEffect");
		const style = document.createElement("style");
		style.innerHTML = `
			.card1 {
				width: 15rem;
				background-color: ${cn};
			}
			.card1:hover {
				width: 20rem;
				background-color: lightcoral;
			}
		`;
		if (cn === "black") {
			style.innerHTML = `
				.card1 {
					width: 15rem;
					background-color: ${cn};
					color: white;
				}
				.card1:hover {
					width: 20rem;
					background-color: lightcoral;
				}
			`;
		}
		document.head.appendChild(style);
		return () => document.head.removeChild(style);
	}, [cn]);
	return (
		<div className="card1" onClick={() => setcn("black")}>
			Use useInsertionEffect
		</div>
	);
};

export default FirstExample;
