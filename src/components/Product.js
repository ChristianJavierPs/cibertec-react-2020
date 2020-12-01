import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

export const  Product = ({ product,index, deleteFn }) =>{
   
    
    const [modal, setModal] = useState(false);
    
    if(!product){
        return null;
    }
    
    const handleClick = (evt) =>{
       //deleteFn(product.id);
       setModal(true);
    };

    const handleClickDelete = (evt)=>{
        deleteFn(product.id);
     };

     const closeModal = (evt) =>{
        setModal(false);
     }

    return(
        <>
        <tr key={product.id}>
        <td>{index}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.stock}</td>
        <td>{product.price}</td>
        <td>
            <Link className="button is-small is-info mr-2" to={`/products/${product.id}`}>Editar</Link >
        </td>
        <td>
            <button className="button is-small is-danger mr-2" onClick={handleClick}>Eliminar</button>
        </td>
    </tr>
    {
	modal?(

<div  className={clsx('modal',{'is-active': modal,'': !modal})} >
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
        Esta seguro de eliminar
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" onClick={handleClickDelete}>Eliminar</button>
      <button class="button" onClick ={closeModal}>Cancel</button>
    </footer>
  </div>
</div>

): ''
}
    </>
    )
}

Product.propTypes = {
    product: propTypes.object.isRequired,
    index: propTypes.number
}

Product.defaultProps = {
 product:{},
 index:1,
 deleteFn: () => {}
}

export default Product;