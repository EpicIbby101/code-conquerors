// BookSearch.js
import React, { useState } from "react";
import axios from "axios";
import noImage from "../assets/Noimage.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const defaultImageURL = noImage; // Specify your custom default image URL.

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );

      if (response.data.docs) {
        setBooks(response.data.docs);
        setCurrentPage(1); // Reset to the first page when a new search is performed.
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="mb-8">
        <div className="ml-3">
        <h2 className="text-2xl font-semibold mb-0">
          Browse our vast online library of books!
        </h2>
        <p className="text-md mb-2">
          We've amassed a large collection of programming books to help you get
          the most out of your studies
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Search for programming books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border p-2 rounded-l-md w-1/4"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded-r-md ml-2"
          >
            Search
          </button>
        </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
  <div className="grid grid-cols-2 gap-4">
    {currentBooks.map((book) => (
      <div
        key={book.key}
        className="border p-4 rounded-md flex items-center"
      >
        <img
          src={
            book.cover_i
              ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : defaultImageURL
          }
          alt={`Cover for ${book.title}`}
          className="w-24 h-32 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600">{book.author_name?.join(", ")}</p>
          <a
            href={`https://openlibrary.org${book.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Read Online
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="mt-5 mb-10">
        {books.length > itemsPerPage && (
          <div className="flex items-center justify-center">
            {currentPage > 1 && (
              <ArrowBackIcon
                onClick={() => paginate(currentPage - 1)}
                style={{ cursor: "pointer" }}
                color="primary"
                fontSize="large"
              />
            )}
            <p className="text-xl">Page {currentPage}</p>
            {indexOfLastItem < books.length && (
              <ArrowForwardIcon
                onClick={() => paginate(currentPage + 1)}
                style={{ cursor: "pointer" }}
                color="primary"
                fontSize="large"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
