import { useHistory } from 'react-router-dom';
import { ProductForm } from "./ProductForm";
import ProductService from '../services/ProductService';

export const NewProduct = () => {
const history = useHistory();
console.log('History >', history);
const handleSubmit = (product) =>{
    ProductService.createProduct(product)
    .then(response =>{
        history.replace('/');
    })
};
const goBack  = () =>{
    history.goBack();
}
	return (
		<div className="content">
			<h2 className="has-text-centered m-5">Crear Producto</h2>

			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
                    <ProductForm 
                    onSubmit= { handleSubmit }
                    onCancel = {goBack}
                    />
				</div>
			</div>
		</div>
	)
};
