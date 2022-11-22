import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '', // required
    password: '', // required
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {};

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center py-2 sm:px-6 lg:px-8">
        <div className="w-96 max-w-md">
          <div className="flex flex-col items-center justify-center px-4 py-8 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:px-6 sm:py-8 sm:space-y-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center space-y-1">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Login
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sign in to your account
              </p>
            </div>
          </div>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white w-96">
          <form onSubmit={handleLogin}>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Email address
              </label>
              <input
                type="email"
                onChange={handleChange}
                className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small
                id="emailHelp"
                className="block mt-1 text-xs text-gray-600"
              >
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group mb-3">
              <span>
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-500">
                  Register here
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="
              px-6
              py-2.5
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
              Signin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
