import { useState, useEffect } from "react";

const useProduct = (url) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	return products;
};

export default useProduct;
