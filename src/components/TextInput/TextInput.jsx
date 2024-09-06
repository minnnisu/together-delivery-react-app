import "./TextInput.css";
import PropTypes from "prop-types";

const TextInput = ({
  placeholder,
  type = "text",
  autoCapitalize = "off",
  status = "default",
  onChange,
  value,
}) => {
  return (
    <input
      className={`input input-${status}`}
      type={type}
      pattern={type === "tel" || type === "number" ? "[0-9]*" : undefined}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      onChange={onChange}
      value={value}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "tel"]),
  autoCapitalize: PropTypes.oneOf(["off", "on"]),
  status: PropTypes.oneOf([
    "default",
    "success",
    "warning",
    "error",
    "important",
    "info",
  ]),
};

export default TextInput;
