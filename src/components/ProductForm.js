import { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

export const ProductForm = ({ onSubmit, onCancel, producto  }) => {
    console.log('El producto viene de edit:',producto);
	const formik = useFormik({
		initialValues: {
			name:producto?producto.name:'',
			description: producto?producto.description:'',
			stock: producto?producto.stock:0,
            price: producto?producto.price:0,
		},
		onSubmit: (values) => {
			onSubmit(values);
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, 'El maximo de caracteres es 15')
				.required('El nombre es requerido'),
			description: Yup.string()
				.max(30, 'El maximo de caracteres es 30')
                .required('La descripcion es requerida'),
            stock: Yup.number()
                .min(1,'El stock minimo es 1 unidad')
                .max(10,'El stock maximo es 10 unidades'),
            price: Yup.number()
                .min(1,'El precio minimo es 0').
                required('El precio es requerido')
		})
	});
    const {
        errors, 
        touched, 
        isValid, 
        values, 
        handleChange,
        handleSubmit,
        handleBlur} = formik;
	return (
		<div className="container">
            <pre>
            Error: {JSON.stringify(formik.errors.name)}
            </pre>
            <pre>
            Touched: {JSON.stringify(formik.touched.name)}
            </pre>
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label className="label">Nombre</label>
					<div className="control">
						<input
                            className={
                            clsx(
                            'input',
                            {
                             'is-danger': errors.name && touched.name,
                             'is-success': !errors.name && touched.name
                            })}
							type="text"
							name="name"
							value={values.name}
                            onChange={handleChange}
                            onBlur ={handleBlur}
						/>
					</div>
				</div>
                {errors.name && touched.name ? (
                    <p class="help is-danger">
                        {errors.name}
                    </p>
                ) : null}
				<div className="field">
					<label className="label">Detalle</label>
					<div className="control">
						<textarea
							className={
                            clsx(
                                'textarea',
                                {
                                    'is-danger': errors.description && touched.description,
                                    'is-success': !errors.description && touched.description

                                }
                            )
                            }
							name="description"
							value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur ={handleBlur}
						/>
					</div>
				</div>
                {errors.description && touched.description ? (
                    <p class="help is-danger">
                        {errors.description}
                    </p>
                ) : null}
				<div className="field">
					<label className="label">Stock</label>
					<div className="control">
						<input
							className={
                                clsx(
                                'input',
                                {
                                 'is-danger': errors.stock && touched.stock,
                                 'is-success': !errors.stock && touched.stock
                                })}
							type="text"
							name="stock"
							value={formik.values.stock}
                            onChange={formik.handleChange}
                            onBlur ={handleBlur}
						/>
					</div>
				</div>
                {errors.stock && touched.stock ? (
                    <p class="help is-danger">
                        {errors.stock}
                    </p>
                ) : null}
				<div className="field">
					<label className="label">Precio</label>
					<div className="control">
						<input
							className={
                                clsx(
                                'input',
                                {
                                 'is-danger': errors.price && touched.price,
                                 'is-success': !errors.price && touched.price
                                })}
							name="price"
							value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur ={handleBlur}
						/>
					</div>
				</div>
                {errors.price && touched.price ? (
                    <p class="help is-danger">
                        {errors.price}
                    </p>
                ) : null}
				<div className="field is-grouped">
					<div className="control">
						<button
							className="button is-link"
							disabled={!formik.isValid}>
							Submit
						</button>
					</div>
					<div className="control">
						<button type="button" onClick={onCancel} className="button is-link is-light">
							Cancel
						</button>
					</div>
				</div>
			</form>
		</div>
	)
};
 
/* 
import { useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import ProductService from '../services/ProductService';

export const ProductForm = (props) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        ProductService.createProduct(data);
    }
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						type="text"
                        name="name"
                        ref={register({ required: true, maxLength: 20 })}
					/>
				</div>
				<div>
					<textarea
                        name="description"
                        ref={register({ required: true, maxLength: 300 })}
					/>
				</div>
				<div>
					<input
						type="number"
                        name="stock"
                        ref={register({ required: true})}
					/>
				</div>
				<div>
					<input
						type="number"
                        name="price"
                        ref={register({ required: true})}
					/>
				</div>
				<button type="submit">Crear Producto</button>
			</form>
		</div>
	)
}; */