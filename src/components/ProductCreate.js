import React, { useState } from "react";

const ProductCreate = ({ onCreateProduct }) => {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleSubmmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="product-create">
      <div className="toggle-add">
        <button
          className="edit-input-submit add-toggle"
          onClick={handleShowForm}
        >
          {showForm ? "Close Product" : "Add Product"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmmit} className="form">
          <div className="form-add-title">Add Product </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="nama"
              value={nama}
              onChange={handleChange}
              placeholder="Masukkan nama mobil"
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="deskripsi"
              value={deskripsi}
              onChange={handleChange}
              placeholder="Masukkan deskripsi mobil"
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="imageURL"
              value={imageURL}
              onChange={handleChange}
              placeholder="Masukkan gambar mobil"
            ></input>
          </div>
          <input type="submit" className="edit-input-submit add"></input>
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
