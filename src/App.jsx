import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Layout } from "./components/common/index";
import { useAuth } from "./hooks/useAuth";

function App() {
  const navigate = useNavigate();
  const { dispatchCurrentActiveUser } = useAuth();

  // Checks for active user session. (This will also solve the problem if user tries to manipulate url manually or refresh the page)
  useEffect(() => {
    (async function () {
      const activeUserSession = await dispatchCurrentActiveUser();
      if (activeUserSession) {
        navigate("/dashboard");
      }
    })();
  }, []);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
