export function validateEmail(email = "") {
  if (email === "") {
    return false;
  }

  const emailPatternRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isEmailValid = emailPatternRegex.test(email);

  if (!isEmailValid) {
    return false;
  } else {
    return true;
  }
}

export function validatePassword(password = "") {
  if (password === "") {
    return false;
  }

  const passwordPatternRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isPasswordValid = passwordPatternRegex.test(password);

  if (!isPasswordValid) {
    return false;
  } else {
    return true;
  }
}
