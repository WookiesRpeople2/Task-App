import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AuthForm = ({ onSubmit, apiEndpoint, error, isLoading, email }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="px-4 pt-7 pb-8 w-1/2 max-w-md mx-auto">
      <h2 className="text-5xl text-center">{apiEndpoint}</h2>

      <form className="my-20 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-2xl">Email:</label>
        <input
          type="email"
          className="border w-full h-10 px-3 rounded-md"
          defaultValue={email}
          {...register("email", { required: true })}
        />

        <label className="block text-2xl">Password:</label>
        <input
          className="border w-full h-10 px-3 rounded-md"
          type="password"
          {...register("password", { required: true })}
        />

        <button
          disabled={isLoading}
          className="bg-emerald-400 hover:bg-blue-700 duration-500 text-white text-sm font-semibold px-14 py-3 rounded"
        >
          Submit
        </button>

        {error && (
          <div className="bg-red-50 border-b border-red-400 text-red-800 text-sm p-4 flex justify-between">
            <span>{error}</span>
          </div>
        )}
        {apiEndpoint == "Login" && (
          <div className="text-blue-800 underline">
            <Link to="/signup">Don't have an account yet signup</Link>
          </div>
        )}
        {apiEndpoint == "Sign up" && (
          <div className="text-blue-800 underline">
            <Link to="/login">already have an account?</Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
