import React, { useState } from "react";

const CreateForm = ({ onCreate }) => {
  const initialState = {
    nama: "",
    hobby: "",
    agama: "",
  };
  const [data, setData] = useState(initialState);
  const { nama, hobby, agama } = data;

  const handleSubmit = (e) => {
    //! HARUS MENAMBAHKAN e.preventDefault();, AGAR ON SUBMIT BISA DI GUNAKAN
    e.preventDefault();
    onCreate(data);
    setData(initialState);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">Name : </label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={nama}
          name="nama"
        ></input>
        <label for="Hobby">Hoby : </label>
        <input
          id="Hobby"
          type="text"
          onChange={handleChange}
          value={hobby}
          name="hobby"
        ></input>
        <label for="agama">Agama : </label>
        <input
          id="agama"
          type="text"
          onChange={handleChange}
          value={agama}
          name="agama"
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};
export default CreateForm;
