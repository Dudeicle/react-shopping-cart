import React, { useContext } from 'react';

// Components
import Product from './Product';
import { ProductContext } from '../contexts/ProductContext.js';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-()iner">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
