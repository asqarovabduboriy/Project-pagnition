import React from "react";
import Sideabar from "../../components/Sidebar/Sideabar";
import "./Admin.css";
import Modal from "../../components/modal/Modal";

const Admin = () => {
  return (
    <>
      <div className="Admin">
        <Sideabar />
        <Modal>
          <form className="form_login">
            <label> Titile </label>
            <input type="text" placeholder="create" />
            <label>Description</label>
            <input type="text" placeholder="diskription" />
            <label>Price</label>
            <input type="text" placeholder="price" />
            <label>Image</label>
            <textarea name="" id=""></textarea>
            <button>create</button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Admin;
