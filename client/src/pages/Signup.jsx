import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data.email);

  return (
    <div className="px-4 pt-7 pb-8 w-1/2 max-w-md mx-auto">
      <h2 className="text-5xl text-center">Sign In</h2>

      <form className="my-20 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-2xl">Email:</label>
        <input
          type="email"
          className="border w-full h-10 rounded-md"
          {...register("email", { required: true })}
        />

        <label className="block text-2xl">Password:</label>
        <input
          className="border w-full h-10 rounded-md"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />

        <button className="bg-emerald-400 hover:bg-blue-700 duration-500 text-white text-sm font-semibold px-14 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
