
const MobileWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] h-[812px] bg-white shadow-2xl relative flex flex-col overflow-x-hidden overflow-y-auto sm:rounded-[2rem] border-8 border-gray-900">
        {children}
      </div>
    </div>
  );
};

export default MobileWrapper;