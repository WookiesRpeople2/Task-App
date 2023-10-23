import { jwtDecode } from "../../hooks/jwtDecode";
import { useAuth } from "../../hooks/useAuth";
import AuthForm from "../../components/Auth/AuthForm";
const EditProfile = () => {
  const jwt = jwtDecode();
  const { updateUser, isLoading, error } = useAuth();
  const onSubmit = async (data) => {
    await updateUser(data);
  };

  return (
    <>
      <AuthForm
        onSubmit={onSubmit}
        email={jwt.email}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default EditProfile;
