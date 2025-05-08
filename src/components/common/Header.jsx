import { Link, useNavigate, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { useAuth } from "../../hooks/useAuth";
import { useNotify } from "../../hooks/useNotify";
import { Button } from "./index";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticated, dispatchUserLogout } = useAuth();
  const { showNotification } = useNotify();

  // Do not show login and signup button if already on login and signup page.
  const showLoginAndSignupButton = !(
    pathname.endsWith("login") || pathname.endsWith("signup")
  ) ? (
    <div className="flex gap-2">
      <Button buttonText="Login" onClick={() => navigate("/login")} />
      <Button buttonText="Signup" onClick={() => navigate("/signup")} />
    </div>
  ) : null;

  // Handle logout button click
  const handleLogout = async () => {
    // Request for logout to backend and dispatch logout to store.
    const response = await dispatchUserLogout();

    // Alert user about requested status.
    if (response.data) {
      showNotification(response.message);
    } else {
      showNotification(response.message, "error");
    }
  };

  return (
    <header className="flex justify-between items-center shadow-sm p-4 bg-white sticky top-0 z-10">
      <div>
        {isAuthenticated && <MenuRoundedIcon />}
        <Link to="/">
          <span className="cursor-pointer">
            stack
            <span className="font-bold">
              Overflow<span className="text-blue-400">V2</span>
            </span>
          </span>
        </Link>
      </div>
      <div className="relative">
        <SearchRoundedIcon className="absolute top-2 left-2" />
        <input
          type="text"
          name="searchBar"
          id="id_searchBar"
          placeholder="Search..."
          className="border border-gray-300 rounded-md w-2xl p-1.5 pl-8 focus:outline-blue-400 focus:outline-offset-4"
        />
      </div>
      <div>
        {isAuthenticated ? (
          <Button buttonText="Logout" onClick={handleLogout} />
        ) : (
          showLoginAndSignupButton
        )}
      </div>
    </header>
  );
}
