import { Suspense, useDeferredValue } from "react";
const FirstExample = () => {
	return (
		<div>
			<Suspense fallback>{/* <SomeComponent /> */}helo</Suspense>
		</div>
	);
};

export default FirstExample;
