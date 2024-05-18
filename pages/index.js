import React from "react";
import Usecallback from "@/task/Usecallback";
import Suspense from "@/task/Suspense";
import { Container } from "reactstrap";
const Home = () => {
	return (
		<Container className="mt-5">
			{/* <Usecallback /> */}
			<Suspense />
		</Container>
	);
};

export default Home;
