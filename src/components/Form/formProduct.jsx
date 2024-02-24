import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

const FormProduct = () => {
  const [product, setProduct] = useState({
    reference: '',
    name: '',
    description: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (images) => {
    setProduct({ ...product, images });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Producto enviado:', product);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Formulario para registar nuevos productos</h1>
      <div className="form-group">
        <label>Referencia:</label>
        <input
          type="text"
          name="reference"
          value={product.reference}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group"> 
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Imágenes:</label>
        <ImageUploader
          withIcon={true}
          buttonText="Subir imágenes"
          onChange={handleImageUpload}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880} // 5MB
        />
      </div>
      <button type="submit">Guardar Producto</button>
    </form>
  );
};

export default FormProduct;
  