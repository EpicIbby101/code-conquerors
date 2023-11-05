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


  const handleSearch = async () => {
    setLoading(true); // Set loading to true when a search is initiated.

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
    } finally {
        setLoading(false); // Set loading to false after the search is complete.
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
        <div className="ml-4 mt-5">
          <h2 className="text-2xl font-semibold mb-0">
            Browse our vast online library of books!
          </h2>
          <p className="text-md mb-2">
            We've amassed a large collection of programming books to help you
            get the most out of your studies
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
  {loading ? (
    // Show a loading indicator while loading
    <div className="flex items-center justify-center space-x-4">
      <p className="text-xl font-semibold">Loading...</p>
    </div>
  ) : (
    // Show the pagination controls when not loading and search results are available
    books.length > 0 && (
      <div className="flex items-center justify-center space-x-4">
        {currentPage > 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
          >
            <ArrowBackIcon fontSize="large" />
          </button>
        )}
        <p className="text-xl font-semibold">Page {currentPage}</p>
        {indexOfLastItem < books.length && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
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
