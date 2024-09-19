import "./App.css";
import ProductList from "./components/ProductList";
import CreateForm from "./components/CreateForm";
import { Products } from "./data/data";
import { useState } from "react";
import ProductCreate from "./components/ProductCreate";
function App() {
  // const onCreate = (data) => {
  //   console.log("data ini dari parent component", data);
  // };
  const [products, setProducts] = useState(Products);

  const onCreateProduct = (product) => {
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 77777), ...product },
    ]);
  };

  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((prod) => {
      return prod.id != id;
    });
    setProducts(updatedProduct);
  };

  const editProductById = (id, data) => {
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        console.log({ ...prod, ...data });
        return { ...prod, ...data };
      }

      return prod;
    });
    console.log(updatedProducts);
    setProducts(updatedProducts);
  };
  return (
    <>
      {/* <CreateForm onCreate={onCreate} /> */}
      <div className="app-title">Belanja Mobil Bekas</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={editProductById}
      />
    </>
  );
}

export default App;
