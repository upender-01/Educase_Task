
const FloatingInput = ({ label, type = "text", placeholder, required, darkLabel = false }) => {
  return (
    <div className="relative mb-5">
      <label className={`absolute -top-2.5 left-3 bg-white px-1 text-xs font-semibold z-10 ${darkLabel ? 'text-gray-700' : 'text-[#6C25FF]'}`}>
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-[#6C25FF] text-gray-800 placeholder-gray-400"
      />
    </div>
  );
};

export default FloatingInput;