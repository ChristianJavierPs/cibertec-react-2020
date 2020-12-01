import { useParams,useHistory } from 'react-router-dom';
import { ProductForm } from "./ProductForm";
import { useState, useEffect} from 'react';
import ProductService from '../services/ProductService';

export const EditProduct  = ({ match }) =>{
    const [product, setProduct] = useState(null);
    const [loading,setLoading] = useState(false);
    const { productId } = match.params;
    useEffect(() => {
        (async () => {
            try{
                const { data } = await ProductService.getProductById(productId);
                setProduct(data);
                setLoading(true);
                console.log("producto > ",data);

                }
                catch ( err){
                console.log('Erro > ', err);
                }
            }
        )()
    }, [])
    const history = useHistory();
    console.log('History >', history);
    const handleSubmit = (product) =>{
        console.log("Producto Id: ", productId);
        ProductService.updateProduct({...product, id:productId})
        .then(response =>{
            history.replace('/');
        })
    };
    const goBack  = () =>{
        history.goBack();
    }

    return(
		<div className="content">
			<h2 className="has-text-centered m-5">Editar Producto</h2>
           
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
                {loading ? (<ProductForm 
                    onSubmit= { handleSubmit }
                    onCancel = {goBack}
                    producto = {product}
                    />):<div>Cargando...</div>
                }
				</div>
            </div>
            
		</div>
    )
}
