export const Input = ({ value, onChange, className, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder || "Escribe algo..."}
      className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
