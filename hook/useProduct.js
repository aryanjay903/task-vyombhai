import { useState, useEffect } from "react";

const useProduct = (id, url) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (id) {
			fetch(url)
				.then((res) => res.json())
				.then((json) => setProducts(json));
		}
	}, [id]);

	return products;
};

export default useProduct;
