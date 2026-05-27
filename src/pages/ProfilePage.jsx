const ProfilePage = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-4 py-5 border-b border-gray-200">
        <h2 className="text-[18px] font-medium text-gray-800">Account Settings</h2>
      </div>

      {/* Profile Info */}
      <div className="p-6 bg-gray-50 flex-grow border-b border-dashed border-gray-300 relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            {/* Placeholder for actual image */}
            <div className="w-[76px] h-[76px] rounded-full bg-gray-300 overflow-hidden shadow-sm">
               <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {/* Camera Icon Badge */}
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full flex items-center justify-center border-2 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-white">
                <path fillRule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Marry Doe</h3>
            <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed pr-2">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      
      {/* Empty space below dashed line to match design */}
      <div className="h-48 border-b border-dashed border-gray-300"></div>
    </div>
  );
};

export default ProfilePage;