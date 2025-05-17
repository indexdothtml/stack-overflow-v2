import { useNavigate } from "react-router-dom";

import { useNotify } from "../../hooks/useNotify";
import { useAuth } from "../../hooks/useAuth";
import service from "../../services/service";

export default function FormContainer(Props) {
  const { children, submitHandler = () => {}, submittedFrom } = Props;
  const { showNotification } = useNotify();
  const { dispatchUserLogin } = useAuth();
  const navigate = useNavigate();

  // This function will handle form submittion, checks from which page the request came with the help of submittedFrom variable and request for service according to that.
  const onSubmit = async (data) => {
    switch (submittedFrom) {
      case "login":
        // Request for login to backend and dispatch login to store.
        const response = await dispatchUserLogin(data.email, data.password);

        // Alert user about requested status whether it is success or fail.
        if (response.data) {
          showNotification(response.message);
          navigate("/dashboard");
        } else {
          showNotification(response.message, "error");
        }
        break;

      case "signup":
        const res = await service.userSignup(
          data.email,
          data.password,
          data.name
        );

        if (res.response) {
          showNotification(res.message);
          navigate("/login");
        } else {
          showNotification(res.message, "error");
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <main className="bg-gray-50 h-svh flex justify-center items-center">
        <form
          onSubmit={submitHandler(onSubmit)}
          className="w-80 bg-white flex flex-col items-center p-4 rounded-md shadow-md gap-4"
        >
          {children}
        </form>
      </main>
    </>
  );
}
