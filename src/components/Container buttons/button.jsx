import React, { useState } from 'react';
import FormProduct from '../Form/formProduct';
import ProductList from '../Form/productList';

const ProductManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [products, setProducts] = useState([]);


  const handleAddClick = () => {
    
    setShowAddForm(!showAddForm);
 

  };

  const handleListClick = (newProduct) => {
    setProducts([...products, newProduct]);
    console.log('Mostrar lista de productos');
  };

  return (
    <div>
    
      <div className="container-admin">
        <button 
        onClick={handleAddClick}>Agregar Producto
        <img src="./img/imgBoton.png" alt="Imagen del botón" />
        </button>
        <button 
        onClick={handleListClick}>Lista de Productos
        
        <img src="./img/imgBoton2.png" alt="Imagen del botón" />
        
        </button>
      </div>
      {showAddForm && <FormProduct />}
      {!showAddForm && <ProductList products={products} />}
    </div>
  );
};

export default ProductManagement;
