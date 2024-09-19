import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import ProductEdit from "./ProductEdit";

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  const { id, nama, deskripsi, imageURL } = product;
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const [showEdit, setShowEdit] = useState(false);

  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1);
  };
  const kurangProduct = () => {
    setJumlahProduct(jumlahProduct - 1);
  };

  const handleDelete = () => {
    onDeleteProduct(id);
  };

  const handleShow = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmitEdit = (id, data) => {
    setShowEdit(false);
    onEditProduct(id, data);
  };
  const handleCancelEdit = () => {
    setShowEdit(false);
  };
  return (
    <div className="card">
      {showEdit ? (
        <ProductEdit
          product={product}
          onEditProduct={handleSubmitEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <div className="edit-delete">
            <CiEdit className="icon-edit" onClick={handleShow} />
            <MdDeleteForever className="icon-delete" onClick={handleDelete} />
          </div>

          <img
            src={imageURL}
            alt=""
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px 10px 0 0",
            }}
          ></img>
          <div className="container">
            <h4>
              <b>{nama} </b>
            </h4>
            <p>{deskripsi}</p>
          </div>
          <div
            className={`card-keranjang ${
              jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"
            }`}
          >
            {jumlahProduct > 0 ? (
              <>
                <button className="button" onClick={kurangProduct}>
                  -
                </button>
                <div>{jumlahProduct}</div>
                <button className="button" onClick={tambahProduct}>
                  +
                </button>
              </>
            ) : (
              <div onClick={tambahProduct}>keranjang +</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default ProductCard;
