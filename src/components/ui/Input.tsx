const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  error,
}: any) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full p-3 border ${
          error ? "border-red-500" : "border-gray-200"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
