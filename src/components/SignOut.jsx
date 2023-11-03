import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function SignOut() {
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Successfully signed out');
      })
      .catch((error) => {
        console.error(`Sign-out error: ${error.message}`);
      });
  };

  return (
    <button onClick={signOut}>Sign out</button>
  );
}

export default SignOut;
