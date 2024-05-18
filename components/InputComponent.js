import React, { memo } from "react";
import { Input } from "reactstrap";
const InputComponent = ({ textField, onChange }) => {
	console.log("InputComponent");
	return (
		<div>
			<Input
				type="text"
				className="shadow-none"
				value={textField}
				onChange={onChange}
			/>
		</div>
	);
};

// export default InputComponent;
export default memo(InputComponent);
