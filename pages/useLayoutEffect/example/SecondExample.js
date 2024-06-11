import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { Input } from "reactstrap";
const SecondExample = () => {
	const [useEffects, setUseEffects] = useState([]);
	const [useLayoutEffects, setUseLayoutEffects] = useState([]);
	const inputRef = useRef(null);
	const inputRef2 = useRef(null);
	useEffect(() => {
		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then((res) => res.json())
				.then((json) => setUseEffects(json));
		}, 5000);
		inputRef.current.focus();
	}, []);
	useLayoutEffect(() => {
		setTimeout(() => {
			fetch("https://jsonplaceholder.typicode.com/posts")
				.then((res) => res.json())
				.then((json) => setUseLayoutEffects(json));
		}, 4000);
		inputRef2.current.focus();
	}, []);
	console.log(useEffects);
	console.log(useLayoutEffects);
	return (
		<div className="container my-3">
			<div className="row">
				<div className="col-6">
					<Input type="text" ref={inputRef} />
				</div>
				<div className="col-6">
					<Input type="text" ref={inputRef2} />
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<h3 className="card-title">useEffect</h3>
					{useEffects?.map((user) => (
						<li key={user.id} className="border">
							{user.name}
						</li>
					))}
				</div>
				<div className="col-6">
					<h3 className="card-title">useLayoutEffect</h3>
					{useLayoutEffects?.map((post) => (
						<li key={post.userId} className="border">
							{post.title}
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default SecondExample;
