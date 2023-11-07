// AccountModal.js
import React from "react";
import Modal from "react-modal";

const AccountModal = ({ isOpen, onRequestClose }) => {
  // Retrieve and display saved books from local storage
  const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Account Modal"
    >
      <h2>Your Account</h2>
      <h3>Saved Books</h3>
      <ul>
        {savedBooks.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </Modal>
  );
};

export default AccountModal;
