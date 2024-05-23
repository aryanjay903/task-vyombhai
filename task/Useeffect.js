import FirstExample from "@/components/example/useeffect/FirstExample";
import { useState } from "react";

const Useeffect = () => {
	const [count, setCount] = useState(0);
	const handleCount = () => setCount((count) => count + 1);
	return (
		<div>
			<FirstExample cont={count} handleCont={handleCount} />
		</div>
	);
};

export default Useeffect;
