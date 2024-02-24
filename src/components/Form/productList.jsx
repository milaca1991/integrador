// ProductList.jsx
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Descripción: {product.description}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
