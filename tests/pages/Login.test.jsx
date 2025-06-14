import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { renderWithProviders } from "../test-utils/redux-test-util";
import { Login, Dashboard } from "../../src/pages";
import { expect } from "vitest";

describe("Login", () => {
  it("shows with email and password field, forget password and signup page link, login button and signup info for user.", () => {
    renderWithProviders(<Login />);

    const email = screen.getByRole("textbox", { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const forgotPasswordLink = screen.getByRole("link", {
      name: /forgot password?/i,
    });
    const signupPageLink = screen.getByRole("link", { name: /sign up/i });
    const loginButton = screen.getByRole("button", { name: /login/i });
    const userInfoTextForSignup = screen.getByText(/Don't have an account?/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(signupPageLink).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(userInfoTextForSignup).toBeInTheDocument();
  });

  it("should not show name input field, login page link.", () => {
    renderWithProviders(<Login />);

    const nameInputField = screen.queryByRole("textbox", { name: /name/i });
    const userInfoTextForLogin = screen.queryByText(/Already have an account?/);

    expect(nameInputField).not.toBeInTheDocument();
    expect(userInfoTextForLogin).not.toBeInTheDocument();
  });

  it("should not continue if both email and password is not entered, instead focus on email field first.", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Login />);

    const emailInputField = screen.getByRole("textbox", { name: /email/i });
    const passwordInputField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await user.clear(emailInputField);
    await user.clear(passwordInputField);
    await user.click(loginButton);

    expect(emailInputField).toHaveFocus();
  });

  it("should not continue if only email is entered and not password, instead focus on password field.", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Login />);

    const emailInputField = screen.getByRole("textbox", { name: /email/i });
    const passwordInputField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await user.clear(emailInputField);
    await user.clear(passwordInputField);
    await user.type(emailInputField, "test@email.com");
    await user.click(loginButton);

    expect(passwordInputField).toHaveFocus();
  });

  it("should not continue if only password is entered and not email, instead focus on email field.", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Login />);

    const emailInputField = screen.getByRole("textbox", { name: /email/i });
    const passwordInputField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    await user.clear(emailInputField);
    await user.clear(passwordInputField);
    await user.type(passwordInputField, "Password@123");
    await user.click(loginButton);

    expect(emailInputField).toHaveFocus();
  });
});
