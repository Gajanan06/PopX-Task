import "./style1.css";

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="input-group">
      <label className="input-label">
        {label}
      </label>

      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;