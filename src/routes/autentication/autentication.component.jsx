import SignUpForm from "../../components/sign-up-form/sign-up.form.component";
import SignInForm from "../../components/sign-in-form/sign-in.form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./autentication.styles.scss";

const Autentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Autentication;
