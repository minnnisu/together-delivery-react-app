import TextInput from "../../../../components/TextInput/TextInput";
import TextInputWrapper from "../../../../components/TextInputWrapper/TextInputWrapper";

const SignUpInput = ({ label, placeholder }) => {
  return (
    <TextInputWrapper label={label}>
      <TextInput placeholder={placeholder} />
    </TextInputWrapper>
  );
};

export default SignUpInput;
