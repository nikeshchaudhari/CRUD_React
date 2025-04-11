import React, { useState } from "react";
import {Axios} from 'axios';

const AddCatagory = () => {
  const [category, setcategory] = useState(" ");
  const [selectfile, setselectfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };


  return (
    <>
      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setcategory(e.target.value);
          }}
          type="text"
        />
        <br></br>
        <input
          onChange={(e) => {
            setselectfile(e.target.files[0]);
          }}
          type="file"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddCatagory;
