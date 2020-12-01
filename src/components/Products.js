import { useState, useEffect } from 'react';

import { Product } from './Product';

import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom';

export const Products = () => {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		ProductService.getProducts()
			.then(response => {
				setProducts(response.data);
			});
	}, []);

	const handleDelete = (id) => {
		ProductService.deleteProduct(id)
			.then(() => {
				setProducts((products => {
					return products.filter(prod => prod.id !== id);
				}));
			});
	};

	return (
		<div>
			<h2>Lista de Productos</h2>
			<Link to="/products/new" className="button is-link m-2">
				Crear Producto
			</Link>
			<div className="container">
				<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
				<thead>
					<tr>
						<td>#</td>
						<td>Nombre</td>
						<td>Detalle</td>
						<td>stock</td>
						<td>Precio</td>
						<td>Acciones</td>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => (
						<Product
							key={`Products-list-${product.id}`}
							product={product}
							index={index + 1}
							deleteFn={handleDelete}
						/>
					))}
				</tbody>
			</table>
			</div>



		</div>
	);
};