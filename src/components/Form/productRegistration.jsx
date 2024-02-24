import React from 'react';
import ProductForm from './ProductForm'; // Ajusta la ruta según tu estructura de archivos

const ProductRegistration = () => {
  const handleProductSubmit = (productData) => {
    fetch("http://localhost:3001/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          console.log(data);
          alert(data.error);
        } else {
          console.log(data);
           
          alert("Producto registrado con éxito.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al registrar el producto.");
      });
  };

  return (
    <div>
      <h1>Registro de Producto</h1>
      <ProductForm onSubmit={handleProductSubmit} />
      
    </div>
  );
};

export default ProductRegistration;
