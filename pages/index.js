import Suspense from "@/task/Suspense";
import { Container } from "reactstrap";
import Link from "next/link";
const Home = () => {
	return (
		<Container>
			<div className="mt-5 d-flex gap-3 flex-wrap">
				<Link href="/useCallback" className="btn btn-primary">
					useCallback
				</Link>
				<Link href="/useDebugValue" className="btn btn-primary">
					useDebugValue
				</Link>
				<Link href="/useDeferredValue" className="btn btn-primary">
					useDeferredValue
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
				<Link href="/useImperativeHandle" className="btn btn-primary">
					useImperativeHandle
				</Link>
				<Link href="/useEffect" className="btn btn-primary">
					useEffect
				</Link>
				<Link href="/useLayoutEffect" className="btn btn-primary">
					useLayoutEffect
				</Link>
				<Link href="/useInsertionEffect" className="btn btn-primary">
					useInsertionEffect
				</Link>
				<Link href="/useReducer" className="btn btn-primary">
					useReducer
				</Link>
				<Link href="/useContext" className="btn btn-primary">
					useContext
				</Link>
				<Link href="/useId" className="btn btn-primary">
					useId
				</Link>
				<Link href="/useSyncExternalStore" className="btn btn-primary">
					useSyncExternalStore
				</Link>
				<Link href="/useTransition" className="btn btn-primary">
					useTransition
				</Link>
			</div>
		</Container>
	);
};

export default Home;
