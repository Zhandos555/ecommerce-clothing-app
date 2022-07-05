import SignUpForm from "../../components/sign-up-form/sign-up.form.component";
import SignInForm from "../../components/sign-in-form/sign-in.form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { AuthenticationContainer } from "./autentication.styles";

const Autentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Autentication;
