import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingInput from '../Components/FloatingInput';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState('yes');

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="flex flex-col h-full p-6 pt-12">
      <h1 className="text-[28px] font-bold text-gray-900 leading-tight mb-8">
        Create your<br />PopX account
      </h1>

      <form onSubmit={handleRegister} className="flex flex-col flex-grow">
        <div className="flex-grow space-y-1">
          <FloatingInput label="Full Name" placeholder="Marry Doe" required />
          <FloatingInput label="Phone number" placeholder="Marry Doe" required />
          <FloatingInput label="Email address" placeholder="Marry Doe" required />
          <FloatingInput label="Password" type="password" placeholder="Marry Doe" required />
          <FloatingInput label="Company name" placeholder="Marry Doe" />
          
          <div className="mt-4">
            <label className="text-[13px] text-gray-700 font-medium block mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isAgency === 'yes' ? 'border-[#6C25FF]' : 'border-gray-300'}`}>
                  {isAgency === 'yes' && <div className="w-2.5 h-2.5 bg-[#6C25FF] rounded-full"></div>}
                </div>
                <span className="text-sm font-medium text-gray-800">Yes</span>
                <input 
                  type="radio" 
                  name="agency" 
                  value="yes" 
                  className="hidden"
                  checked={isAgency === 'yes'}
                  onChange={() => setIsAgency('yes')}
                />
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isAgency === 'no' ? 'border-[#6C25FF]' : 'border-gray-300'}`}>
                  {isAgency === 'no' && <div className="w-2.5 h-2.5 bg-[#6C25FF] rounded-full"></div>}
                </div>
                <span className="text-sm font-medium text-gray-800">No</span>
                <input 
                  type="radio" 
                  name="agency" 
                  value="no"
                  className="hidden"
                  checked={isAgency === 'no'}
                  onChange={() => setIsAgency('no')} 
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button 
            type="submit" 
            className="w-full bg-[#6C25FF] text-white font-medium py-3 rounded-md shadow-md hover:bg-violet-700 transition-colors pb-safe"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;