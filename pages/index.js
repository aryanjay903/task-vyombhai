import React from "react";
import Usecallback from "@/task/Usecallback";
import Suspense from "@/task/Suspense";
import { Container } from "reactstrap";
import Usecontext from "@/task/Usecontext";
import Useeffect from "@/task/Useeffect";
import Link from "next/link";
const Home = () => {
	return (
		<Container>
			<div className="mt-5 d-flex flex-column gap-3">
				{/* <Usecallback /> */}
				{/* <Suspense /> */}
				{/* <Usememo /> */}
				{/* <Usecontext /> */}
				<Link href="/UseEffect" className="btn btn-primary">
					useEffect
				</Link>
				<Link href="/Usememo" className="btn btn-primary">
					useMemo
				</Link>
				<Link href="/Usecontext" className="btn btn-primary">
					useContext
				</Link>
				<Link href="/UseState" className="btn btn-primary">
					useState
				</Link>
				<Link href="/UseRef" className="btn btn-primary">
					useRef
				</Link>
				<Link href="/UseReducer" className="btn btn-primary">
					useReducer
				</Link>
			</div>
		</Container>
	);
};

export default Home;
