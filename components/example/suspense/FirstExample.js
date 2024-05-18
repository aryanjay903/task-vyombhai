import { Suspense, useState } from "react";
import { Button } from "reactstrap";

const FirstExample = () => {
	const [isOpen, setIsOpen] = useState(false);
	const productList = [
		{
			id: 1,
			name: "Product 1",
			price: 100,
		},
		{
			id: 2,
			name: "Product 2",
			price: 200,
		},
		{
			id: 3,
			name: "Product 3",
			price: 300,
		},
	];
	const handleClick = () => setIsOpen(!isOpen);
	return (
		<div>
			{!isOpen && (
				<Button color="primary" onClick={handleClick}>
					Open
				</Button>
			)}
			{isOpen && <SusprnseCompoenent productList={productList} />}
		</div>
	);
};

const SusprnseCompoenent = ({ productList }) => {
	return (
		<div>
			<Suspense fallback={<Loading />}>
				<ProductList productList={productList} />
			</Suspense>
		</div>
	);
};

const ProductList = ({ productList }) => {
	return (
		<div>
			{productList.map((product) => (
				<li key={product.id}>
					{product.name} - {product.price}
				</li>
			))}
		</div>
	);
};

const Loading = () => {
	console.log("Loading");
	return <h2>Loading...</h2>;
};

export default FirstExample;
