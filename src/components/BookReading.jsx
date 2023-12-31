// BookSearch.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import noImage from "../assets/cover_not_found.jpg";
import booklogo from "../assets/booklogo.png";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const defaultImageURL = noImage;
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [hoveredBook, setHoveredBook] = useState(null);
  const [savedBooks, setSavedBooks] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    setSearched(true); // A search has been performed
    setBooks([]);

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );

      if (response.data.docs) {
        setBooks(response.data.docs);
        setCurrentPage(1);
        console.log(response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBook = (book) => {
    setSavedBooks((prevSavedBooks) => {
      const savedBookIndex = prevSavedBooks.findIndex(
        (savedBook) => savedBook.key === book.key
      );

      if (savedBookIndex === -1) {
        // Book is not saved, so save it
        const simplifiedBook = {
          key: book.key,
          title: book.title,
          author: formatAuthors(book.author_name),
          first_publish_year: book.first_publish_year || "N/A",
          cover_url: book.cover_i
            ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : defaultImageURL,
        };

        const updatedSavedBooks = [...prevSavedBooks, simplifiedBook];
        localStorage.setItem("savedBooks", JSON.stringify(updatedSavedBooks));
        return updatedSavedBooks;
      } else {
        // Book is already saved, so unsave it
        const updatedSavedBooks = prevSavedBooks.filter(
          (savedBook) => savedBook.key !== book.key
        );
        localStorage.setItem("savedBooks", JSON.stringify(updatedSavedBooks));
        return updatedSavedBooks;
      }
    });
  };

  useEffect(() => {
    const savedBooksData = localStorage.getItem("savedBooks");
    if (savedBooksData) {
      const savedBooksArray = JSON.parse(savedBooksData);
      setSavedBooks(savedBooksArray);
    }
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function formatAuthors(authors) {
    if (!authors) return "Unknown";

    const maxAuthors = 1; // Set the maximum number of displayed authors

    if (authors.length <= maxAuthors) {
      return authors.join(", ");
    } else {
      const displayedAuthors = authors.slice(0, maxAuthors).join(", ");
      const remainingAuthors = authors.length - maxAuthors;
      return `${displayedAuthors} + ${remainingAuthors} more`;
    }
  }

  function truncateTitle(title) {
    const words = title.split(" ");
    if (words.length > 4) {
      return words.slice(0, 4).join(" ") + "...";
    }
    return title;
  }

  return (
    <div className="" id="books">
      <div className="lg:flex lg:flex-col space-y-4 mb-10">
        <div className="bg-[url('../assets/bookbg.png')] bg-no-repeat bg-cover bg-center pb-28 w-full">
          <div className="lg:w-1/2 md:w-full sm:w-full mx-auto text-center ">
            <img
              src={booklogo}
              alt="Library"
              className="mb-4 mt-32 w-1/5 max-w-md mx-auto"
            />
            <h2 className="text-4xl md:text-4xl sm:text-4xl font-bold mb-0 text-rose-300 mt-0">
              Browse Our Vast Online Library of Books!
            </h2>
            <br></br>
            <p className="text-md md:text-lg sm:text-lg mb-4 text-white">
              We've amassed a large collection of programming books to help you
              get the most out of your studies. HTML, JavaScript, Python and
              even React, we got it all.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Search for programming books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-3 py-4 pl-10 rounded-l-full w-full text-lg outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-r-full ml-1 px-6 pr-7"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {searched &&
          books.length > 0 && ( // Conditionally render the message
            <div className="text-center md:text-start mx-0 md:mx-60 mb-4">
              <p className="text-lg text-white">
                Your search results for <strong>{query}</strong>
              </p>
            </div>
          )}

        <div className="lg:grid lg:grid-cols-4 lg:gap-4 mx-0 md:mx-0 lg:mx-0 xl:mx-24 px-32 md:grid md:grid-cols-2 md:gap-2 sm:grid sm:grid-cols-1 sm:gap-2">
          {searched && !loading && books.length === 0 ? (
            <p className="text-lg text-red-500 mt-4 lg:mt-0">
              Whoops, we couldn't find that 🙁
            </p>
          ) : (
            currentBooks.map((book) => (
              <div
                key={book.key}
                className="relative p-4 rounded-md mb-2 mx-2 flex flex-col items-center justify-between transition-transform transform hover:scale-105 shadow-2xl md:shadow-lg bg-gray-100"
                onMouseEnter={() => setHoveredBook(book)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <img
                  src={
                    book.cover_i
                      ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                      : defaultImageURL
                  }
                  alt={`Cover for ${book.title}`}
                  className="w-32 h-48 mx-auto mb-2 transition-transform transform hover:scale-105"
                />
                <div className="text-center">
                  <h3 className="text-md md:text-lg sm:text-xs font-bold">
                    {truncateTitle(book.title)}
                  </h3>
                  <p className="text-gray-600 md:text-xs sm:text-xxs">
                    <span className="font-bold">Author:</span>{" "}
                    {formatAuthors(book.author_name)}
                  </p>
                  <p className="text-gray-600 md:text-xs sm:text-xxs">
                    <span className="font-bold">First Publish Year:</span>{" "}
                    {book.first_publish_year}
                  </p>
                  <a
                    href={`https://openlibrary.org${book.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 block mt-2"
                  >
                    Get Your Copy
                  </a>
                </div>
                <button
                  onClick={() => handleSaveBook(book)}
                  className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full mt-2 w-2/3"
                >
                  {savedBooks.some((savedBook) => savedBook.key === book.key)
                    ? "Unsave Book"
                    : "Save Book"}
                </button>
                {hoveredBook === book && (
                  <div className="absolute bottom-100 left-0 right-0 p-2 bg-white text-black text-xs border rounded shadow-lg">
                    <span className="font-semibold underline">
                      Description:
                    </span>{" "}
                    {book.subject || "Not available"}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="">
        {loading ? (
          <div className="flex items-center justify-center space-x-4">
            <p className="text-xl md:text-lg sm:text-md font-semibold text-white">
              Loading...
            </p>
          </div>
        ) : (
          books.length > 0 && (
            <div className="flex items-center justify-center space-x-4 mb-20">
              {currentPage > 1 && (
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white cursor-pointer"
                >
                  Prev
                </button>
              )}
              <p className="text-xl md:text-lg sm:text-md font-semibold text-white">
                Page {currentPage}
              </p>
              {indexOfLastItem < books.length && (
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white cursor-pointer"
                >
                  Next
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
