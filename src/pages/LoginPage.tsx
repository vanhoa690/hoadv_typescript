import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

type AccountInfo = {
  username: string
  password: string
}
const LoginPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    username: '',
    password: ''
  });



  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    
    try {
      const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
        accountInfo
      })
      console.log(data.token)
      localStorage.setItem('token', data.token);
      navigate('/admin/products')

    } catch (error) {
      console.log(error);

    }

  }

  console.log(accountInfo);

  // useEffect(() => {
  //   console.log({ userName, password });

  // }, [userName, password])
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmitForm}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              value={accountInfo.username}
              onChange={handleChangeForm}
              type="username"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              value={accountInfo.password}
              onChange={handleChangeForm}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{' '}
            {/* <a
              href="/"
              className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </a> */}
            <a
              href="/"
              className="text-blue-700 hover:underline dark:text-blue-500">
              Back to Home
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
