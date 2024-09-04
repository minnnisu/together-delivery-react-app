import "./TextInputWrapper.css";
import PropTypes from "prop-types";

const TextInputWrapper = ({
  children,
  label = "label",
  status = "default",
  statusDescription = "",
}) => {
  return (
    <div className={`input-wrapper input-wrapper-${status}`}>
      <div className="input-wrapper-header">
        <p className="label">{label}</p>
        <p className="status-description">{statusDescription}</p>
      </div>
      <div className="input-wrapper-children">{children}</div>
    </div>
  );
};

TextInputWrapper.propTypes = {
  label: PropTypes.string,
  status: PropTypes.oneOf([
    "default",
    "success",
    "warning",
    "error",
    "important",
    "info",
  ]),
  statusDescription: PropTypes.string,
};

export default TextInputWrapper;
