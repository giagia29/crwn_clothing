// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUp from '../../components/sign-up-form/sign_up';
import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import React from 'react';


const SignIn = () => {

    // const fetchUser = async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }

    // useEffect(() => {
    //     fetchUser();
    // });


    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <SignUp />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button> */}
        </div>
    );
}
export default SignIn;