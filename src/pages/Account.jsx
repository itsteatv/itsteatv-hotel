import UpdateUserDataForm from "../ui/UpdateUserDataForm"

function Account() {
  return (
    <div>
      <h1 className="text-clamp text-center mt-16 text-3xl font-semibold font-Ubuntu dark:text-white">Update user setting</h1>
      <UpdateUserDataForm />
      <h1 className="text-clamp text-center mt-16 text-3xl font-semibold font-Ubuntu dark:text-white">Update user data</h1>
      <h1 className="text-clamp text-center mt-16 text-3xl font-semibold font-Ubuntu dark:text-white">Update password</h1>
    </div>
  )
}

export default Account
