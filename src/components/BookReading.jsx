// BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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
      console.error('Error fetching data:', error);
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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for programming books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-md ml-2"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {currentBooks.map((book) => (
          <div key={book.key} className="border p-4 rounded-md flex items-center">
            <img
              src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
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
        ))}
      </div>
      <div className="mt-4">
        {books.length > itemsPerPage && (
          <div className="text-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 p-2 rounded-md mr-2"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= books.length}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
