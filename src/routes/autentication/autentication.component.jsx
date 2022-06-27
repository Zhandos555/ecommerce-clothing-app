import SignUpForm from "../../components/sign-up-form/sign-up.form.component";
import SignInForm from "../../components/sign-in-form/sign-in.form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Autentication = () => {
  

  return (
    <>
      <h1>Sign in Page</h1>
      <SignInForm />
      <SignUpForm />
    </>
  );
};

export default Autentication;
