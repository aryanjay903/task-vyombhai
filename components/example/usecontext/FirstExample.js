import { useState, createContext, useContext } from "react";
import { CardTitle, Table, Button, Input } from "reactstrap";

const FifthExampleContext = createContext();
const TextContext = createContext();

const FifthExample = () => {
	const [theme, setTheme] = useState("light");
	const [text, setText] = useState("");
	return (
		<FifthExampleContext.Provider value={theme}>
			<div className={`bg-${theme}`}>
				<TextContext.Provider value={{ text, setText }}>
					<ForInput />
				</TextContext.Provider>
				<InnerComponent
					onChange={() =>
						setTheme((theme) => (theme === "light" ? "dark" : "light"))
					}
				/>
				{/* <InnerComponentTwo /> */}
			</div>
		</FifthExampleContext.Provider>
	);
};

const ForInput = () => {
	const { text, setText } = useContext(TextContext);
	const [show, setShow] = useState(false);
	const handleChange = (e) => {
		const { value } = e.target;
		setText(value);
	};
	const handleClick = () => setShow(!show);
	return (
		<>
			<div>
				<Input
					type="text"
					className="shadow-none"
					value={text}
					onChange={handleChange}
				/>
				<Button color="primary" onClick={handleClick}>
					Enter
				</Button>
			</div>
			{show && <h6>{text}</h6>}
		</>
	);
};
const InnerComponent = ({ onChange }) => {
	const theme = useContext(FifthExampleContext);
	return (
		<div>
			<CardTitle
				tag="h5"
				className={`text-${theme === "light" ? "dark" : "light"}`}
			>
				FifthExample
			</CardTitle>
			<Table borderless responsive hover>
				<tbody>
					<tr className="text-center">
						<td>
							<Button color="primary" onClick={onChange}>
								Button
							</Button>
						</td>
						<td>{theme}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};
//? if you are not using useContext() hook way so also use this way
// const InnerComponent = ({ onChange }) => {
// 	return (
// 		<FifthExampleContext.Consumer>
// 			{(theme) => <CardComponent theme={theme} onChange={onChange} />}
// 		</FifthExampleContext.Consumer>
// 	);
// };
// const InnerComponentTwo = () => {
// 	return (
// 		<FifthExampleContext.Consumer>
// 			{(theme) => <CardComponentTwo theme={theme} />}
// 		</FifthExampleContext.Consumer>
// 	);
// };
// const CardComponent = ({ theme, onChange }) => {
// 	return (
// 		<div>
// 			<CardTitle
// 				tag="h5"
// 				className={`text-${theme === "light" ? "dark" : "light"}`}
// 			>
// 				FifthExample
// 			</CardTitle>
// 			<Table borderless responsive hover>
// 				<tbody>
// 					<tr className="text-center">
// 						<td>
// 							<Button color="primary" onClick={onChange}>
// 								Button
// 							</Button>
// 						</td>
// 						<td>{theme}</td>
// 					</tr>
// 				</tbody>
// 			</Table>
// 		</div>
// 	);
// };
// const CardComponentTwo = ({ theme }) => {
// 	return (
// 		<div>
// 			<CardTitle
// 				tag="h5"
// 				className={`text-${theme === "light" ? "dark" : "light"}`}
// 			>
// 				FifthExampleTwo
// 			</CardTitle>
// 			<Table borderless responsive hover>
// 				<tbody>
// 					<tr className="text-center">
// 						<td>{theme}</td>
// 					</tr>
// 				</tbody>
// 			</Table>
// 		</div>
// 	);
// };

export default FifthExample;
