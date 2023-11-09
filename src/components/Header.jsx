import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import AccountModal from "./AccountModal";
import cclogo from "../assets/cclogo.png";

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
    <header className="fixed w-full top-0px  bg-neutral-900 text-rose-200 body-font shadow-lg z-40">
      <div className="container mx-auto flex flex-wrap p-3 flex-row items-center justify-between">
        <Link
          to="#home"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={cclogo} alt="cc-logo" className="w-12 h-12 ml-3" />
          <span className="ml-3 text-2xl text-rose-300">Code Conquerors</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="#home" className="mr-5 hover:text-rose-300">
            Home
          </Link>
          <Link to="#books" className="mr-5 hover:text-rose-300">
            Books
          </Link>
          <Link to="#videos" className="mr-5 hover:text-rose-300">
            Videos
          </Link>
          <Link to="#quiz" className="mr-5 hover:text-rose-300">
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
                  <div className="absolute right-0 mt-32 py-2 w-40 bg-white border rounded-lg shadow-lg text-left text-gray-800">
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
              className="focus:outline-none text-black bg-gradient-to-r from-rose-300 to-amber-200 shadow-lg shadow-neutral-900 hover:from-amber-300 hover:to-rose-400 hover:scale-95 transition-all duration-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 "
            >
              Sign in
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
