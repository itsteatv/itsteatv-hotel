import UpdateUserDataForm from "../ui/UpdateUserDataForm"
import UpdateUserPasswordForm from "../ui/UpdateUserPasswordForm"

function Account() {
  return (
    <div>
      <h1 className="text-clamp text-center mt-10 text-3xl font-semibold font-Ubuntu dark:text-white">Update user setting</h1>
      <UpdateUserDataForm />
      <h1 className="text-clamp text-center mt-10 text-3xl font-semibold font-Ubuntu dark:text-white">Update password</h1>
      <UpdateUserPasswordForm />
    </div>
  )
}

export default Account
