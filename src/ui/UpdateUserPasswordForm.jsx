import { useEffect, useState } from "react";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useForm } from "react-hook-form";

function UpdateUserPasswordForm() {

    const { register, handleSubmit, formState, getValues, reset } = useForm();
    const { errors } = formState;

    const { updateUser, isUpdating } = useUpdateUser();

    function onSubmit({ password }) {
        updateUser({ password }, { onSettled: reset });
    }

    return (
        <div className="flex items-center justify-center mt-16 dark:bg-gray-800">
            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-9">
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            label="Password (min 8 characters)"
                            className="mb-3 block text-base font-medium text-gray-900 dark:text-white"
                        >
                            New Password (min 8 characters)
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
                            disabled={isUpdating}
                            className="disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            label="Repeat password"
                            htmlFor="repeat_password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            id="passwordConfirm"
                            {...register("passwordConfirm", {
                                required: "This field is required", validate: (value) => value === getValues().password || "Password needs to match"
                            })}
                            disabled={isUpdating}
                            className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.passwordConfirm && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.passwordConfirm.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <button type="submit" disabled={isUpdating} className="disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-gray-300 disabled:dark:opacity-50 disabled:dark:text-black disabled:text-black text-white duration-300 w-full bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Update password
                        </button>
                        <button type="reset" disabled={isUpdating} className="disabled:cursor-not-allowed disabled:bg-gray-200 disabled:dark:bg-gray-300 disabled:dark:opacity-50 disabled:dark:text-black disabled:text-black text-white duration-300 w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUserPasswordForm
