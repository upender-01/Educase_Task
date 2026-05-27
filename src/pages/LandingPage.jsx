import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-full p-6 pb-10">
      <div className="mt-auto">
        <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-3">Welcome to PopX</h1>
        <p className="text-gray-500 text-[15px] mb-8 leading-relaxed pr-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        <div className="flex flex-col gap-3">
          <Link to="/register" className="w-full bg-[#6C25FF] text-white font-medium py-3 rounded-md text-center hover:bg-violet-700 transition-colors">
            Create Account
          </Link>
          <Link to="/login" className="w-full bg-[#e8e0ff] text-[#1c1c1c] font-medium py-3 rounded-md text-center hover:bg-violet-200 transition-colors">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;