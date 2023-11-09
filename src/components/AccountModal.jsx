// AccountModal.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "70%", // Set the width of the modal
    maxWidth: "1200px", // Set a maximum width
    margin: "0 auto", // Center the modal horizontally
    padding: "20px", // Add padding
    fontFamily: "Arial, sans-serif", // Change the font
    background: "white", // Background color
    border: "1px solid #ccc", // Add a border
    borderRadius: "10px", // Add border radius
  },
};

const AccountModal = ({ isOpen, onRequestClose, user }) => {
  const [savedBooks, setSavedBooks] = useState([]);

  // Load saved books from localStorage and update the state
  useEffect(() => {
    const savedBooksData = JSON.parse(localStorage.getItem("savedBooks")) || [];
    setSavedBooks(savedBooksData);
  }, []);

  const handleUnsave = (index) => {
    const updatedSavedBooks = [...savedBooks];
    updatedSavedBooks.splice(index, 1);
    setSavedBooks(updatedSavedBooks);
    localStorage.setItem("savedBooks", JSON.stringify(updatedSavedBooks));
  };

  const bookContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "0px",
    padding: "15px",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Account Modal"
      style={customStyles}
    >
      <div className="flex items-center mb-2 bg-black p-2 mt-8">
        {user && user.photoURL && (
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
        )}
        <h1 className="text-4xl font-semibold text-gray-200">Your Account</h1>
      </div>
      <h2 className="text-lg font-semibold mt-3">💾 Saved Books</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {savedBooks.map((book, index) => (
          <li key={index} style={bookContainerStyle}>
            <img src={book.cover_url} alt={book.title} style={imageStyle} />
            <h3>
              <strong>
              {book.title}
              </strong>
            </h3>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>First Publish Year:</strong> {book.first_publish_year}
            </p>
            <a
                    href={`https://openlibrary.org${book.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 block mb-1"
                  >
                    Get Your Copy
                  </a>
            <button
              onClick={() => handleUnsave(index)}
              className="text-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
            >
              Unsave
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default AccountModal;
