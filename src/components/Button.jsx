import "./style1.css";

const Button = ({
  text,
  backgroundColor,
  textColor,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;