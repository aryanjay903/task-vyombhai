import Suspense from "@/task/Suspense";
import { Container } from "reactstrap";
import Link from "next/link";
const Home = () => {
	return (
		<Container>
			<div className="mt-5 d-flex flex-column gap-3">
				{/* <Suspense /> */}
				{/* <Usememo /> */}
				{/* <Usecontext /> */}
				<Link href="/useCallback" className="btn btn-primary">
					useCallback
				</Link>
				<Link href="/useMemo" className="btn btn-primary">
					useMemo
				</Link>
				<Link href="/useState" className="btn btn-primary">
					useState
				</Link>
				<Link href="/useRef" className="btn btn-primary">
					useRef
				</Link>
				<Link href="/useEffect" className="btn btn-primary">
					useEffect
				</Link>
				<Link href="/useReducer" className="btn btn-primary">
					useReducer
				</Link>
				<Link href="/useContext" className="btn btn-primary">
					useContext
				</Link>
			</div>
		</Container>
	);
};

export default Home;
