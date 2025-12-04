
import { signInSchema } from "@/helpers/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
const SignIn = () => {
    
    const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema
    ),
  });

//   sign in with email and password
  const handleSignIn = (data) => {
    const {email , password} = data
    signInWithEmailAndPassword(auth, email, password).then((logininfo)=>{
        console.log(logininfo)

    }).catch((err)=> {
        console.log(err);
        
    })
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">

        {/* LEFT IMAGE */}
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?auto=format&fit=crop&w=900&q=60')",
          }}
        ></div>

        {/* RIGHT FORM */}
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt="logo"
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome Back!
          </p>

          <form className="mt-6" onSubmit={handleSubmit(handleSignIn)}>
            {/* Email */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>

              <input
                type="email"
                {...register("email")}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                focus:outline-none focus:ring focus:ring-blue-300"
              />

              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>

                <a className="text-xs text-gray-500 dark:text-gray-300 hover:underline" href="#">
                  Forgot Password?
                </a>
              </div>

              <input
                type="password"
                {...register("password")}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                focus:outline-none focus:ring focus:ring-blue-300"
              />

              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white uppercase
                transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700
                focus:outline-none focus:ring focus:ring-gray-300"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a
              href="/signup"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or Create Account
            </a>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
