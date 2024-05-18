import { memo, useState, useCallback, createContext, useContext } from "react";
import { CardTitle, Table, Button } from "reactstrap";

const FifthExampleContext = createContext();

const FifthExample = () => {
	const [theme, setTheme] = useState("light");

	console.log("FifthExample");
	return (
		<FifthExampleContext.Provider value={theme}>
			<div className={`bg-${theme}`}>
				<InnerComponent
					onChange={useCallback(() => {
						setTheme((theme) => (theme === "light" ? "dark" : "light"));
					}, [])}
				/>
			</div>
		</FifthExampleContext.Provider>
	);
};

const InnerComponent = ({ onChange }) => {
	console.log("InnerComponent");
	const theme = useContext(FifthExampleContext);
	return (
		<div>
			<CardTitle
				tag="h5"
				className={`text-${theme === "light" ? "dark" : "light"}`}
			>
				FifthExample
			</CardTitle>
			<Table striped bordered responsive hover>
				<tbody>
					<tr className="text-center">
						<td>
							<ButtonComponent onClick={onChange} />
						</td>
						<td>{theme}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const ButtonComponent = memo(({ onClick }) => {
	console.log("ButtonComponent");
	return (
		<div>
			<Button color="primary" onClick={onClick}>
				Button
			</Button>
		</div>
	);
});

export default FifthExample;
