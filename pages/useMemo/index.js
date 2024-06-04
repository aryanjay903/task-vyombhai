import { Container } from "reactstrap";
import Link from "next/link";
const UseEffect = () => {
	return (
		<Container className="mt-3 d-flex gap-3">
			<Link href="useMemo/example/FirstExample" className="btn btn-primary">
				FirstExample
			</Link>
			<Link href="useMemo/example/SecondExample" className="btn btn-primary">
				SecondExample
			</Link>
			<Link href="useMemo/example/ThirdExample" className="btn btn-primary">
				ThirdExample
			</Link>
		</Container>
	);
};

export default UseEffect;
