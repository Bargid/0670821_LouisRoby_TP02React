import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Entete from './components/Entete.js'
import Products from './components/Products.js'
import Accueil from './components/Accueil.js'

function App() {

  // 1. Global
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async() => {
      const productFromServer = await fetchProducts();
      setProducts(productFromServer);
    }

    getProducts();

  }, [] )

  const fetchProducts = async() => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    
    return data;
  }

  const fetchProduct = async(id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    
    return data;
  }

  // 2. Delete
  const deleteProduct = async (id) =>{
    // console.log(id);
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE'
    })
    setProducts(products.filter((product) => product.id !== id))
  }

  // 3. Update Reminder
  const toggleReminder = async (id) => {

    const productToToggle = await fetchProduct(id)
    const updateProduct = {...productToToggle, reminder: !productToToggle.reminder}

    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateProduct)
    })
    const data = await res.json()

    setProducts(products.map((product)=> product.id === id ? {...product, reminder:data.reminder} : product))
  }

  // 4. Insert a new Product
  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    const newProduct = await res.json()
    setProducts([...products, newProduct]) // On prend tous les vieux produits et on ajoute la nouvelle apres
  }

  // 5. Toggle Form
  const [showAddProduct, setShowAddProduct] = useState(true)

  // 6. Modify modal and form

  const onModify = (productId) => {
    const productToModify = products.find((product) => product.id === productId);
    setModifyingProduct(productToModify);
    setShowModifyModal(true);
  };

  const [showModifyModal, setShowModifyModal] = useState(false);
  const [modifyingProduct, setModifyingProduct] = useState(null);
  
  const onCloseModifyModal = () => {
    setShowModifyModal(false);
    setModifyingProduct(null);
  };

  const onUpdateProduct = async (updatedProduct) => {
    const { id } = updatedProduct;
    const onCloseModifyModal = () => {
      setShowModifyModal(false);
      setModifyingProduct(null);
    };
  
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    });
  
    if (res.ok) {
      const updatedProductFromServer = await res.json();
      setProducts(products.map((product) => (product.id === id ? updatedProductFromServer : product)));
    }

  };

  return (
    <BrowserRouter>
      <div className="page">
        <Entete />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Accueil/>} />
            <Route
              exact
              path="/products"
              element={
                <Products
                  showAddProduct={showAddProduct}
                  setShowAddProduct={setShowAddProduct}
                  products={products}
                  deleteProduct={deleteProduct}
                  toggleReminder={toggleReminder}
                  onModify={onModify}
                  addProduct={addProduct}
                  showModifyModal={showModifyModal}
                  modifyingProduct={modifyingProduct}
                  onUpdateProduct={onUpdateProduct}
                  onCloseModifyModal={onCloseModifyModal}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
