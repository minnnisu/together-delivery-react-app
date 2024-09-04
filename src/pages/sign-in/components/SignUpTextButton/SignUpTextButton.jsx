import "./SignUpTextButton.css";

const SignUpTextButton = ({ onClick }) => {
  return (
    <button className="signup-text-button" onClick={onClick}>
      회원가입
    </button>
  );
};

export default SignUpTextButton;
