import React, { useState } from 'react';

const ModifyProductModal = ({ product, onUpdate, onClose }) => {
    // Define state variables to hold the modified data
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [description, setDescription] = useState(product.description);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create the updated product object
      const updatedProduct = {
        ...product,
        title,
        price,
        category,
        description
      };
  
      // Call the onUpdate function to update the product
      onUpdate(updatedProduct);
  
      // Close the modal window
      onClose();
    };
  
    return (
        <div className="modal">
        <div className="modal-content">
          <form className="add-form" onSubmit={handleSubmit}>
            <div className="complete-form">
              <div className="left-form">
                <div className="produit-box">
                  <label htmlFor="produit">Produit:</label>
                  <input
                    id="produit"
                    type="text"
                    placeholder="Ajoutez le nom du Produit..."
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)}
                  />
                </div>
                <div className="prix-box">
                  <label htmlFor="prix">Prix:</label>
                  <input
                    id="prix"
                    type="text"
                    placeholder="Ajoute un Prix..."
                    value={price}
                    onChange={(evt) => setPrice(evt.target.value)}
                  />
                </div>
                <div className="category-box">
                  <label htmlFor="category">Catégorie:</label>
                  <input
                    id="category"
                    type="text"
                    placeholder="Ajoute une Catégorie..."
                    value={category}
                    onChange={(evt) => setCategory(evt.target.value)}
                  />
                </div>
              </div>
  
              <div className="description-box">
                <label htmlFor="description">Description</label>
                <div className="textarea-wrapper">
                  <textarea
                    rows="4"
                    cols="40"
                    id="description"
                    placeholder="Ajoutez une Description..."
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)}
                  />
                </div>
              </div>
            </div>
  
            <div className="modal-buttons">
              <input
                type="submit"
                className="button-ajouter"
                value="Modifier le Produit"
              />
              <button className="button-annuler" onClick={onClose}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default ModifyProductModal