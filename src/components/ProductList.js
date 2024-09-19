import ProductCard from "./ProductCard";

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <div className="cards">
      {/*CARA MENGAMBIL DATA SEBUAH ARRAY TETAPI KITA HARUS MENULIS SATU SATU SEMUA NYA JADI JIKA DATA NYA BANYAK MAKA KITA HARUS MENULIS SEPERTI INI   */}
      {/* <ProductCard
        nama="Ford"
        deskripsi="Mobil ford adalah mobil yang sangat bagus"
        imageURL="https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      />
      <ProductCard
        nama="Lamborghini"
        deskripsi="Mobil Lamborghini memiliki interior dan body yang kokoh"
        imageURL="https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      />
      <ProductCard
        nama="Toyota"
        deskripsi="Mobil toyota memiliki interior dan body yang kokoh"
        imageURL="https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
      />
      <hr></hr> */}

      {/* END CARA MENGAMBIL DATA SEBUAH ARRAY TETAPI KITA HARUS MENULIS SATU SATU SEMUA NYA JADI JIKA DATA NYA BANYAK MAKA KITA HARUS MENULIS SEPERTI INI   */}

      {/* INI CARA SIMPLE NYA JADI MENGGUNAKAN MAP UNTUK PERULANGAN PENGAMBILAN DATA ARRAY JADI TIDAK PERLU MENULISAKAN SEMUA NYA */}
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onDeleteProduct={onDeleteProduct}
            onEditProduct={onEditProduct}
          />
        );
      })}

      {/* END INI CARA SIMPLE NYA JADI MENGGUNAKAN MAP UNTUK PERULANGAN PENGAMBILAN DATA ARRAY JADI TIDAK PERLU MENULISAKAN SEMUA NYA */}
    </div>
  );
};
export default ProductList;
