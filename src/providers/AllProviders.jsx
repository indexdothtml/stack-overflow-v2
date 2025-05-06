//Redux provider
import { Provider as ReduxProvider } from "react-redux";
import { setupStore } from "../app/store";

// Router provider
import { RouterProvider } from "react-router-dom";
import { routes } from "../pageRoutes/routes";

export default function AllProviders(Props) {
  const { children } = Props;
  const store = setupStore();
  return (
    <>
      <ReduxProvider store={store}>
        <RouterProvider router={routes}>{children}</RouterProvider>
      </ReduxProvider>
    </>
  );
}
