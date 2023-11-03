import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Code Conquerors</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link> 
          <Link to="/videos" className="mr-5 hover:text-gray-900">Videos</Link>
          <Link to="/books" className="mr-5 hover:text-gray-900">Books</Link>
          <Link to="/quizzes" className="mr-5 hover:text-gray-900">Quizzes</Link>
        </nav>
        <button type="button" className="focus:outline-none text-white bg-purple-500 hover-bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5">Sign-in</button>
      </div>
    </header>
  );
}

export default Header;

