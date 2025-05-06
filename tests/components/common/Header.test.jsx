import { screen, waitFor } from "@testing-library/react";

import Header from "../../../src/components/common/Header";
import { renderWithProviders } from "../../test-utils/redux-test-util";
import { login, logout } from "../../../src/features/auth/authSlice";

describe("Heading", () => {
  it("shows searchbar", () => {
    renderWithProviders(<Header />);

    // Website name and searchbar should be visible
    const searchBar = screen.getByPlaceholderText(/search/i);
    expect(searchBar).toBeInTheDocument();
  });

  it("shows logout and menu button if user is logged-in", async () => {
    const { store } = renderWithProviders(<Header />);

    store.dispatch(login({ userId: "111", name: "Abhishek" }));
    // Check user is logged-in
    const isLoggedIn = store.getState().authentication.isLoggedIn;
    expect(isLoggedIn).toBe(true);

    // Logout and Menu button should be visible when user is logged-in

    // method 1
    // const logoutButton = await screen.findByText(/Logout/i);
    // const menuButton = await screen.findByTestId("MenuRoundedIcon");
    // expect(logoutButton).toBeInTheDocument();
    // expect(menuButton).toBeInTheDocument();

    //method 2
    await waitFor(() => {
      const logoutButton = screen.getByRole("button", { name: /Logout/i });
      const menuButton = screen.getByTestId("MenuRoundedIcon");
      expect(logoutButton).toBeInTheDocument();
      expect(menuButton).toBeInTheDocument();
    });

    // Resetting the store states
    store.dispatch(logout());
  });

  it("does not show login and signup button if user is logged-in", async () => {
    const { store } = renderWithProviders(<Header />);
    // Dispatch logout to further test the header
    store.dispatch(login({ userId: "111", name: "Abhishek" }));
    // Check user is logged-in
    const isLoggedIn = store.getState().authentication.isLoggedIn;
    expect(isLoggedIn).toBe(true);

    // Login and Signout button should not be visible when user is logged-in
    await waitFor(() => {
      const loginButton = screen.queryByRole("button", { name: /login/i });
      const signoutButton = screen.queryByRole("button", { name: /signup/i });
      expect(loginButton).not.toBeInTheDocument();
      expect(signoutButton).not.toBeInTheDocument();
    });

    // Resetting the store states
    store.dispatch(logout());
  });

  it("shows login and signup button if user is logged-out", async () => {
    const { store } = renderWithProviders(<Header />);
    // Dispatch logout to further test the header
    store.dispatch(logout());
    // Check user is logged-out
    const isLoggedIn = store.getState().authentication.isLoggedIn;
    expect(isLoggedIn).toBe(false);

    // When user is not logged-in show login and signup button
    await waitFor(() => {
      const loginButton = screen.getByRole("button", { name: /Login/i });
      const signupButton = screen.getByRole("button", { name: /Signup/i });
      expect(loginButton).toBeInTheDocument();
      expect(signupButton).toBeInTheDocument();
    });
  });

  it("does not show logout and menu button if user is logged-out", async () => {
    const { store } = renderWithProviders(<Header />);
    // Dispatch logout to further test the header
    store.dispatch(logout());
    // Check user is logged-out
    const isLoggedIn = store.getState().authentication.isLoggedIn;
    expect(isLoggedIn).toBe(false);

    // When user is not logged-in do not show logout and menu button
    await waitFor(() => {
      const logoutButton = screen.queryByRole("button", { name: /logout/i });
      const menuButton = screen.queryByTestId("MenuRoundedIcon");
      expect(logoutButton).not.toBeInTheDocument();
      expect(menuButton).not.toBeInTheDocument();
    });
  });
});
