import { useState } from "react"
import { useLogin } from "../hooks/useLogin";
import { AiOutlineLogin } from "react-icons/ai"
import { signInWithDiscord, signOut } from "../services/apiAuth"
import Spinner from "../ui/Spinner"

function Login() {
  const [email, setEmail] = useState("itsteatv@gmail.com");
  const [password, setPassword] = useState("12345");
  const { isLoading, login } = useLogin();

  const onSubmitHandler = function (event) {
    event.preventDefault();

    if (!email || !password) return;

    login({ email, password }, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
    })
  }

  const onDiscordSubmitHandler = function (event) {
    event.preventDefault();

    signInWithDiscord()
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Log in</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign Up with Google</span>
                  </button>
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                    <div className="bg-white p-1 rounded-full">
                      <svg className="w-6" viewBox="0 0 32 32">
                        <path
                          fillRule="evenodd"
                          d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign Up with GitHub</span>
                  </button>
                  <button onClick={onDiscordSubmitHandler} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                    <div className="bg-white p-1 rounded-full">
                      <svg width="24" height="24" viewBox="0 -2.672 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20.33 1.556A19.547 19.547 0 0 0 15.379 0c-.213.386-.462.904-.634 1.317a18.154 18.154 0 0 0-5.487 0A14.183 14.183 0 0 0 8.616 0a19.482 19.482 0 0 0-4.955 1.56C.527 6.295-.323 10.913.102 15.465a19.787 19.787 0 0 0 6.073 3.112 15.103 15.103 0 0 0 1.3-2.143 12.789 12.789 0 0 1-2.048-.997 10.185 10.185 0 0 0 .502-.397c3.949 1.847 8.24 1.847 12.142 0a12.343 12.343 0 0 0 .502.397 12.757 12.757 0 0 1-2.052.999c.376.752.81 1.469 1.301 2.142a19.753 19.753 0 0 0 6.076-3.114c.498-5.277-.851-9.852-3.568-13.909ZM8.013 12.665c-1.185 0-2.158-1.107-2.158-2.454s.951-2.456 2.158-2.456c1.206 0 2.178 1.107 2.158 2.456.002 1.348-.951 2.454-2.158 2.454Zm7.974 0c-1.185 0-2.158-1.107-2.158-2.454s.951-2.456 2.158-2.456c1.206 0 2.178 1.107 2.158 2.456 0 1.348-.951 2.454-2.158 2.454Z" fill="#5865F2" /></svg>
                    </div>
                    <span className="ml-4">Sign Up with Discord</span>
                  </button>
                </div>
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 py-2 inline-block text-sm text-white bg-gray-800 dark:text-white dark:bg-gray-800 tracking-wide font-medium transform translate-y-1/2">
                    Or log in with e-mail
                  </div>
                </div>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium disabled:cursor-not-allowed disabled:bg-gray-300 bg-gray-100 border border-gray-200 placeholder-gray-500 dark:text-black text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    type="email"
                    placeholder="Email"
                    autoComplete="username"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium disabled:cursor-not-allowed disabled:bg-gray-300 bg-gray-100 border border-gray-200 placeholder-gray-500 dark:text-black text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <AiOutlineLogin size={20} />
                    <span className="ml-3 disabled:cursor-not-allowed disabled:bg-gray-300">{!isLoading ? "Log in" : <Spinner />}</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 dark:text-white text-center">
                    I agree to abide by itsteatv's hotel
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'
              }}
            ></div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
