import { memo, useState, useTransition } from "react";
import { Button, Col, Container, Row } from "reactstrap";

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

const FirstExample = () => {
	return (
		<Container className="container my-3">
			<Row>
				<Col md={6}>
					<h3>Without Use useTransition</h3>
					<WithoutUseTransition />
				</Col>
				<Col md={6}>
					<h3>With Use useTransition</h3>
					<WithUseTransition />
				</Col>
			</Row>
		</Container>
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
			{tab === "Posts" && <Posts isPending={isPending} />}
			{tab === "Contact" && <Contact />}
		</div>
	);
};
const Loading = () => {
	return <h1>Loading...</h1>;
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

const Posts = ({ isPending }) => {
	const items = [];
	for (let i = 1; i <= 1000; i++) {
		items.push(<List key={i} value={i} />);
	}
	if (isPending) {
		return <Loading />;
	}
	return <ul>{items}</ul>;
};

const List = ({ value }) => {
	let startTime = performance.now();
	while (performance.now() - startTime < 1) {
		// Do nothing for 1 ms per item to emulate extremely slow code
	}
	return (
		<li>
			<h6>#Task {value}</h6>
		</li>
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

export default FirstExample;
