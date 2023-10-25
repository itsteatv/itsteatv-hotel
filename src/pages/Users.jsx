import { useForm } from "react-hook-form"
import { useSignUp } from "../hooks/useSignUp";
import Spinner from "../ui/Spinner"

function Users() {
  const { signUp, isLoading } = useSignUp();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  if (isLoading) {
    return <Spinner />;
  }

  const onHandleSubmit = function ({ fullName, email, password }) {
    signUp({ fullName, email, password }, {
      onSettled: () => reset
    });
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <h1 className="text-clamp text-center mt-16 text-3xl font-semibold dark:text-white">Create a new user</h1>
      <div className="settingForm:m-10 max-w-[35rem] mx-auto mt-20 grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            label="Full name"
            htmlFor="full_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full name
          </label>
          <input
            type="text"
            id="full-name"
            {...register("fullName", { required: "This field is required" })}
            disabled={isLoading}
            className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label
            label="Email address"
            htmlFor="Email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required", pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              }
            })}
            disabled={isLoading}
            className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            label="Password (min 8 characters)"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required", minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
            disabled={isLoading}
            className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label
            label="Repeat password"
            htmlFor="repeat_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "This field is required", validate: (value) => value === getValues().password || "Password needs to match"
            })}
            disabled={isLoading}
            className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm mt-1">
              {errors.passwordConfirm.message}
            </p>
          )}
        </div>
        {/* BUTTONS */}
        <button
          type="submit"
          className="disabled:cursor-not-allowed disabled:bg-gray-200 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          disabled={isLoading}
        >
          Create a new user
        </button>
        <button
          type="reset"
          className="disabled:cursor-not-allowed disabled:bg-gray-200 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          disabled={isLoading}
        >
          Cancel
        </button>
        {/* BUTTONS END */}
      </div>
    </form>
  )
}

export default Users
