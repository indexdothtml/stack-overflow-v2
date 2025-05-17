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

  /*
  Below regix pattern checks for string which follows below rules.
    At least 8 characters long.
    Contains at least one lowercase letter.
    Contains at least one uppercase letter.
    Contains at least one digit.
    Contains at least one special character from the set @$!%*?&.
  */
  const passwordPatternRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isPasswordValid = passwordPatternRegex.test(password);

  if (!isPasswordValid) {
    return false;
  } else {
    return true;
  }
}
