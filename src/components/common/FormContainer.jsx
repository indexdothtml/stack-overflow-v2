import { useNotify } from "../../hooks/useNotify";
import { useAuth } from "../../hooks/useAuth";

export default function FormContainer(Props) {
  const { children, submitHandler = () => {}, submittedFrom } = Props;
  const { showNotification } = useNotify();
  const { dispatchUserLogin } = useAuth();

  // This function will handle form submittion, checks from which page the request came with the help of submittedFrom variable and request for service according to that.
  const onSubmit = async (data) => {
    switch (submittedFrom) {
      case "login":
        // Request for login to backend and dispatch login to store.
        const response = await dispatchUserLogin(data.email, data.password);

        // Alert user about requested status whether it is success or fail.
        if (response.data) {
          showNotification(response.message);
        } else {
          showNotification(response.message, "error");
        }
        break;

      case "signup":
        console.log(data.name);
        console.log(data.email);
        console.log(data.password);
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
