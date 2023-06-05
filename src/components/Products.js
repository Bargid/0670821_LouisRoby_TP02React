import React from 'react';
import Header from './Header';
import ManyProducts from './ManyProducts';
import AddProduct from './AddProduct';
import ModifyProductModal from './ModifyProductModal';

const Products = ({
  showAddProduct,
  setShowAddProduct,
  products,
  deleteProduct,
  toggleReminder,
  onModify,
  addProduct,
  showModifyModal,
  modifyingProduct,
  onUpdateProduct,
  onCloseModifyModal,
}) => {
  // Render the desired content here
  return (
    <>
      <Header
        title="Liste de Tâches"
        showAdd={showAddProduct}
        onAdd={() => setShowAddProduct(!showAddProduct)}
      />
        {showAddProduct && <AddProduct onAdd={addProduct} />}
        {showModifyModal && (
          <ModifyProductModal
            product={modifyingProduct}
            onUpdate={onUpdateProduct}
            onClose={onCloseModifyModal}
          />
        )}
      {products.length > 0 ? (
        <ManyProducts
          products={products}
          onDeleteMany={deleteProduct}
          onToggleMany={toggleReminder}
          onModify={onModify}
        />
      ) : (
        "No Products..."
      )}
    </>
  );
};

export default Products;