import AuthForm from "../../../components/Auth/AuthForm";
import { useAuth } from "../../../hooks/useAuth";

const Signup = () => {
  const { auth } = useAuth();

  const onSubmit = async (data) => {
    /**
     * @param {apiEndpoint} sighup
     * @param {useFrom} data.email
     * @param {useFrom} data.password
     */
    await auth("signup", data.email, data.password);
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      apiEndpoint="Sign up"
      isLoading={isLoading}
      error={error}
    />
  );
};

export default Signup;