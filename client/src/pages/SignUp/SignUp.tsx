import { Page } from "../../components";
import "./SignUp.style.scss";

function SignUp() {
  return (
    <Page>
      <div className="signup-page">
        <h1>Sign Up</h1>
      </div>
      <p className="signup-page"> Create Email: </p>
      <input type="text" id="SignUpEmail" name="SignUpEmail" /><br></br><br></br>
      <p className="signup-page"> Create Password: </p>
      <input type="text" id="SignUpPassword" name="SignUpPassword" /><br></br>
    </Page>
  );
}

export default SignUp;
