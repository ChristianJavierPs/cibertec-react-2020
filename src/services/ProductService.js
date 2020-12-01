import axios from 'axios';

 const API = `${process.env.REACT_APP_API}/${process.env.REACT_APP_ENDPOINT}`;
 //const API = 'http://localhost:4000/products/';

const getProducts = () =>{
    return axios.get(API)
};

const getProductById = (id) => {

    return axios.get(`${API}/${id}`);
}

const updateProduct = (product) =>{
    console.log('productos a actualizar: ',product);
    return axios.put(`${API}/${product.id}`, product)
}

const deleteProduct = (id) =>{
 return axios.delete(`${API}/${id}`)
}

const createProduct = (product) => {
    return axios.post(API,{...product, id: Date.now()})
    
}

export default {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
}