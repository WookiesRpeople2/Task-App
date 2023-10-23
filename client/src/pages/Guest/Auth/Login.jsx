import AuthForm from "../../../components/Auth/AuthForm";
import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
  const { auth, isLoading, error } = useAuth();

  const onSubmit = async (data) => {
    await auth("login", data.email, data.password);
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      apiEndpoint="Login"
      isLoading={isLoading}
      error={error}
    />
  );
};

export default Login;
