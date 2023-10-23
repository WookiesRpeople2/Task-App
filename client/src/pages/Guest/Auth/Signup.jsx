import AuthForm from "../../../components/Auth/AuthForm";
import { useAuth } from "../../../hooks/useAuth";

const Signup = () => {
  const { auth, isLoading, error } = useAuth();

  const onSubmit = async (data) => {
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
