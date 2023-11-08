import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import AccountModal from "./AccountModal";

function Header() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const signedInUser = result.user;
        setUser(signedInUser);
        console.log(`Successfully signed in as ${signedInUser.displayName}`);
      })
      .catch((error) => {
        console.error(`Sign-in error: ${error.message}`);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("Successfully signed out");
      })
      .catch((error) => {
        console.error(`Sign-out error: ${error.message}`);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAccountModal = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-3 flex-row items-center justify-between">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Code Conquerors</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/videos" className="mr-5 hover:text-gray-900">
            Videos
          </Link>
          <Link to="/books" className="mr-5 hover:text-gray-900">
            Books
          </Link>
          <Link to="/quizzes" className="mr-5 hover:text-gray-900">
            Quizzes
          </Link>
        </nav>

        <div className="flex items-center">
          {user ? (
            <div className="relative group">
              <button
                type="button"
                onClick={toggleDropdown}
                className="focus:outline-none relative flex items-center"
              >
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-32 py-2 w-40 bg-white border rounded-lg shadow-lg text-left">
                    <button
                      type="button"
                      onClick={toggleAccountModal}
                      className="px-4 py-2 w-full text-left hover:bg-gray-200"
                    >
                      Account
                    </button>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="px-4 py-2 w-full text-left hover:bg-gray-200"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSignIn}
              className="focus:outline-none text-white bg-purple-500 hover:bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Sign-in
            </button>
          )}
        </div>
      </div>

      <AccountModal
        isOpen={isAccountModalOpen}
        onRequestClose={toggleAccountModal}
      />
    </header>
  );
}

export default Header;
