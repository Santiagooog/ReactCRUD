export const Button = ({ children, variant = "default", onClick }) => {
  const baseClass = "px-4 py-2 rounded-lg transition";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-200",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={`${baseClass} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
