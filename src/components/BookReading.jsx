// BookSearch.js
import React, { useState } from "react";
import axios from "axios";
import noImage from "../assets/Noimage.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const defaultImageURL = noImage; // Specify your custom default image URL.
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setSearched(true); // A search has been performed

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );

      if (response.data.docs) {
        setBooks(response.data.docs);
        setCurrentPage(1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex lg:flex-col space-y-4">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Browse our vast online library of books!</h2>
          <p className="text-md mb-3">
            We've amassed a large collection of programming books to help you get the most out of your studies.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Search for programming books..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border p-2 rounded-l-md w-full "
            />
            <button
              onClick={handleSearch}
              className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-r-md ml-1 px-5"
            >
              Search
            </button>
          </div>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          {searched && !loading && books.length === 0 ? (
            <p className="text-lg text-red-500 mt-4 lg:mt-0">Whoops, we couldn't find that 🙁</p>
          ) : (
            // Render search results when there are results
            currentBooks.map((book) => (
              <div key={book.key} className="border p-4 rounded-md flex items-center mb-2">
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
                  <p className="text-gray-600">{book.author_name?.join(', ')}</p>
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
            ))
          )}
        </div>
      </div>

      <div className="mt-5 mb-10">
        {loading ? (
          <div className="flex items-center justify-center space-x-4">
            <p className="text-xl font-semibold">Loading...</p>
          </div>
        ) : (
          books.length > 0 && (
            <div className="flex items-center justify-center space-x-4">
              {currentPage > 1 && (
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white cursor-pointer"
                >
                  <ArrowBackIcon fontSize="large" />
                </button>
              )}
              <p className="text-xl font-semibold">Page {currentPage}</p>
              {indexOfLastItem < books.length && (
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white cursor-pointer"
                >
                  <ArrowForwardIcon fontSize="large" />
                </button>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BookSearch;
