import { useEffect, useTransition, useState, startTransition } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";

const Buttton = ({ children, isActive, onClick }) => {
	if (isActive) {
		return <Button color="warning">{children}</Button>;
	}
	return (
		<Button color="primary" onClick={onClick}>
			{children}
		</Button>
	);
};

const SecondExample = () => {
	return (
		<Container className="mt-3">
			<Row>
				<Col md={6}>
					<h3>Without UseTransition</h3>
					<WithoutUseTransition />
				</Col>
				<Col md={6}>
					<h3>With UseTransition</h3>
					<WithUseTransition />
				</Col>
			</Row>
		</Container>
	);
};

const WithoutUseTransition = () => {
	const [tab, setTab] = useState("");
	return (
		<div>
			<div className="d-flex gap-1">
				<Buttton
					isActive={tab === "About"}
					onClick={() => {
						setTab("About");
					}}
				>
					About
				</Buttton>
				<Buttton
					isActive={tab === "Posts"}
					onClick={() => {
						setTab("Posts");
					}}
				>
					Posts
				</Buttton>
				<Buttton
					isActive={tab === "Contact"}
					onClick={() => {
						setTab("Contact");
					}}
				>
					Contact
				</Buttton>
			</div>

			<hr />
			{tab === "About" && <About />}
			{tab === "Posts" && <Posts />}
			{tab === "Contact" && <Contact />}
		</div>
	);
};
const WithUseTransition = () => {
	const [tab, setTab] = useState("");
	const [isPending, startTransition] = useTransition();
	const handleChange = (preValue) => () => {
		startTransition(() => {
			setTab(preValue);
		});
	};
	return (
		<div>
			<div className="d-flex gap-1">
				<Buttton isActive={tab === "About"} onClick={handleChange("About")}>
					About
				</Buttton>
				<Buttton isActive={tab === "Posts"} onClick={handleChange("Posts")}>
					Posts
				</Buttton>
				<Buttton isActive={tab === "Contact"} onClick={handleChange("Contact")}>
					Contact
				</Buttton>
			</div>
			<hr />
			{tab === "About" && <About />}
			{tab === "Posts" && <Posts />}
			{tab === "Contact" && <Contact />}
		</div>
	);
};

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [text, setText] = useState("");
	const [isPending, startTransition] = useTransition();
	const filtered =
		text === "" ? posts : posts.filter((post) => post.title.includes(text));
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((json) => setPosts(json));
	}, []);
	const items = [];
	for (let i = 0; i < filtered.length; i++) {
		items.push(<List key={i} value={filtered[i].title} />);
	}
	return (
		<>
			<Input
				type="text"
				value={text}
				onChange={(e) => {
					startTransition(() => {
						setText(e.target.value);
					});
				}}
				placeholder="Without Use Transition"
			/>
			<ul>{items}</ul>
		</>
	);
};
const List = ({ value }) => {
	let startTime = performance.now();
	while (performance.now() - startTime < 1) {
		// Do nothing for 1 ms per item to emulate extremely slow code
	}
	return <li>{value}</li>;
};

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<h1>About</h1>
			<h1>About</h1>
			<h1>About</h1>
			<h1>About</h1>
			<h1>About</h1>
			<h1>About</h1>
		</div>
	);
};

const Contact = () => {
	return (
		<div>
			<h1>Contact</h1>
			<h1>Contact</h1>
			<h1>Contact</h1>
			<h1>Contact</h1>
			<h1>Contact</h1>
			<h1>Contact</h1>
			<h1>Contact</h1>
		</div>
	);
};

export default SecondExample;
