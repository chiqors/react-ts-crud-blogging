import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authRegister } from '../utils/UserUtils';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // required
    password: '', // required
    password2: '', // required
    status: 'inactive'
  });
  const navigate = useNavigate();

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      alert('Password tidak sama');
      return;
    }
    const resp = await authRegister(formData);
    console.log(resp);
    return navigate('/login');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center py-2 sm:px-6 lg:px-8">
        <div className="w-96 max-w-md">
          <div className="flex flex-col items-center justify-center px-4 py-8 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:px-6 sm:py-8 sm:space-y-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center space-y-1">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Register
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Create an account
              </p>
            </div>
          </div>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-5/12">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col w-full">
                <div className="mb-4">
                  <label
                    className="form-label inline-block mb-2 text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full p-5">
                <div className="form-group mb-4">
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={formData.password}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password2"
                    className="block w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="exampleInputPassword2"
                    placeholder="Confirm Password"
                    value={formData.password2}
                  />
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="
                            px-6
                            py-2.5
                            my-4
                            w-full
                          bg-blue-600
                          text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                          hover:bg-blue-700 hover:shadow-lg
                          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                          active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
