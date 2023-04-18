// NALEZY NAJPIERW SPRAWDZIĆ CZY FORMULARZE NIE SĄ EMPTY

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const CheckEmail = (email) => {
  return emailRegex.test(email);
};

function CheckIfIsntEmpty(value) {
  return value.trim() !== "";
}

const CheckIfUserAdult = (dateOfBirth) => {
  if (CheckIfIsntEmpty(dateOfBirth)) {
    const MIN_AGE = 16;

    const currentDate = new Date();
    const userDateOfBirth = new Date(dateOfBirth);

    const differenceInMilliseconds =
      currentDate.getTime() - userDateOfBirth.getTime();
    const yearsOld = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365)
    );
    return yearsOld >= MIN_AGE;
  } else {
    return false;
  }
};

const CheckPasswordLength = (password) => {
  if (CheckIfIsntEmpty(password)) {
    const PASSWORD_LENGTH = 7;

    return password.length >= PASSWORD_LENGTH;
  } else {
    return false;
  }
};

const CheckIfPasswordsAreMatching = (password, repeatedPassword) => {
  if (CheckIfIsntEmpty(password) && CheckIfIsntEmpty(repeatedPassword)) {
    return password === repeatedPassword;
  } else {
    return false;
  }
};

const CheckIfFormIsValid = (
  name,
  surname,
  email,
  birthday,
  password1,
  password2
) => {
  if (
    CheckIfIsntEmpty(name) &&
    CheckIfIsntEmpty(surname) &&
    CheckEmail(email) &&
    CheckIfUserAdult(birthday) &&
    CheckPasswordLength(password1) &&
    CheckIfPasswordsAreMatching(password1, password2)
  ) {
    return true;
  } else {
    return false;
  }
};


export {
  CheckEmail,
  CheckPasswordLength,
  CheckIfPasswordsAreMatching,
  CheckIfUserAdult,
  CheckIfIsntEmpty,
  CheckIfFormIsValid,
};
