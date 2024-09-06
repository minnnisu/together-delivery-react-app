import TextInput from "../../../../components/TextInput/TextInput";
import TextInputWrapper from "../../../../components/TextInputWrapper/TextInputWrapper";

const SignUpInput = ({
  label = "label",
  status = "default",
  statusDescription = "",
  placeholder,
  type = "text",
  autoCapitalize = "off",
  onChange,
  value,
}) => {
  return (
    <TextInputWrapper
      label={label}
      status={status}
      statusDescription={statusDescription}
    >
      <TextInput
        placeholder={placeholder}
        type={type}
        autoCapitalize={autoCapitalize}
        status={status}
        onChange={onChange}
        value={value}
      />
    </TextInputWrapper>
  );
};

export default SignUpInput;
