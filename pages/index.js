import React from "react";
import Usecallback from "@/task/Usecallback";
import Suspense from "@/task/Suspense";
import { Container } from "reactstrap";
import Usememo from "@/task/Usememo";
import Usecontext from "@/task/Usecontext";
import Useeffect from "@/task/Useeffect";
import Link from "next/link";
const Home = () => {
	return (
		<Container className="mt-5">
			{/* <Usecallback /> */}
			{/* <Suspense /> */}
			{/* <Usememo /> */}
			{/* <Usecontext /> */}
			<Link href="/UseEffect">useEffect</Link>
		</Container>
	);
};

export default Home;
