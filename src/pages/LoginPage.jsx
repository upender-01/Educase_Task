import { useNavigate } from 'react-router-dom';
import FloatingInput from '../Components/FloatingInput';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="flex flex-col h-full p-6 pt-12">
      <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-3">
        Signin to your<br />PopX account
      </h1>
      <p className="text-gray-500 text-[15px] mb-8 leading-relaxed pr-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form onSubmit={handleLogin} className="flex flex-col flex-grow">
        <FloatingInput label="Email Address" placeholder="Enter email address" />
        <FloatingInput label="Password" type="password" placeholder="Enter password" />
        
        <button 
          type="submit" 
          className="w-full bg-[#cbcbcb] text-white font-medium py-3 rounded-md mt-2 hover:bg-gray-400 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;